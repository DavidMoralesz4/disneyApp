import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Characters {
  id: string;
  name: string;
  image: string;
}

interface IMovies {
  title: string;
}

interface CharactersDetail {
  name: string;
  image: string;
  age: number;
  weight: number;
  history: string;
  movies: IMovies;
}

export const charApi = createApi({
  reducerPath: "charApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/api" }),

  endpoints: (build) => ({
    getCharacters: build.query<Characters[], null>({
      query: () => {
        return {
          url: "/characters",
          credentials: "include",
          method: "GET",
        };
      },
    }),

    detailChar: build.query<CharactersDetail, string>({
      query: (id) => {
        return {
          url: `/characters/${id}`,
          credentials: "include",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetCharactersQuery, useDetailCharQuery } = charApi;
