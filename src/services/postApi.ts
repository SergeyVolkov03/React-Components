import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data, Hero } from '../types/types';
import { HYDRATE } from 'next-redux-wrapper';

const BASE_URL = 'https://swapi.dev/api/people';

interface Params {
  searchText: string;
  page: string;
}

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (build) => ({
    getPosts: build.query<Data, Params>({
      query: (params: Params) => ({
        url: `/?search=${params.searchText}&page=${params.page}`,
      }),
    }),
    getPostDetails: build.query<Hero, string>({
      query: (id: string) => ({
        url: `/${id}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostDetailsQuery } = postApi;
