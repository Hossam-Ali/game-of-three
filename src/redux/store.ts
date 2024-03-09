import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import roomsReducer from './rooms';
import loadingReducer from './loading';
import messageReducer from './message';

export const store = configureStore({
  reducer: {
    user: userReducer,
    rooms: roomsReducer,
    loading: loadingReducer,
    message: messageReducer,
  },
});
