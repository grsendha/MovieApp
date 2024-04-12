import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  mainPageInfo: [],
};
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadMovie: (state, action) => {
      state.info = action.payload;
    },
    removeMovie: (state) => {
      state.info = null;
    },
    loadMainPage: (state, action) => {
      state.mainPageInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadMovie, removeMovie, loadMainPage } = movieSlice.actions;

export default movieSlice.reducer;
