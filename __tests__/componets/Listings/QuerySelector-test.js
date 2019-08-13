import React from 'react';
import 'react-native';

import renderer from 'react-test-renderer';

import QuerySelector from '../../../components/Listings/QuerySelector';

it('QuerySelector component renders correctly', () => {
  renderer.create(<QuerySelector query={{ convert: ['BTC'] }} />);
});
