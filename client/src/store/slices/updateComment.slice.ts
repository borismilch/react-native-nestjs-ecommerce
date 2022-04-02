import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "models";

interface UpdateCommentSliceState {
  isUpdating: boolean;
  updatingComment: IComment | null;
}

const initialState: UpdateCommentSliceState = {
  isUpdating: false,
  updatingComment: null,
};

const slice = createSlice({
  name: "UpdateCommentSlice",
  initialState,
  reducers: {
    startUpdatingComment: (state, action: PayloadAction<IComment>) => {
      state.updatingComment = action.payload;
      state.isUpdating = true;
    },

    endUpdatingComent: (state) => {
      state.updatingComment = null;
      state.isUpdating = false;
    },
  },
});

export default slice.reducer;
export const UpdateCommentActions = slice.actions;
