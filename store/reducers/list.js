import { handleActions } from 'redux-actions';

import { ActionTypes } from '../actions/listActions';

const initialState = {
  currentState: '',
  query: {
    convert: ['USD'],
    sort: 'market_cap',
    sort_dir: 'asc',
    cryptocurrency_type: 'all',
  },
  data: [],
  error: {},
};

export default handleActions(
  {
    [ActionTypes.setQuery]: (state, { type, payload }) => ({
      ...state,
      query: payload,
      currentState: type,
      data: []
    }),
    [ActionTypes.fetchList]: (state, { type }) => ({
      ...state,
      currentState: type,
    }),
    [ActionTypes.fetchListSuccess]: (state, { type, payload }) => ({
      ...state,
      currentState: type,
      data: [...state.data, ...payload],
    }),
    [ActionTypes.fetchListFailure]: (state, { type, payload }) => ({
      ...state,
      currentState: type,
      error: payload,
    })
  },
  initialState
);
