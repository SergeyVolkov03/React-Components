import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/types';

type State = {
  users: User[];
};

const initialState: State = { users: [] };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      console.log(action);
      state.users.push(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
