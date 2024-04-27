/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: '',
};

export const fetchUser = createAsyncThunk('auth/fetchUser', async (token) => {
  const response = await fetch(
    `https://house-hunters-server-seven.vercel.app/api/v1/user/me`,
  //  `http://localhost:8080/api/v1/user/me`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data?.data;
});

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state, action) => {
      console.log({ action });
      state.user = action.payload;
    },
    setUser: (state, action) => {
      state.user = {
        email: '',
        role: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.error = '';
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = payload;
        state.error = '';
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.error = action.error?.data?.error;
      });
  },
});

export const { logOut, setUser } = userSlice.actions;
export default userSlice.reducer;
