import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchBooks, loadingMoreBooks } from "./action-creator";
import { Book, BooksState } from "../types/types";

const initialState: BooksState = {
  books: [],
  totalItems: 0,
  loading: false,
  error: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    // booksFetching(state) {
    //   state.loading = true;
    // },
    // booksFetchingSuccess(state, action: PayloadAction<[Book[], number]>) {
    //   state.loading = false;
    //   state.error = "";
    //   state.books = action.payload[0];
    //   state.totalItems = action.payload[1];
    // },
    // booksFetchingError(state, action: PayloadAction<null | string>) {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.books = [];
      })
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<[Book[], number]>) => {
          state.loading = false;
          state.error = "";
          state.books = action.payload[0];
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
      .addCase(
        loadingMoreBooks.fulfilled,
        (state, action: PayloadAction<Book[]>) => {
          state.loading = false;
          state.error = "";
          state.books = state.books.concat(action.payload);
        }
      )
      .addCase(loadingMoreBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = JSON.stringify(action.payload);
      });
  },
});

export default booksSlice.reducer;
