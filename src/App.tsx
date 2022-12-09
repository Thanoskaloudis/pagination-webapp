import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getBooks } from './features/books/booksSlice';
import './App.css';


function App() {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.booklist.books)

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  console.log(books);

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
