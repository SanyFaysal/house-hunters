import apiSlice from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["USER"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["USER"],
    }),
    addToWishlist: builder.mutation({
      query: ({ token, houseId }) => {
        console.log(houseId);
        return {
          url: "/user/wishlist",
          method: "PATCH",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: { houseId },
        };
      },
      invalidatesTags: ["USER", "HOUSE"],
    }),
    removeFromWishlist: builder.mutation({
      query: ({ token, houseId }) => {
        console.log(houseId);
        return {
          url: "/user/remove-wishlist",
          method: "PATCH",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: { houseId },
        };
      },
      invalidatesTags: ["USER", "HOUSE"],
    }),
    getWishlist: builder.query({
      query: (token) => ({
        url: "/user/wishlist",
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useAddToWishlistMutation,
  useGetWishlistQuery,
  useRemoveFromWishlistMutation,
} = userApi;
