import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./action-creator";

export type Book = {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    language: string;
    subtitle?: string;
    categories?: string[];
    description?: string;
  };
};
type BooksState = { books: Book[]; loading: boolean; error: null | string };

const initialState: BooksState = {
  books: [],
  loading: false,
  error: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    booksFetching(state) {
      state.loading = true;
    },
    booksFetchingSuccess(state, action: PayloadAction<Book[]>) {
      state.loading = false;
      state.error = "";
      state.books = action.payload;
    },
    booksFetchingError(state, action: PayloadAction<null | string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.loading = false;
        state.error = "";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = JSON.stringify(action.payload);
      });
  },
});

export default booksSlice.reducer;
