import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filterReducer/filterReducer';
import { contactsReducer } from './contactsReducer/contactsReducer';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducers = combineReducers({
  contacts: contactsReducer.reducer,
  filter: filterReducer.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export { store };
export const { add, remove } = contactsReducer.actions;
export const { changeFilter } = filterReducer.actions;
