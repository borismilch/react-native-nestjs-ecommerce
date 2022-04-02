import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const searchSelector = createSelector(
  (state: RootState) => state.search,
  (search) => search
);
