import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import roomsReducer from './rooms';
import loadingReducer from './loading';

export const store = configureStore({
  reducer: {
    user: userReducer,
    rooms: roomsReducer,
    loading: loadingReducer,
  },
});
