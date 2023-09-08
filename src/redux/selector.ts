import { createSelector } from "@reduxjs/toolkit";
import { Book, InfoState } from "../types/types";
import { RootState } from "./store";

export const selectAllBooks = (state: RootState): Book[] => state.books.books;
export const selectFilter = (state: RootState): string => state.filter;
export const selectInfo = (state: RootState): InfoState => state.info;
export const selectSort = (state: RootState): string => state.sort;

export const selectBooksByFilter = createSelector(
  [selectAllBooks, selectFilter, selectSort],
  (books, filter, sort) => {
    if (filter === "All") {
      return books;
    } else if (filter === "Art") {
      return books.filter((book) => {
        return (
          book.volumeInfo.categories !== undefined &&
          book.volumeInfo.categories[0] === "Art"
        );
      });
    } else if (filter === "Science") {
      return books.filter((book) => {
        return (
          book.volumeInfo.categories !== undefined &&
          book.volumeInfo.categories[0] === "Science"
        );
      });
    } else if (filter === "Education") {
      return books.filter((book) => {
        return (
          book.volumeInfo.categories !== undefined &&
          book.volumeInfo.categories[0] === "Education"
        );
      });
    } else if (filter === "Biography") {
      return books.filter((book) => {
        return (
          book.volumeInfo.categories !== undefined &&
          book.volumeInfo.categories[0] === "Biography"
        );
      });
    } else if (filter === "Computers") {
      return books.filter((book) => {
        return (
          book.volumeInfo.categories !== undefined &&
          book.volumeInfo.categories[0] === "Computers"
        );
      });
    } else if (filter === "Medical") {
      return books.filter((book) => {
        return (
          book.volumeInfo.categories !== undefined &&
          book.volumeInfo.categories[0] === "Medical"
        );
      });
    } else if (filter === "Philosophy") {
      return books.filter((book) => {
        return (
          book.volumeInfo.categories !== undefined &&
          book.volumeInfo.categories[0] === "Philosophy"
        );
      });
    } else if (filter === "Comics & Graphic Novels") {
      return books.filter((book) => {
        return (
          book.volumeInfo.categories !== undefined &&
          book.volumeInfo.categories[0] === "Comics & Graphic Novels"
        );
      });
    } else if (sort === "relevance") {
      return books;
    } else if (sort === "newest") {
      return books
        .filter((book) => {
          return book.volumeInfo.publishedDate !== undefined;
        })
        .sort((a: Book, b: Book) => {
          return (
            Number(b.volumeInfo?.publishedDate.split("-")[0]) -
            Number(a.volumeInfo?.publishedDate.split("-")[0])
          );
        });
    } else return books;
  }
);
