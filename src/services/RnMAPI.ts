// services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CatCard,
  CharacterResponse,
  EpisodesResponse,
  LocationsResponse,
} from '../types/types.ts';

export const RnmAPI = createApi({
  reducerPath: 'RnMAPI', // имя в state
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterResponse, string>({
      query: (page: string) => `character/?page=${page}`, // relative путь
    }),
    getLocation: builder.query<LocationsResponse, string>({
      query: (page: string) => `location/?page=${page}`,
    }),
    getEpisode: builder.query<EpisodesResponse, string>({
      query: (page: string) => `episode/?page=${page}`,
    }),
  }),
});

export const CatsAPI = createApi({
  reducerPath: 'CatsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/',
    prepareHeaders: (headers) => {
      const envKey = import.meta.env.VITE_CAT_API_KEY || '';
      if (envKey) {
        headers.set('x-api-key', envKey);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCats: builder.query<Array<CatCard>, number>({
      query: (page: number) => ({
        url: 'v1/images/search',
        params: {
          limit: 10,
          has_breeds: 1,
          page: page,
          order: 'RAND',
        },
      }),
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetLocationQuery,
  useGetEpisodeQuery,
} = RnmAPI;

export const { useGetCatsQuery } = CatsAPI;
