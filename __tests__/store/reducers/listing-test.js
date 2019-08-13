import { ActionTypes } from '../../../store/actions/listActions';
import listReducer, { initialState } from '../../../store/reducers/list';

describe('List Reducer', () => {
  it('should return the initialState', () => {
    expect(listReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle setQuery', () => {
    expect(
      listReducer(initialState, {
        type: ActionTypes.setQuery,
        payload: { ...initialState.query, convert: ['BTC']},
      })
    ).toEqual({
      ...initialState,
      query: { ...initialState.query, convert: ['BTC']},
      currentState: ActionTypes.setQuery,
    });
  });
  it('should handle fetchList', () => {
    expect(listReducer(initialState, { type: ActionTypes.fetchList })).toEqual({
      ...initialState,
      currentState: ActionTypes.fetchList,
    });
  });
  it('should handle fetchListSuccess', () => {
    expect(
      listReducer(initialState, {
        type: ActionTypes.fetchListSuccess,
        payload: ['a'],
      })
    ).toEqual({
      ...initialState,
      data: ['a'],
      currentState: ActionTypes.fetchListSuccess,
    });
  });
  it('should handle fetchListFailure', () => {
    expect(
      listReducer(initialState, {
        type: ActionTypes.fetchListFailure,
        payload: 'Unknown Error',
      })
    ).toEqual({
      ...initialState,
      error: 'Unknown Error',
      currentState: ActionTypes.fetchListFailure,
    });
  });
});
