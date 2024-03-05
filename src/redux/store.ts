import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import roomsReducer from './rooms';

export const store = configureStore({
  reducer: {
    user: userReducer,
    rooms: roomsReducer,
  },
});
