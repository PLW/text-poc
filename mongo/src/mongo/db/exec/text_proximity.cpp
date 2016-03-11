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

TextProximityStage::TextProximityStage(OperationContext* txn,
                                       const TextStageParams& params,
                                       WorkingSet* ws,
                                       const MatchExpression* filter,
                                       uint32_t proximityWindow)
    : PlanStage(kStageType, txn),
      _params(params),
      _ws(ws),
      _proximityWindow(proximityWindow),
      _filter(filter),
      _idRetrying(WorkingSet::INVALID_ID)
{
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
        _internalState = State::kDone;
        return PlanStage::IS_EOF;
    }

    // accumulate all results from all children

    // Either retry the last WSM we worked on or get a new one from our current child.
    WorkingSetID id;
    StageState childState;

    if (_idRetrying == WorkingSet::INVALID_ID) {
        childState = _children[_currentChild]->work(&id);
    } else {
        childState = ADVANCED;
        id = _idRetrying;
        _idRetrying = WorkingSet::INVALID_ID;
    }

    switch(childState) {
    case PlanStage::ADVANCED: {
        return addTerm(id, out);
    }
    case PlanStage::IS_EOF: {
        // Done with this child.
        ++_currentChild;

        if (_currentChild < _children.size()) {
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
        // If a stage fails, it may create a status WSM to indicate why it
        // failed, in which case 'id' is valid.  If ID is invalid, we
        // create our own error message.
        if (WorkingSet::INVALID_ID == id) {
            mongoutils::str::stream ss;
            ss << "TEXT_PROXIMITY stage failed to read in results from child";
            Status status(ErrorCodes::InternalError, ss);
            *out = WorkingSetCommon::allocateStatusMember(_ws, status);
        } else {
            *out = id;
        }
        return PlanStage::FAILURE;
    }
    default: {
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

void TextProximityStage::collectResults() {

    std::sort(_posv.begin(), _posv.end(), proximitySort);

    uint64_t recId = 0;
    uint32_t nterms = _params.query.getTermsForBounds().size();
    std::vector<const TextRecordData*> recv;
    std::vector<TextRecordData>::const_iterator it2 = _posv.begin();

    do {
        if (it2->recId != recId) {
        // we have a run of common recordId's.

            std::vector<const TextRecordData*>::const_iterator it3;
            for (it3 = recv.begin(); it3 != recv.end(); ++it3) {
            // scan for all terms within _proximityWindow.

                std::set<std::string> terms;
                uint32_t width = 0;
                uint32_t pos = (*it3)->pos;

                std::vector<const TextRecordData*>::const_iterator it4;
                for (it4 = it3; it4 != recv.end() && width < _proximityWindow; ++it4) {
                    width += ((*it4)->pos - pos);
                    terms.insert((*it4)->term);
                    if (terms.size() == nterms && width < _proximityWindow) {
                        _resultSet.push_back((*it4)->wsid);
                        break;
                    }
                }
            }
            recId = it2->recId;
            recv.clear();
        }
        recv.push_back(&(*it2));

    } while (it2++ != _posv.end());
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
    const IndexKeyDatum newKeyData = wsm->keyData.back();  // copy to keep it around.
    uint64_t loc = wsm->recordId.repr();
    TextRecordData* textRecordData = &_posMap[wsm->recordId];

    if (textRecordData->rejected) {
        // We rejected this document for not matching the filter.
        invariant(WorkingSet::INVALID_ID == textRecordData->wsid);
        _ws->free(wsid);
        return NEED_TIME;
    }

    if (WorkingSet::INVALID_ID == textRecordData->wsid) {
        // We haven't seen this RecordId before.
        bool shouldKeep = true;

        if (_filter) {
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
            // Our parent expects RID_AND_OBJ members: fetch the document if we haven't already.
            try {
                shouldKeep = WorkingSetCommon::fetch(getOpCtx(), _ws, wsid, _recordCursor);
                ++_specificStats.fetches;
            } catch (const WriteConflictException& wce) {
                wsm->makeObjOwnedIfNeeded();
                _idRetrying = wsid;
                *out = WorkingSet::INVALID_ID;
                return NEED_YIELD;
            }
        }

        if (!shouldKeep) {
            _ws->free(wsid);
            textRecordData->rejected = true;
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

    // compound key {prefix,term,recordId,pos}.
    BSONObjIterator keyIt(newKeyData.keyData);
    for (unsigned i = 0; i < _params.spec.numExtraBefore(); i++) {
        keyIt.next();
    }

    BSONElement termElement = keyIt.next();
    std::string term = termElement.String();

    //BSONElement recIdElement = keyIt.next();
    //uint64_t recId = (uint64_t)recIdElement.Long();

    BSONElement posElement = keyIt.next();
    uint32_t pos = (uint32_t)posElement.Int();

    // Aggregate {term,recordId,pos}
    textRecordData->term = term;
    textRecordData->recId = loc; //recId;
    textRecordData->pos = pos;

    _posv.push_back(*textRecordData);
    std::cout << "textRecordData(" << term << ", " << loc << ", " << pos << ")" <<std::endl;

    return NEED_TIME;
}

}  // namespace mongo
