import apiSlice from '../api/apiSlice';

const houseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: () => ({
        url: '/house',
      }),
      providesTags: ['HOUSE'],
    }),

    getSingleHouses: builder.query({
      query: (id) => ({
        url: `/house/${id}`,
        method: 'GET',
      }),
      providesTags: ['HOUSE'],
    }),

    addHouse: builder.mutation({
      query: (data) => ({
        url: '/house/addHouse',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['HOUSE'],
    }),
    editHouse: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/house/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['HOUSE'],
    }),
    deleteHouse: builder.mutation({
      query: (id) => ({
        url: `/house/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['HOUSE'],
    }),
  }),
});

export const {
  useAddHouseMutation,
  useDeleteHouseMutation,
  useEditHouseMutation,
  useGetHousesQuery,
  useGetSingleHousesQuery,
} = houseApi;
