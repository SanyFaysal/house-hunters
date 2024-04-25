import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    houses : []
};
const wishlistSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      addToWishlist: (state, action) => {

       state.houses.push(action.payload);
      },
      removeFromWishlist: (state, action) => {
        state.houses = state.houses.filter(house=>house?._id!== action.payload._id)
      },
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
