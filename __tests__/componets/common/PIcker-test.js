import React from 'react';
import 'react-native';

import renderer from 'react-test-renderer';

import Picker from '../../../components/common/Picker';

it('Picker component renders correctly', () => {
  renderer.create(<Picker options={[]} onValueChange={() => {}}/>);
});
