import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getBooks } from './features/books/booksSlice';
import { ListItems } from './components/ListItems/ListItems';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.booklist.books)

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  console.log(books);

  return (
    <div className="app">
      <ListItems />
    </div>
  );
}

export default App;
