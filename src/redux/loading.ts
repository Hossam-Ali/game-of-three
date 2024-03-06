import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (_state, action: PayloadAction<boolean>) => action.payload,
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
