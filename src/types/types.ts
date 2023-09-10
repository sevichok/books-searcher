export type Info = {
  title: string;
  authors: string[];
  publishedDate: string;
  language: string;
  subtitle?: string;
  categories?: string[];
  description?: string;
  loading?: boolean;
  imageLinks?: {
    thumbnail: string;
    large?: string;
    medium?: string;
    small?: string;
  };
};
export type Book = {
  id: string;
  selfLink: string;
  volumeInfo: Info;
};
export type BooksState = {
  books: Book[];
};
export type InfoState = {
  loading: boolean;
  error: null | string;
  totalItems: number;
};
// export type FilterState = { filter: string };

export type Schema = {
  data: {
    items: Book[];
    totalItems: number;
  };
  status: Number;
  statusText: string;
  headers: {};
  config: {};
  request: {};
  items: Book[];
  totalItems: number;
};
