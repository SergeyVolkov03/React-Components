import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type PageState = {
  page: string;
};

const initialState: PageState = {
  page: '1',
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
  },
});

export default pageSlice.reducer;
export const { setPage } = pageSlice.actions;
