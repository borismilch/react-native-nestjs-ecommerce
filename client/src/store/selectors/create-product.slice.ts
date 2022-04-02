import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const allSelector = createSelector(
  (state: RootState) => state.create,
  (create) => create
);
