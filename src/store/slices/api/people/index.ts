import { apiSlice } from '..';

export type People = {
  id: string;
  name: string;
  birth_year: string;
  hair_color: string;
  height: string;
  created: string;
  gender: string;
  skin_color: string;
};

export const peopleApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPeople: builder.query<People, void>({
      query: () => ({
        url: '/people',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['People'],
    }),
    getPeopleDetails: builder.query<People, void>({
      query: () => ({
        url: `/people/1`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetPeopleQuery, useGetPeopleDetailsQuery } = peopleApiSlice;
