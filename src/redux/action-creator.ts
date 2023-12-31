import axios from "axios";
import { Schema, Book } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "AIzaSyBx6tEQHCYPanyWYPLqeE6WfNZ09aRbTnE";

export const fetchBooks = createAsyncThunk<[Book[], number], string>(
  "fetchingBooks",
  async ( input , thunkAPI) => {
    try {
      const link = `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=30&key=${API_KEY}`;
      const { data } = await axios.get<Schema>(link);
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
      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch books");
    }
  }
);

export const bookDataFetch = createAsyncThunk<Book, string>(
  "bookDataFetch",
  async (id, thunkAPI) => {
    try {
      const link = `https://books.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;
      const { data } = await axios.get<Book>(link);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch book");
    }
  }
);
