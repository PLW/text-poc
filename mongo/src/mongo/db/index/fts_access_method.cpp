/**
*    Copyright (C) 2013 10gen Inc.
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

#define MONGO_LOG_DEFAULT_COMPONENT ::mongo::logger::LogComponent::kWrite

#include "mongo/platform/basic.h"

#include "mongo/db/index/fts_access_method.h"
#include "mongo/db/index/expression_keys_private.h"
#include "mongo/util/log.h"

namespace mongo {

FTSAccessMethod::FTSAccessMethod(IndexCatalogEntry* btreeState, SortedDataInterface* btree)
    : IndexAccessMethod(btreeState, btree), _ftsSpec(btreeState->descriptor()->infoObj()) {}

void FTSAccessMethod::getKeys(const BSONObj& obj, BSONObjSet* keys) const {
    ExpressionKeysPrivate::getFTSKeys(obj, _ftsSpec, keys);
}

// @@@proximity
Status FTSAccessMethod::insert(OperationContext* txn,
                               const BSONObj& obj,
                               const RecordId& loc,
                               const InsertDeleteOptions& options,
                               int64_t* numInserted) {

    *numInserted = 0;

    BSONObjSet keys;

    // Delegate to the subclass.
    getKeys(obj, &keys);

    Status ret = Status::OK();
    for (BSONObjSet::const_iterator i = keys.begin(); i != keys.end(); ++i) {
        Status status = _newInterface->insert(txn, *i, loc, options.dupsAllowed);

        // Everything's OK, carry on.
        if (status.isOK()) {
            ++*numInserted;
            continue;
        }

        // Error cases.
        if (status.code() == ErrorCodes::KeyTooLong && ignoreKeyTooLong(txn)) {
            continue;
        }

        if (status.code() == ErrorCodes::DuplicateKeyValue) {
            // A document might be indexed multiple times during a background index build
            // if it moves ahead of the collection scan cursor (e.g. via an update).
            if (!_btreeState->isReady(txn)) {
                LOG(3) << "key " << *i << " already in index during background indexing (ok)";
                continue;
            }
        }

        // Clean up after ourselves.
        for (BSONObjSet::const_iterator j = keys.begin(); j != i; ++j) {
            removeOneKey(txn, *j, loc, options.dupsAllowed);
            *numInserted = 0;
        }

        return status;
    }

    if (*numInserted > 1) {
        _btreeState->setMultikey(txn);
    }

    return ret;
}


}  // namespace mongo
