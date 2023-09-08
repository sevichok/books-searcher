import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchBooks, loadingMoreBooks } from "./action-creator";
import { InfoState, Book } from "../types/types";

const initialState: InfoState = {
  error: null,
  loading: false,
  totalItems: 0,
};

export const infoSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<[Book[], number]>) => {
          state.loading = false;
          state.error = "";
          state.totalItems = action.payload[1];
        }
      )
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = JSON.stringify(action.payload);
      })
      .addCase(loadingMoreBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadingMoreBooks.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(loadingMoreBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = JSON.stringify(action.payload);
      });
  },
});

export default infoSlice.reducer;
