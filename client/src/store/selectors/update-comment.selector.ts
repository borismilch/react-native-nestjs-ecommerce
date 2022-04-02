import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export const updatingCommentSelector = createSelector(
  (state: RootState) => state.updateComment,
  (updateComment) => updateComment
);
