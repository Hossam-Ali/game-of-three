import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (_state, action: PayloadAction<string>) => action.payload,
  },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
