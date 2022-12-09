import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store/store';
import * as API from "../../utils/booksAPI";
import { BooksState } from '../../utils/models';

const initialState: BooksState = {
  books: [],
  status: 'idle',
};

export const getBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await API.post(1, 20, []);
    return response;
  }
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBooks = (state: RootState) => state.booklist.books;

export default booksSlice.reducer;
