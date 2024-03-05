import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Room } from './types';

const initialState: Room[] = [];

export const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    addRoom: (state, action: PayloadAction<Room>) => {
      state.push(action.payload);
    },
  },
});

export const { addRoom } = roomSlice.actions;

export default roomSlice.reducer;
