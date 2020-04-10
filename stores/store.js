import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice, { getDefaultUserState } from './user';

const getDefaultStates = () => ({
  user: getDefaultUserState(),
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  blacklist: [],
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const initializeStore = (preloadedState) =>
  configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    preloadedState: preloadedState || getDefaultStates(),
  });

export const store = initializeStore();
export const persistor = persistStore(store);
