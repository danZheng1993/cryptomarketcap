import React from 'react';
import 'react-native';

import renderer from 'react-test-renderer';

import LatestList from '../../../components/Listings/LatestList';

it('LatestList component renders correctly', () => {
  renderer.create(<LatestList data={[]} error="" currentState="showing" onLoadMore={()=>{}} />);
});
