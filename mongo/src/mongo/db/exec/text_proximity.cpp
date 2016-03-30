/**
 *    Copyright (C) 2015 MongoDB Inc.
 *
 *    This program is free software: you can redistribute it and/or  modify
 *    it under the terms of the GNU Affero General Public License, version 3,
 *    as published by the Free Software Foundation.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *    As a special exception, the copyright holders give permission to link the
 *    code of portions of this program with the OpenSSL library under certain
 *    conditions as described in each individual source file and distribute
 *    linked combinations including the program with the OpenSSL library. You
 *    must comply with the GNU Affero General Public License in all respects for
 *    all of the code used other than as permitted herein. If you modify file(s)
 *    with this exception, you may extend this exception to your version of the
 *    file(s), but you are not obligated to do so. If you do not wish to do so,
 *    delete this exception statement from your version. If you delete this
 *    exception statement from all source files in the program, then also delete
 *    it in the license file.
 */

#include "mongo/db/exec/text_proximity.h"

#include <map>
#include <vector>
#include <algorithm>
#include <iostream>

#include "mongo/db/concurrency/write_conflict_exception.h"
#include "mongo/db/exec/index_scan.h"
#include "mongo/db/exec/scoped_timer.h"
#include "mongo/db/exec/working_set.h"
#include "mongo/db/exec/working_set_common.h"
#include "mongo/db/exec/working_set_computed_data.h"
#include "mongo/db/jsobj.h"
#include "mongo/db/matcher/matchable.h"
#include "mongo/db/query/internal_plans.h"
#include "mongo/db/record_id.h"
#include "mongo/stdx/memory.h"

