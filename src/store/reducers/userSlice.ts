import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/types';

const initialState: User[] = [];

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state = [...state, action.payload];
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
