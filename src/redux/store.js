import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './api/apiSlice';
import userSlice from './user/userSlice';
import wishListSlice from './wishlist/wishListSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: userSlice,
    wishlist: wishListSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
