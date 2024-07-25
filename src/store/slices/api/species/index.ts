import { apiSlice } from '..';

export type Species = {
  name: string;
  classification: string;
  eye_colors: string;
  hair_color: string;
  average_height: string;
  created: string;
  designation: string;
  language: string;
  average_lifespan: string;
};

export const speciesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSpecies: builder.query<Species, void>({
      query: () => ({
        url: '/species',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Species'],
    }),
    getSingleSpecies: builder.query<Species, void>({
      query: () => ({
        url: `/species/1`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetSpeciesQuery, useGetSingleSpeciesQuery } = speciesApiSlice;