namespace mongo {

using std::unique_ptr;
using std::vector;
using std::string;
using stdx::make_unique;

using fts::FTSSpec;

const char* TextProximityStage::kStageType = "TEXT_PROXIMITY";

const bool tp_debug = false;

TextProximityStage::TextProximityStage(OperationContext* txn,
                                       const TextStageParams& params,
                                       WorkingSet* ws,
                                       const MatchExpression* filter,
                                       uint32_t proximityWindow,
                                       int reorderBound)
    : PlanStage(kStageType, txn),
      _params(params),
      _ws(ws),
      _proximityWindow(proximityWindow),
      _reorderBound(reorderBound),
      _filter(filter),
      _idRetrying(WorkingSet::INVALID_ID)
{
    if (tp_debug)
        std::cout << "TextProximityState::ctor" << std::endl;
}

TextProximityStage::~TextProximityStage() {}

void TextProximityStage::addChild(unique_ptr<PlanStage> child) {
    _children.push_back(std::move(child));
}

bool TextProximityStage::isEOF() {
    return _internalState == State::kDone;
}

void TextProximityStage::doSaveState() {
    if (_recordCursor) {
        _recordCursor->saveUnpositioned();
    }
}

void TextProximityStage::doRestoreState() {
    if (_recordCursor) {
        invariant(_recordCursor->restore());
    }
}

void TextProximityStage::doDetachFromOperationContext() {
    if (_recordCursor)
        _recordCursor->detachFromOperationContext();
}

void TextProximityStage::doReattachToOperationContext() {
    if (_recordCursor)
        _recordCursor->reattachToOperationContext(getOpCtx());
}

void TextProximityStage::doInvalidate(OperationContext* txn, const RecordId& dl, InvalidationType type) {
    // Remove the RecordID from internal data structures
}

std::unique_ptr<PlanStageStats> TextProximityStage::getStats() {
    _commonStats.isEOF = isEOF();

    if (_filter) {
        BSONObjBuilder bob;
        _filter->toBSON(&bob);
        _commonStats.filter = bob.obj();
    }

    unique_ptr<PlanStageStats> ret = make_unique<PlanStageStats>(_commonStats, STAGE_TEXT_PROXIMITY);
    ret->specific = make_unique<TextProximityStats>(_specificStats);

    for (auto&& child : _children) {
        ret->children.emplace_back(child->getStats());
    }

    return ret;
}

const SpecificStats* TextProximityStage::getSpecificStats() const {
    return &_specificStats;
}

PlanStage::StageState TextProximityStage::doWork(WorkingSetID* out) {
    if (isEOF()) {
        return PlanStage::IS_EOF;
    }

    PlanStage::StageState stageState = PlanStage::IS_EOF;

    switch (_internalState) {
        case State::kInit:
            stageState = initStage(out);
            break;
        case State::kReadingTerms:
            stageState = readFromChildren(out);
            break;
        case State::kReturningResults:
            stageState = returnResults(out);
            break;
        case State::kDone:
            // Should have been handled above.
            invariant(false);
            break;
    }

    return stageState;
}

PlanStage::StageState TextProximityStage::initStage(WorkingSetID* out) {
    *out = WorkingSet::INVALID_ID;
    try {
        _recordCursor = _params.index->getCollection()->getCursor(getOpCtx());
        _internalState = State::kReadingTerms;
        return PlanStage::NEED_TIME;
    } catch (const WriteConflictException& wce) {
        invariant(_internalState == State::kInit);
        _recordCursor.reset();
        return PlanStage::NEED_YIELD;
    }
}

PlanStage::StageState TextProximityStage::readFromChildren(WorkingSetID* out) {

    // Check to see if there were any children added in the first place.
    if (_children.size() == 0) {
        if (tp_debug)
            std::cout << "readFromChildren:001" << std::endl;
        _internalState = State::kDone;
        return PlanStage::IS_EOF;
    }

    // accumulate all results from all children

    // Either retry the last WSM we worked on or get a new one from our current child.
    WorkingSetID id;
    StageState childState;

    if (_idRetrying == WorkingSet::INVALID_ID) {
        if (tp_debug)
            std::cout << "readFromChildren:002" << std::endl;
        childState = _children[_currentChild]->work(&id);
    } else {
        if (tp_debug)
            std::cout << "readFromChildren:003" << std::endl;
        childState = ADVANCED;
        id = _idRetrying;
        _idRetrying = WorkingSet::INVALID_ID;
    }

    switch(childState) {
    case PlanStage::ADVANCED: {
        if (tp_debug)
            std::cout << "readFromChildren:004" << std::endl;
        return addTerm(id, out);
    }
    case PlanStage::IS_EOF: {
        if (tp_debug)
            std::cout << "readFromChildren:005" << std::endl;
        // Done with this child.
        ++_currentChild;

        if (tp_debug)
            std::cout << "currentChild = " << _currentChild
                  << ", children.size = " << _children.size() << std::endl;

        if (_currentChild < _children.size()) {
            if (tp_debug)
                std::cout << "readFromChildren:005a" << std::endl;
            // We have another child to read from.
            return PlanStage::NEED_TIME;
        }

        // If we're here we are done reading results.  Move to the next state.
        collectResults();
        _resultSetIterator = _resultSet.begin();
        _internalState = State::kReturningResults;

        return PlanStage::NEED_TIME;
    }
    case PlanStage::FAILURE: {
        if (tp_debug)
            std::cout << "readFromChildren:006" << std::endl;

        // If a stage fails, it may create a status WSM to indicate why it
        // failed, in which case 'id' is valid.  If ID is invalid, we
        // create our own error message.
        if (WorkingSet::INVALID_ID == id) {
            if (tp_debug)
                std::cout << "readFromChildren:006a" << std::endl;
            mongoutils::str::stream ss;
            ss << "TEXT_PROXIMITY stage failed to read in results from child";
            Status status(ErrorCodes::InternalError, ss);
            *out = WorkingSetCommon::allocateStatusMember(_ws, status);
        } else {
            if (tp_debug)
                std::cout << "readFromChildren:006b" << std::endl;
            *out = id;
        }
        return PlanStage::FAILURE;
    }
    default: {
        if (tp_debug)
            std::cout << "readFromChildren:007 (state = "
                    << PlanStage::stateStr(childState)
                    << ")" << std::endl;
        // Propagate WSID from below.
        *out = id;
        return childState;
    }
    }
}

bool TextProximityStage::proximitySort(TextRecordData& x, TextRecordData& y) {
    if (x.recId < y.recId) return true;
    if (x.recId > y.recId) return false;
    if (x.pos < y.pos) return true;
    return false;
}

uint64_t _hash(const std::string& s) {
    uint64_t r = 0x01000193;
    const unsigned char* p = (unsigned char*)s.c_str();
    for (; *p; ++p) r = (r * 0x01000193) ^ *p;
    return r;
}

int _indexOf(const std::vector<uint64_t>& v, uint64_t key) {
    for (uint32_t n = 0; n<v.size(); ++n)
        if (v[n] == key) return n;
    return -1;
}

bool _checkPermutation(std::vector<uint32_t>& perm, uint32_t bound) {
    // bubblesort.
    if (tp_debug)
        std::cout << "checkPermutation(bound = " << bound << ")" << std::endl;

    bool swapped = true;
    uint32_t nswaps = 0;
    uint32_t j = 0;
    uint32_t n = perm.size();

    while (swapped) {
        swapped = false;
        ++j;
        for (uint32_t i = 0; i < n-j; ++i) {
            if (perm[i] > perm[i+1]) {
                std::swap(perm[i], perm[i+1]);
                swapped = true;
                ++nswaps;
            }
        }
    }
    if (tp_debug)
        std::cout << "checkPermutation : nswaps = " << nswaps << std::endl;
    return (nswaps <= bound);
}

void TextProximityStage::collectResults() {

    uint64_t recId = 0;
    uint32_t nterms = _params.query.getTermsForBounds().size();

    std::vector<const TextRecordData*> runv;    // run of records for common RecordId.
    std::vector<uint64_t>* termv;               // query term hashes in given order.
    std::vector<uint32_t>* termperm;            // permutation of terms in matching window.

    if (tp_debug)
        std::cout << "_reorderBound = " << _reorderBound << std::endl;

    if (_reorderBound >= 0) {
        // set up permutation testing.
        termperm = new std::vector<uint32_t>(nterms);
        termv = new std::vector<uint64_t>(nterms);
        std::vector<std::string>::const_iterator it;
        for (it = _params.query.getTermv().begin(); it != _params.query.getTermv().end(); ++it) {
            if (tp_debug)
                std::cout << "termv->push_back(_hash(" << *it << "));" << std::endl;
            termv->push_back(_hash(*it));
        }
    }

    // sort the entire working set and process runs of common RecordIds
    std::sort(_posv.begin(), _posv.end(), proximitySort);
    std::vector<TextRecordData>::const_iterator it2 = _posv.begin();

    for (; it2 != _posv.end(); ++it2) {
        if (it2->recId != recId) {
            // we have a run of common recordIds stored in runv.
            termperm->clear();
            if (tp_debug)
                std::cout << "runv.size() = " << runv.size() << std::endl;

            std::vector<const TextRecordData*>::const_iterator it3;
            for (it3 = runv.begin(); it3 != runv.end(); ++it3) {
                // scan for all terms within _proximityWindow.

                std::set<std::string> terms;    // for counting unique matching terms.
                uint32_t width = 0;             // current width of match window.
                uint32_t pos = (*it3)->pos;     // current term position.
                uint32_t depth = 0;

                std::vector<const TextRecordData*>::const_iterator it4;
                for (it4 = it3; it4 != runv.end() && width < _proximityWindow; ++it4, ++depth) {

                    const std::string& term = (*it4)->term;
                    uint32_t termPos = (*it4)->pos;

                    if (tp_debug) {
                        for (uint32_t z = 0; z<depth; ++z) std::cout << ' ';
                        std::cout << "(id, term, pos) = (" << recId << ", "
                                  << term << ", " << termPos << ")" << std::endl;
                    }

                    width += (termPos - pos);
                    pos = termPos;
                    terms.insert(term);

                    if (_reorderBound >= 0) {
                        int i = _indexOf(*termv, _hash(term));
                        if (-1==i) {
                            if (tp_debug)
                                std::cout << "Uh-oh, internal inconsistentcy: index term hash"
                                         " does not match any query term hash!" << std:: endl;
                            break;
                        }
                        termperm->push_back((uint32_t)i);
                    }

                    if (terms.size() == nterms && width < _proximityWindow) {
                        if (-1 == _reorderBound || _checkPermutation(*termperm, _reorderBound))
                            _resultSet.push_back((*it4)->wsid);
                        break;
                    }
                }
            }
            recId = it2->recId;
            runv.clear();
        }
        runv.push_back(&(*it2));
    }
}

PlanStage::StageState TextProximityStage::returnResults(WorkingSetID* out) {
    if (_resultSetIterator == _resultSet.end()) {
        _internalState = State::kDone;
        return PlanStage::IS_EOF;
    }
    *out = *_resultSetIterator;
    ++_resultSetIterator;
    return PlanStage::ADVANCED;
}

/**
 * Provides support for covered matching on non-text fields of a compound text index.
 */
class TextMatchableDocument : public MatchableDocument {
public:
    TextMatchableDocument(OperationContext* txn,
                          const BSONObj& keyPattern,
                          const BSONObj& key,
                          WorkingSet* ws,
                          WorkingSetID id,
                          unowned_ptr<SeekableRecordCursor> recordCursor)
        : _txn(txn),
          _recordCursor(recordCursor),
          _keyPattern(keyPattern),
          _key(key),
          _ws(ws),
          _id(id) {}

