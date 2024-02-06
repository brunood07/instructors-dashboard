import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginResponse } from '../middlewares/login';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://educational-api.onrender.com'
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, void>({
      query: () => ({
        url: '/sessions',
        method: 'POST',
        body: {
          email: 'brunood07@gmail.com',
          password: 'Teste123*'
        }
      }),
    }),
    getAuthData: builder.query<LoginResponse, { token: string }>({
      query: ({ token }) => ({
        url: '/me',
        // this is the default but I'm leaving it here for reference
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetAuthDataQuery } = authApi;