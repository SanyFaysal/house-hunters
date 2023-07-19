import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
  }),
  tagTypes: ['USER', 'HOUSE'],
  endpoints: () => ({}),
});

export default apiSlice;
