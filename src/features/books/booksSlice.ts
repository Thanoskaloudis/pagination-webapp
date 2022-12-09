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

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
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