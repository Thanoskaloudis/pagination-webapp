import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import * as API from "../../utils/booksAPI";
import { IBooksState } from '../../utils/models';

const initialState: IBooksState = {
  books: [],
  count: 0,
  params: {
    page: 1,
    itemsPerPage: 20,
    filters: []
  },
  status: 'idle', 
};

export const getBooks = createAsyncThunk(
  'books/fetchBooks',
  async (arg, { getState }) => { 
    const state: any = getState();
    const response = await API.post(state.booklist.params);
    console.log(response)
    return response;
  }
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    updatePage: (state, action: PayloadAction<number>) => {
      state.params.page = action.payload;
    },
    updateItemsPerPage: (state, action: PayloadAction<number>) => {
      state.params.itemsPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books = action.payload.books;
        state.count = action.payload.count;
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { updatePage, updateItemsPerPage } = booksSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBooks = (state: RootState) => state.booklist.books;

export default booksSlice.reducer;
