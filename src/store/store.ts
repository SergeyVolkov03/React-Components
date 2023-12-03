import countrySlice from './reducers/countrySlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/userSlice';

const rootReducer = combineReducers({
  countrySlice,
  searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
