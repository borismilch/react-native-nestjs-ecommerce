import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateSliceActions {
  image: string;
  images: string[];
  title: string;
  description: string;
  options: string[];
  price: number;
  templateImages: string[];
}

const initialState: CreateSliceActions = {
  image: "",
  images: [],
  templateImages: [],
  title: "",
  description: "",
  options: [],
  price: 0,
};

const slice = createSlice({
  name: "createProductSlice",
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },

    changeImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },

    changeDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },

    changePrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },

    addOption: (state, action: PayloadAction<string>) => {
      state.options.push(action.payload);
    },

    removeOption: (state, action: PayloadAction<number>) => {
      state.options = state.options.filter(
        (item, idx) => idx !== action.payload
      );
    },

    addImage: (state, action: PayloadAction<[string, string]>) => {
      state.images.push(action.payload[0]);
      state.templateImages.push(action.payload[1]);
    },

    removeImage: (state, action: PayloadAction<number>) => {
      state.images = state.images.filter((item, idx) => idx !== action.payload);
      state.templateImages = state.templateImages.filter(
        (item, idx) => idx !== action.payload
      );
    },

    clearAll: (state) => {
      (state.description = ""),
        (state.image = ""),
        (state.images = []),
        (state.options = []),
        (state.price = 0),
        (state.title = "");
      state.templateImages = [];
    },
  },
});

export default slice.reducer;

export const CreateProducerActions = slice.actions;
