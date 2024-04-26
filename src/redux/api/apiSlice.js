import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://house-hunters-server-1.onrender.com/api/v1',
baseUrl: 'http://localhost:8080/api/v1',
  }),
  tagTypes: ['USER', 'HOUSE', 'BOOKING'],
  endpoints: () => ({}),
});

export default apiSlice;
