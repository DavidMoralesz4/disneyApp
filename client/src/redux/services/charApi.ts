import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DataCreate } from "../../components/createChar/CreateChar";

export interface Characters {
  id: string;
  name: string;
  image: string;
}

export interface CharactersDetail {
  name: string;
  image: string;
  age: number;
  weight: number;
  history: string;
}

export const charApi = createApi({
  reducerPath: "charApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/api" }),

  endpoints: (build) => ({
    getCharacters: build.query<Characters[], string>({
      query: (search) => {
        return {
          url: `/characters/search/cha?name=${search}&age=${search}&title=${search}`,
          credentials: "include",
          providesTags: ["Characters"], // Marca esta consulta con el tag "Characters"
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

    createChar: build.mutation<Characters, DataCreate>({
      query: (body) => ({
        url: '/characters',
        method: "POST",
        credentials: "include",
        body, 
        invalidatesTags: ["Characters"], // Invalida la caché de los personajes
      }),
    })
  }),
});

export const { useGetCharactersQuery, useDetailCharQuery, useGetAllCharQuery, useCreateCharMutation } = charApi;
