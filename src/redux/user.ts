import Cookies from 'js-cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types.d';

const initialState: User = {
  name: 'test',
  message: '',
  currentRoom: '0',
  loggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setCurrentRoom: (state, action: PayloadAction<string>) => {
      state.currentRoom = action.payload;
    },
    setLoginUser: (state, action) => {
      state.loggedIn = action.payload;
      Cookies.set('isLoggedIn', JSON.stringify(action.payload));
    },
    usetLogoutUser: (state, action) => {
      state.loggedIn = action.payload;
      Cookies.remove('isLoggedIn');
    },
  },
});

export const {
  setName,
  setMessage,
  setCurrentRoom,
  setLoginUser,
  usetLogoutUser,
} = userSlice.actions;

export default userSlice.reducer;
