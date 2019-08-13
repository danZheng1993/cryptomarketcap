import { ActionTypes } from '../../../store/actions/listActions';
import { initialState } from '../../../store/reducers/list';
import {
  getCurrentState,
  getDataList,
  getListState,
  getQuery,
  getTotalCount,
} from '../../../store/selectors/list';

const mockState = {
  list: {
    ...initialState,
    data: ['a', 'b', 'c'],
    currentState: ActionTypes.fetchListSuccess,
  }
}

describe('List Selector', () => {
  it('should get currentState', () => {
    expect(getCurrentState(mockState)).toEqual(ActionTypes.fetchListSuccess);
  });

  it('should get data list', () => {
    expect(getDataList(mockState)).toEqual(['a', 'b', 'c']);
  });

  it('should get list state', () => {
    expect(getListState(mockState)).toEqual('showing');
  });

  it('should get query', () => {
    expect(getQuery(mockState)).toEqual(initialState.query);
  });

  it('should get total data count', () => {
    expect(getTotalCount(mockState)).toEqual(3);
  });
});
