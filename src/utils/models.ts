export interface BooksState {
  books: [];
  status: 'idle' | 'loading' | 'failed';
}