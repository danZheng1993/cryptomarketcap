import { createAction } from 'redux-actions';

export const ActionTypes = {
  setQuery: 'List Set Query',
  fetchList: 'List Fetch',
  fetchListFailure: 'List Fetch Failure',
  fetchListSuccess: 'List Fetch Success',
};

export const fetchList = createAction(ActionTypes.fetchList);
export const setQuery = createAction(ActionTypes.setQuery);
