import { apiSlice } from '..';

export type Film = {
  title: string;
  release_date: string;
  director: string;
  episode_id: string;
  characters: string[];
  producer: string;
  count: string;
};

export type Films = {
  count: string;
  results: Array<Film>;
};

export const filmsSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getFilms: builder.query<Films, void>({
      query: () => ({
        url: '/films',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Films'],
    }),
    getFilmDetails: builder.query<Film, void>({
      query: () => ({
        url: `/films/1`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmDetailsQuery } = filmsSlice;
