import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types.d';

// Define the initial state using that type
const initialState: User = {
  id: '1',
  name: 'test',
  currentRoom: '1',
};

export const userSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentRoom: (state, action: PayloadAction<string>) => {
      state.currentRoom = action.payload;
    },
  },
});

export const { setId, setName, setCurrentRoom } = userSlice.actions;

export default userSlice.reducer;
