export interface BooksState {
  books: Book[];
  status: 'idle' | 'loading' | 'failed';
}

export interface Book {
  book_author: string[];
  book_publication_city: string;
  book_publication_country: string;
  book_publication_year: string;
  book_pages: number;
  book_title: string;
  id: number;
}