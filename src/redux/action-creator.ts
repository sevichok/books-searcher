import axios from "axios";
import { Schema, Book } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "AIzaSyBx6tEQHCYPanyWYPLqeE6WfNZ09aRbTnE";

type Props = {
  input: string;
};

export const fetchBooks = createAsyncThunk<[Book[], number], Props>(
  "fetchingBooks",
  async ({ input }, thunkAPI) => {
    try {
      const link = `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=30&key=${API_KEY}`;
      const { data } = await axios.get<Schema>(link);
      console.log(data);
      return [data.items, data.totalItems];
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch books");
    }
  }
);

type loadProps = {
  input: string;
  results: number;
};

export const loadingMoreBooks = createAsyncThunk<Book[], loadProps>(
  "loadingMoreBooks",
  async ({ input, results }, thunkAPI) => {
    try {
      const link = `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=30&startIndex=${
        results + 1
      }&key=${API_KEY}`;
      const { data } = await axios.get<Schema>(link);
      console.log(data);
      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch books");
    }
  }
);
