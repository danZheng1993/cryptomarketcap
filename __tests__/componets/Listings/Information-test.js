import React from 'react';
import 'react-native';

import renderer from 'react-test-renderer';

import Information from '../../../components/Listings/Information';

it('Information component renders correctly', () => {
  renderer.create(<Information />);
});
