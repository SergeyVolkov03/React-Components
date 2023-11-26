import pageReducer from './reducers/pageSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postApi } from '../services/postApi';
import searchReducer from './reducers/searchSlice';

const rootReducer = combineReducers({
  pageReducer,
  searchReducer,
  [postApi.reducerPath]: postApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
