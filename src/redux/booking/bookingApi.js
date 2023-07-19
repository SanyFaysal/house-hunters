import apiSlice from '../api/apiSlice';

const bookingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBookings: builder.query({
      query: (token) => ({
        url: '/booking',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['BOOKING'],
    }),
    addBooking: builder.mutation({
      query: ({ token, ...data }) => ({
        url: '/booking/addBooking',
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['BOOKING'],
    }),
    deleteBooking: builder.mutation({
      query: ({ id, token }) => ({
        url: `/booking/${id}`,
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['BOOKING'],
    }),
    freeUpBooking: builder.mutation({
      query: (token) => ({
        url: '/booking/',
        method: 'DELETE',
        headers: {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      }),
      invalidatesTags: ['BOOKING'],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetBookingsQuery,
  useDeleteBookingMutation,
  useFreeUpBookingMutation,
} = bookingApi;
