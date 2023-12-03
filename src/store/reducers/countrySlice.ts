import { createSlice } from '@reduxjs/toolkit';
import { countries } from '../countries/countries';

export const countrySlice = createSlice({
  name: 'countries',
  initialState: { countries },
  reducers: {},
});

export default countrySlice.reducer;
