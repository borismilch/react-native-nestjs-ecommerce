import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart.slice";
import createProductReducers from "./slices/create-product.slice";
import updateCommentReducer from "./slices/updateComment.slice";
import searchReducer from "./slices/search.slice";

export const rootReducer = combineReducers({
  cart: cartReducer,
  create: createProductReducers,
  updateComment: updateCommentReducer,
  search: searchReducer,
});
