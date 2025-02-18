import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Characters {
    id: string
    name: string;
    image: string;
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
          method: "GET"
        };
      },
    }),
  }),
});

export const { useGetCharactersQuery } = charApi;
