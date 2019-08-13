import { createSelector } from 'reselect';
import get from 'lodash.get';

import { ActionTypes } from '../actions/listActions';

export const getTotalCount = state => get(state, 'list.data.length', 0);
export const getDataList = state => get(state, 'list.data', []);
export const getCurrentState = state => get(state, 'list.currentState', '');
export const getQuery = state =>
  get(state, 'list.query', {
    convert: ['USD'],
    sort: 'market_cap',
    sort_dir: 'asc',
    cryptocurrency_type: 'all',
  });
export const getListState = createSelector(
  getTotalCount,
  getCurrentState,
  (totalCount, currentState) => {
    switch (currentState) {
      case ActionTypes.setQuery:
      case ActionTypes.fetchList:
        if (totalCount === 0) {
          return 'loading';
        } else {
          return 'appending';
        }
      default:
        return 'showing';
    }
  }
);
