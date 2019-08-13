/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import Listings from './components/Listings';

import './ReactotronConfig';
import store from './store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Listings />
      </Provider>
    );
  }
}
