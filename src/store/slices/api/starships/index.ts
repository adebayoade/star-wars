import { apiSlice } from '..';

export type Starship = {
  name: string;
  model: string;
  crew: string;
  passengers: string;
  length: string;
  designation: string;
  language: string;
  average_lifespan: string;
  eye_colors: string;
  pilots: string;
};

export type Starships = {
  count: string;
  results: Array<Starship>;
};

export const starships = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getStarships: builder.query<Starships, void>({
      query: () => ({
        url: '/starships',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Starships'],
    }),
    getSingleStarship: builder.query<Starship, void>({
      query: () => ({
        url: `/starships/1`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetStarshipsQuery, useGetSingleStarshipQuery } = starships;
