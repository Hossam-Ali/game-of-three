import Cookies from 'js-cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types.d';

const initialState: User = {
  name: 'test',
  currentRoom: '',
  gameStart: false,
  activeTurn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setCurrentRoom: (state, action: PayloadAction<string>) => {
      state.currentRoom = action.payload;
    },
    setActiveTurn: (state, action: PayloadAction<boolean>) => {
      state.activeTurn = action.payload;
    },
    setGameStart: (state, action: PayloadAction<boolean>) => {
      state.gameStart = action.payload;
    },
    setLoginUser: (_state, action) => {
      Cookies.set('isLoggedIn', JSON.stringify(action.payload));
    },
    usetLogoutUser: () => {
      localStorage.clear();
      Cookies.remove('isLoggedIn');
    },
  },
});

export const {
  setName,
  setCurrentRoom,
  setGameStart,
  setLoginUser,
  usetLogoutUser,
  setActiveTurn,
} = userSlice.actions;

export default userSlice.reducer;
