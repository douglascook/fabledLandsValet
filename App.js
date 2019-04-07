import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './app/reducer';
import AppContainer from './app/navigation';


const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);


const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
