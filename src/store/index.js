import { configureStore } from "@reduxjs/toolkit";

import { reset } from "./actions";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    songs: songsReducer
  }
});

export { addMovie, addSong, removeMovie, removeSong, reset, store };
