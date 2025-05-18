import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    youtubekey: null,
    popularMovies:[],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setKeyForVideo: (state, action) => {
      state.youtubekey = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});
export const { addNowPlayingMovies, setKeyForVideo, addPopularMovies } =
  MoviesSlice.actions;
export default MoviesSlice.reducer;