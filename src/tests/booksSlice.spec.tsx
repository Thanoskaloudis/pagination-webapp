import counterReducer, {
  updatePage,
  updateItemsPerPage,
} from '../features/books/booksSlice';
import { IBooksState } from '../utils/models';

describe('booklist reducer', () => {
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
  
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      books: [],
      count: 0,
      params: {
        page: 1,
        itemsPerPage: 20,
        filters: []
      },
      status: 'idle', 
    });
  });

  it('should updade page action', () => {
    const actual = counterReducer(initialState, updatePage(5));
    expect(actual.params.page).toEqual(5);
  });

  it('should updade items per page action', () => {
    const actual = counterReducer(initialState, updateItemsPerPage(20));
    expect(actual.params.itemsPerPage).toEqual(20);
  });
});
