import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { MemoryRouter, Route, Routes } from 'react-router';
import { BrowserRouter, Navigate } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={`/books/page=${store.getState().booklist.params.page}/itemsPerPage=${store.getState().booklist.params.itemsPerPage}`} />} />
          <Route path="/books/page=:page/itemsPerPage=:itemsPerPage" element={<App />} />
          <Route path="/*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
