import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export const cartItemsSelector = createSelector(
  (state: RootState) => state.cart,
  (cart) => Object.values(cart.cart)
);

export const totalPriceSelector = createSelector(
  (state: RootState) => state.cart,
  (cart) =>
    Object.values(cart.cart).reduce(
      (acc, item) => (acc += item.count * item.product.price),
      0
    )
);

export const cartSelector = createSelector(
  (state: RootState) => state.cart,
  (cart) => cart.cart
);
