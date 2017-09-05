import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducer from './app/reducer';
import Navigation from './app/navigation';


const store = createStore(reducer, undefined, autoRehydrate());
persistStore(store, {storage: AsyncStorage});

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

AppRegistry.registerComponent('fabledLandsValet', () => App);
