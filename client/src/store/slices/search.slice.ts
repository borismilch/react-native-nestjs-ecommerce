import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearcSliceState {
  search: string;
}
const initialState: SearcSliceState = {
  search: "",
};

const slice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export default slice.reducer;
export const SearchActions = slice.actions;
