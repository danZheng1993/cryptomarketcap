import { call, put, takeEvery, select } from 'redux-saga/effects';
import get from 'lodash.get';
import hasIn from 'lodash.hasin';

import { ActionTypes, fetchList } from '../actions/listActions';
import { getQuery, getTotalCount } from '../selectors/list';

import { getLatestListings } from '../../api';

export function* updateQueryGenerator() {
  yield put(fetchList);
}

export function* fetchListGenerator() {
  const queryObject = yield select(getQuery);
  const count = yield select(getTotalCount);
  try {
    const data = yield call(getLatestListings, {
      ...queryObject,
      convert: queryObject.convert.join(','),
      start: count + 1,
      limit: 10,
    });
    if (hasIn(data, 'data')) {
      yield put({ type: ActionTypes.fetchListSuccess, payload: data.data });
    } else {
      yield put({
        type: ActionTypes.fetchListFailure,
        payload: get(data, 'status.error_message'),
      });
    }
  } catch (err) {
    yield put({ type: ActionTypes.fetchListFailure, payload: 'Unknown Error' });
  }
}

export default function* List() {
  yield takeEvery(ActionTypes.setQuery, updateQueryGenerator);
  yield takeEvery(ActionTypes.fetchList, fetchListGenerator);
}
