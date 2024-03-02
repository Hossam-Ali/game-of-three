import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types.d';

const initialState: User = {
  id: '1',
  name: 'test',
  currentRoom: '1',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setCurrentRoom: (state, action: PayloadAction<string>) => {
      state.currentRoom = action.payload;
    },
  },
});

export const { setId, setName, setCurrentRoom } = userSlice.actions;

export default userSlice.reducer;
