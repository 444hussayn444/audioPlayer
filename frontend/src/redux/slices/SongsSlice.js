import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  loading: false,
  error: "",
};

const songs = createSlice({
  name: "songs",
  initialState,
  reducers: {
    start_fetch: (state, action) => {
      state.loading = true;
    },
    fetch_success: (state, action) => {
      state.loading = false;
      state.songs = action.payload;
    },
    fetch_failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetch_failure, fetch_success, start_fetch } = songs.actions;
export default songs.reducer;
