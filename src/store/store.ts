import countryReducer from './reducers/countrySlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';

const rootReducer = combineReducers({
  countryReducer,
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
