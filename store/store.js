// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import pageReducer from "./pageSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      pages: pageReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
