import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoomDetails } from './types.d';

const initialState: RoomDetails = {
  startNumber: 0,
  currentNumber: 0,
  choosenNumber: 0,
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setStartNumber: (state, action: PayloadAction<number>) => {
      state.startNumber = action.payload;
    },
    setCurrentNumber: (state, action: PayloadAction<number>) => {
      state.currentNumber = action.payload;
    },
    setChoosenNumber: (state, action: PayloadAction<number>) => {
      state.choosenNumber = action.payload;
    },
  },
});

export const { setStartNumber, setCurrentNumber, setChoosenNumber } =
  roomSlice.actions;

export default roomSlice.reducer;
