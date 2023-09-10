import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { bookDataFetch } from "./action-creator";
import { Book, Info } from "../types/types";

const initialState: Info = {
  title: "",
  loading: false,
  authors: [],
  publishedDate: "",
  language: "",
  subtitle: "",
  categories: [],
  description: "",
  imageLinks: {
    thumbnail: "",
    large: "",
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    clearBook: (state) => {
      state = initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(bookDataFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        bookDataFetch.fulfilled,
        (state, action: PayloadAction<Book>) => {
          state.loading = false;
          state.title = action.payload.volumeInfo.title;
          state.authors = action.payload.volumeInfo.authors;
          state.categories = action.payload.volumeInfo.categories;
          state.publishedDate = action.payload.volumeInfo.publishedDate;
          state.subtitle = action.payload.volumeInfo.subtitle;
          state.language = action.payload.volumeInfo.language;
          state.description = action.payload.volumeInfo.description;
          state.imageLinks = action.payload.volumeInfo.imageLinks;
        }
      )
      .addCase(bookDataFetch.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearBook } = bookSlice.actions;

export default bookSlice.reducer;
