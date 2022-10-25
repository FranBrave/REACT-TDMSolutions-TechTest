import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slices/auth';
import settingsReducer from './slices/settings';
import userReducer from './slices/users';
import searchReducer from './slices/search';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken']
};

const persistSettingsConfig = {
  key: 'settings',
  storage,
  whitelist: ['themeMode']
};

const persistUserConfig = {
  key: 'user',
  storage,
  whitelist: ['userList']
};

const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(
      persistAuthConfig,
      authReducer
    ),
    settings: persistReducer<ReturnType<typeof settingsReducer>>(
      persistSettingsConfig,
      settingsReducer
    ),
    user: persistReducer<ReturnType<typeof userReducer>>(
      persistUserConfig,
      userReducer
    ),
    search: persistReducer<ReturnType<typeof searchReducer>>(
      persistUserConfig,
      searchReducer
    )
  },
  middleware: (defaultMddleware) =>
    defaultMddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<unknown>
>;

export const persistor = persistStore(store);

export default store;
