import { UTIL } from '@/utils';
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: UTIL.processEnv.BASE_API_URL,
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['People', 'Films', 'Starships', 'Species'],
  endpoints: () => ({}),
});