    BSONObj toBSON() const {
        return getObj();
    }

    ElementIterator* allocateIterator(const ElementPath* path) const final {
        WorkingSetMember* member = _ws->get(_id);
        if (!member->hasObj()) {
            // Try to look in the key.
            BSONObjIterator keyPatternIt(_keyPattern);
            BSONObjIterator keyDataIt(_key);

            while (keyPatternIt.more()) {
                BSONElement keyPatternElt = keyPatternIt.next();
                verify(keyDataIt.more());
                BSONElement keyDataElt = keyDataIt.next();

                if (path->fieldRef().equalsDottedField(keyPatternElt.fieldName())) {
                    if (Array == keyDataElt.type()) {
                        return new SimpleArrayElementIterator(keyDataElt, true);
                    } else {
                        return new SingleElementElementIterator(keyDataElt);
                    }
                }
            }
        }

        // Go to the raw document, fetching if needed.
        return new BSONElementIterator(path, getObj());
    }

    void releaseIterator(ElementIterator* iterator) const final {
        delete iterator;
    }

    // Thrown if we detect that the document being matched was deleted.
    class DocumentDeletedException {};

private:
    BSONObj getObj() const {
        if (!WorkingSetCommon::fetchIfUnfetched(_txn, _ws, _id, _recordCursor))
            throw DocumentDeletedException();

        WorkingSetMember* member = _ws->get(_id);

        // Make it owned since we are buffering results.
        member->makeObjOwnedIfNeeded();
        return member->obj.value();
    }

