import axios from "axios";
// import { AppDispatch } from "./store";
import { Book } from "./slice";
// import { booksSlice } from "./slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "AIzaSyBx6tEQHCYPanyWYPLqeE6WfNZ09aRbTnE";

// export const fetchBooks = (value: string) => async (dispatch: AppDispatch) => {
//   const link = `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=5&key=${API_KEY}`;

//   try {
//     dispatch(booksSlice.actions.booksFetching());
//     const response = await axios.get<Book[]>(link);
//     dispatch(booksSlice.actions.booksFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(booksSlice.actions.booksFetchingError(error.message));
//   }
// };

type Schema = {
  data: {
    items: Book[];
  };
  status: Number;
  statusText: string;
  headers: {};
  config: {};
  request: {};
  items: Book[];
};

export const fetchBooks = createAsyncThunk<Book[], string>(
  "fetchingBooks",
  async (value: string, thunkAPI) => {
    try {
      const link = `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=5&key=${API_KEY}`;
      const { data } = await axios.get<Schema>(link);
      console.log(data.items);
      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch books");
    }
  }
);
