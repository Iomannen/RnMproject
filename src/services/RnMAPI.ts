// services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
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

export const {
  useGetCharactersQuery,
  useGetLocationQuery,
  useGetEpisodeQuery,
} = RnmAPI;
