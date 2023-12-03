import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SearchState = {
  search: string;
};

const initialState: SearchState = {
  search: localStorage.getItem('name') || '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      localStorage.setItem('name', action.payload.trim());
      state.search = action.payload.trim();
    },
  },
});

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;
