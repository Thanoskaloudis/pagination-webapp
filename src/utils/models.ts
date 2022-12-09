export interface IBooksState {
  books: IBook[];
  count: number;
  params: IParams;
  status: 'idle' | 'loading' | 'failed';
}

export interface IBook {
  book_author: string[];
  book_publication_city: string;
  book_publication_country: string;
  book_publication_year: string;
  book_pages: number;
  book_title: string;
  id: number;
}

export interface IParams {
  page: number;
  itemsPerPage: number;
  filters: [];
}