import apiSlice from '../api/apiSlice';

const houseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: ({ sort, filter }) => {
        const params = new URLSearchParams();
        params.append('sort', JSON.stringify(sort));
        params.append('filter', JSON.stringify(filter));
        const queryString = params.toString();
        console.log('query', queryString)
        return {
          url: `/house?${queryString}`,
        };
      },
      providesTags: ['HOUSE'],
    }),

    getMyHouses: builder.query({
      query: (token) => ({
        url: '/house/myHouse',
        headers: {
          authorization: `Bearer ${token}`,
        },
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
      query: ({ token, ...data }) => {
        console.log({ token });
        return {
          url: '/house/addHouse',
          method: 'POST',
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: data,
        };
      },
      invalidatesTags: ['HOUSE'],
    }),
    editHouse: builder.mutation({
      query: ({ id, token, ...data }) => ({
        url: `/house/${id}`,
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['HOUSE'],
    }),
    deleteHouse: builder.mutation({
      query: ({ id, token }) => ({
        url: `/house/${id}`,
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['HOUSE'],
    }),
    addQuestion: builder.mutation({
      query: ({ id,qus }) => {
        console.log('from api', qus)
        return {
          url: `/house/${id}/question`,
          method: 'PATCH',
         body:{qus}
        }
      },
      invalidatesTags: ['HOUSE'],
    }),
    makeAnswer: builder.mutation({
      query: ({ houseId, questionId,ans }) => {
     
        return {
          url: `/house/make-answer/${houseId}/${questionId}`,
          method: 'PATCH',
         body:{ans}
        }
      },
      invalidatesTags: ['HOUSE'],
    }),
  }),
});

export const {
  useGetMyHousesQuery,
  useAddHouseMutation,
  useDeleteHouseMutation,
  useEditHouseMutation,
  useGetHousesQuery,
  useGetSingleHousesQuery,
  useAddQuestionMutation,
  useMakeAnswerMutation
} = houseApi;
