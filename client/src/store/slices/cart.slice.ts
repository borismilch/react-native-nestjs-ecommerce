import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ICartItem } from "models";

interface CartSliceState {
  cart: { [key: string]: ICartItem };
}

const initialState: CartSliceState = {
  cart: {},
};

const slice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct | number>) {
      if (typeof action.payload === "number") {
        state.cart[action.payload].count++;
      } else if (state.cart[action.payload.id]) {
        state.cart[action.payload.id].count++;
      } else {
        state.cart[action.payload.id] = { count: 1, product: action.payload };
      }
    },

    removeFormCart(state, action: PayloadAction<number>) {
      if (state.cart[action.payload].count > 1) {
        state.cart[action.payload].count--;
      } else {
        delete state.cart[action.payload];
      }
    },
  },
});

export const CartStore = slice.actions;

export default slice.reducer;
