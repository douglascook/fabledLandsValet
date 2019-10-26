import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

import reducer from './app/reducer';
import AppContainer from './app/navigation';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>
);

export default App;
