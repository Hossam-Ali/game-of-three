import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user';
import roomsReducer from './rooms';
import roomReducer from './room';
import loadingReducer from './loading';
import messageReducer from './message';

const rootReducer = combineReducers({
  user: userReducer,
  rooms: roomsReducer,
  loading: loadingReducer,
  message: messageReducer,
  room: roomReducer,
});

const persistConfig = {
  key: 'redux',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
