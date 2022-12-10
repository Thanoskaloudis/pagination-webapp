import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import initialState from '../features/books/booksSlice';

const mockStore = (state = initialState) => configureMockStore()(state);

export const testableComponent = (component: any, state: any) =>
  (<Provider store={mockStore(state)}>{component}</Provider>);