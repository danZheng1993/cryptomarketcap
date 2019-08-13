import get from 'lodash.get';

export const getTotalCount = state => get(state, 'list.data.length', 0);
export const getDataList = state => get(state, 'list.data', []);
export const getQuery = state =>
  get(state, 'list.query', {
    convert: ['USD'],
    sort: 'market_cap',
    sort_dir: 'asc',
    cryptocurrency_type: 'all',
  });
