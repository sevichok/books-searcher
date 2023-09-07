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
    imageLinks?: {
      thumbnail: string;
    };
  };
};
export type BooksState = {
  books: Book[];
  loading: boolean;
  error: null | string;
  totalItems: number;
  filter: string;
};

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
