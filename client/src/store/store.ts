import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
});

export const createStore = <T extends Object>(preloadedState: T) => {
  return configureStore({ reducer: rootReducer, preloadedState });
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
