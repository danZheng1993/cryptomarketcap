import { ActionTypes, fetchList, setQuery } from '../../../store/actions/listActions';

describe('List Actions', () => {
  it('should create an action to fetchList', () => {
    const expectedAction = { type: ActionTypes.fetchList };
    expect(fetchList()).toEqual(expectedAction);
  });

  it('should create an action to setQuery', () => {
    const payload = {
      convert: ['USD'],
      sort: 'market_cap',
      sort_dir: 'asc',
      cryptocurrency_type: 'all',
    };
    const expectedAction = { type: ActionTypes.setQuery, payload, };
    expect(setQuery(payload)).toEqual(expectedAction);
  });
});
