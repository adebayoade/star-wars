import { apiSlice } from '..';

export const filmsSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getFilms: builder.query({
      query: () => ({
        url: '/films',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Films'],
    }),
    getFilmDetails: builder.query({
      query: () => ({
        url: `/films/1`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmDetailsQuery } = filmsSlice;
