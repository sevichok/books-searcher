import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import filterReducer from "./filterSlice";
import infoReducer from "./infoSlice";
import sortReducer from "./sortSlice";
import bookReducer from "./bookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    info: infoReducer,
    filter: filterReducer,
    sort: sortReducer,
    book: bookReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
