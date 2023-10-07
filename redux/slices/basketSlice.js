import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("Can't remove from the basket");
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectedBasketItems = (state) => state.basket.items;

export const selectItemId = (state, itemId) => itemId;

export const selectBasketItemsWithId = createSelector(
  [selectedBasketItems, selectItemId],
  (items, itemId) => {
    return items.filter((item) => item.id === itemId);
  }
);

export const selectBasketValue = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
