import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// https://redux.js.org/recipes/writing-tests
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
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

export const store = initializeStore();
export const persistor = persistStore(store);
