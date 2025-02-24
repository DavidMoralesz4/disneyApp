import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface AllMovies {
  id: string;
  title: string
  image: string
  date_release: string;
}

export interface IMovies {
  id: string;
  title: string;
  image: string;
  date_release: string;
  score: string
}

export const moviApi = createApi({
  reducerPath: "moviApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/api" }),

  endpoints: (build) => ({
    getMovies: build.query<IMovies[], string>({
      query: (search) => {
        return {
          url: `/movies/search/mov/?date_release=${search}&title=${search}`,
          credentials: "include",
          providesTags: ["Movies"], // Marca esta consulta con el tag "Characters"
        };
      },
    }),

    getAllMovi: build.query<AllMovies[], string>({
      query: () => {
        return {
          url: "/movies",
        };
      },
    }),

    getDetailMovie: build.query<IMovies, string>({
      query: (id) => ({
        url: `/movies/${id}`,
        credentials: "include",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetAllMoviQuery, useGetDetailMovieQuery} =
  moviApi;
