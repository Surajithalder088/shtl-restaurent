import { configureStore } from "@reduxjs/toolkit";

const appReducer = (state = { "app-name": "Ember & Plate" }) => {
  return state;
};

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});