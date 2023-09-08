import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchBooks, loadingMoreBooks } from "./action-creator";
import { Book, BooksState } from "../types/types";

const initialState: BooksState = {
  books: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.books = [];
      })
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<[Book[], number]>) => {
          state.books = action.payload[0];
        }
      )
      .addCase(
        loadingMoreBooks.fulfilled,
        (state, action: PayloadAction<Book[]>) => {
          state.books = state.books.concat(action.payload);
        }
      );
  },
});

export default booksSlice.reducer;
