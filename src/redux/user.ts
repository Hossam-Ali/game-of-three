import Cookies from 'js-cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types.d';

const initialState: User = {
  name: 'test',
  currentRoom: '0',
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
    setLoginUser: (_state, action) => {
      Cookies.set('isLoggedIn', JSON.stringify(action.payload));
    },
    usetLogoutUser: () => {
      Cookies.remove('isLoggedIn');
    },
  },
});

export const { setName, setCurrentRoom, setLoginUser, usetLogoutUser } =
  userSlice.actions;

export default userSlice.reducer;
