import { apiSlice } from '..';

export const starships = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getStarships: builder.query({
      query: () => ({
        url: '/starships',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['People'],
    }),
    getSingleStarship: builder.query({
      query: () => ({
        url: `/starships/1`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetStarshipsQuery, useGetSingleStarshipQuery } = starships;
