import { apiSlice } from '..';

export const speciesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSpecies: builder.query({
      query: () => ({
        url: '/species',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['People'],
    }),
    getSingleSpecies: builder.query({
      query: () => ({
        url: `/species/1`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetSpeciesQuery, useGetSingleSpeciesQuery } = speciesApiSlice;
