import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    /*
     * NOTE: "state" passed to these reducers
     * only refers to the piece of state
     * managed by this specific slice.
     *
     * NOTE 2: These reducers make use of the
     * Immer library so it is necessary to
     * mutate the existing "state" variable.
     * A fallback option is to `return` what
     * we want the new state to be.
     */
    addSong: (state, { payload }) => {
      state.push(payload);
    },
    removeSong: (state, { payload }) => {
      state.splice(state.indexOf(payload), 1);
    },
    reset: (state) => []
  },
  /*
   * Watch for any additional action types
   * that this slice is not already auto-
   * matically watching. That is, extra
   * reducers are triggered when the
   * specified action or "case" is
   * dispatched.
   */
  extraReducers: (builder) => {
    /*
     * This example creates a dependency and a potential
     * flaw if the reducer is removed or renamed. In
     * this example, the songsSlice will cease to work
     * as expected.
        builder.addCase(moviesSlice.actions.reset, (state) => []);
     */
    builder.addCase(reset, (state) => []);
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
