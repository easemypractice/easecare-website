// store/pageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageRoutes: [],
};

const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    addRoute: (state, action) => {
      state.pageRoutes.push(action.payload);
    },
  },
});

export const { addRoute } = pageSlice.actions;
export default pageSlice.reducer;
