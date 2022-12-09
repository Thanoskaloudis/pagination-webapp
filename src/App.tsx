import React, { useEffect } from 'react';
import * as API from "./utils/booksAPI";
import './App.css';

function App() {
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await API.post(1, 20, []);
        console.log(res);
      } catch(error) {
        console.log('Fetch error: ', error);
      }
    };

    getBooks();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
