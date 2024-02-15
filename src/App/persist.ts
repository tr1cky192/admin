import { api } from 'features/api';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import { rootReducer } from './rootReducer';

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage: sessionStorage,
  blacklist: [api.reducerPath, 'modal'],
};

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];
