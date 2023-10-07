import { createSlice } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";

const initialState = {
  data: {
    id: null,
    imgUrl: null,
    title: null,
    title: null,
    rating: null,
    genre: null,
    addres: null,
    shortDescription: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurantData: (state, action) => {
      state.data = action.payload
    }
  }
});

export const { setRestaurantData } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.data

export default restaurantSlice.reducer;