    OperationContext* _txn;
    unowned_ptr<SeekableRecordCursor> _recordCursor;
    BSONObj _keyPattern;
    BSONObj _key;
    WorkingSet* _ws;
    WorkingSetID _id;
};

PlanStage::StageState TextProximityStage::addTerm(WorkingSetID wsid, WorkingSetID* out) {
    WorkingSetMember* wsm = _ws->get(wsid);
    invariant(wsm->getState() == WorkingSetMember::RID_AND_IDX);
    invariant(1 == wsm->keyData.size());
    IndexKeyDatum newKeyData = wsm->keyData.back();  // copy to keep it around.
    uint64_t loc = wsm->recordId.repr();
    TextRecordData* textRecordData = &_posMap[wsm->recordId];

    if (textRecordData->rejected) {
        // We rejected this document for not matching the filter.
        invariant(WorkingSet::INVALID_ID == textRecordData->wsid);
        _ws->free(wsid);
        if (tp_debug)
            std::cout << "addTerm:001" << std::endl;
        return NEED_TIME;
    }

    if (WorkingSet::INVALID_ID == textRecordData->wsid) {
        if (tp_debug)
            std::cout << "addTerm:002" << std::endl;

        // We haven't seen this RecordId before.
        bool shouldKeep = true;

        if (_filter) {
            if (tp_debug)
                std::cout << "addTerm:003" << std::endl;

            // We have not seen this document before and need to apply a filter.
            bool wasDeleted = false;
            try {
                TextMatchableDocument tdoc(getOpCtx(),
                                           newKeyData.indexKeyPattern,
                                           newKeyData.keyData,
                                           _ws,
                                           wsid,
                                           _recordCursor);
                shouldKeep = _filter->matches(&tdoc);
            } catch (const WriteConflictException& wce) {
                // Ensure that the BSONObj underlying the WorkingSetMember is owned because it may
                // be freed when we yield.
                wsm->makeObjOwnedIfNeeded();
                _idRetrying = wsid;
                *out = WorkingSet::INVALID_ID;
                if (tp_debug)
                    std::cout << "addTerm:004" << std::endl;
                return NEED_YIELD;
            } catch (const TextMatchableDocument::DocumentDeletedException&) {
                // We attempted to fetch the document but decided it should be excluded from the
                // result set.
                shouldKeep = false;
                wasDeleted = true;
            }

            if (wasDeleted || wsm->hasObj()) {
                ++_specificStats.fetches;
            }
        }

        if (shouldKeep && !wsm->hasObj()) {
            if (tp_debug)
                std::cout << "addTerm:005" << std::endl;

            // Our parent expects RID_AND_OBJ members: fetch the document if we haven't already.
            try {
                shouldKeep = WorkingSetCommon::fetch(getOpCtx(), _ws, wsid, _recordCursor);
                ++_specificStats.fetches;
            } catch (const WriteConflictException& wce) {
                wsm->makeObjOwnedIfNeeded();
                _idRetrying = wsid;
                *out = WorkingSet::INVALID_ID;
                if (tp_debug)
                    std::cout << "addTerm:006" << std::endl;
                return NEED_YIELD;
            }
        }

        if (!shouldKeep) {
            _ws->free(wsid);
            textRecordData->rejected = true;
            if (tp_debug)
                std::cout << "addTerm:007" << std::endl;
            return NEED_TIME;
        }

        textRecordData->wsid = wsid;

        // Ensure that the BSONObj underlying the WorkingSetMember is owned in case we yield.
        wsm->makeObjOwnedIfNeeded();

    } else {
        // We already have a working set member for this RecordId. Free the new WSM and retrieve the
        // old one. Note that since we don't keep all index keys, we could get a score that doesn't
        // match the document, but this has always been a problem.
        // TODO something to improve the situation.
        invariant(wsid != textRecordData->wsid);
        _ws->free(wsid);
        wsm = _ws->get(textRecordData->wsid);
    }

    // compound key {prefix,term,pos}.
    BSONObjIterator keyIt(newKeyData.keyData);
    for (unsigned i = 0; i < _params.spec.numExtraBefore(); i++) {
        keyIt.next();
    }

    BSONElement termElement = keyIt.next();
    std::string term = termElement.String();

    BSONElement posElement = keyIt.next();
    uint32_t pos = (uint32_t)posElement.Int();

    // Aggregate {term,recordId,pos}
    textRecordData->term = term;
    textRecordData->recId = loc;
    textRecordData->pos = pos;

    _posv.push_back(*textRecordData);
    if (tp_debug)
        std::cout << "textRecordData(" << term << ", " << loc << ", " << pos << ")" <<std::endl;

    return NEED_TIME;
}

}  // namespace mongo
