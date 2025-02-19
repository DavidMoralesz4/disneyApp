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
    getCharacters: build.query<Characters[], string>({
      query: (search) => {
        return {
          url: `/characters/search/cha?name=${search}&age=${search}&title=${search}`,
          credentials: "include"
        };
      },
    }),

    getAllChar: build.query<Characters[], string>({
      query: () => {
        return {
          url: "/characters"
        }
      }
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

export const { useGetCharactersQuery, useDetailCharQuery, useGetAllCharQuery } = charApi;
