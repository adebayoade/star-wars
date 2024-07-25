import { apiSlice } from '..';

export const peopleApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPeople: builder.query({
      query: () => ({
        url: '/people',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['People'],
    }),
    getPeopleDetails: builder.query({
      query: () => ({
        url: `/people/1`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetPeopleQuery, useGetPeopleDetailsQuery } = peopleApiSlice;
