import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './app/reducer';
import Navigation from './app/navigation';


const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

AppRegistry.registerComponent('fabledLandsValet', () => App);
