import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IUser {

  email: string
  password: string
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/auth",
  }),

  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/login",
          method: "POST",
          credentials: "include",
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
