import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getBooks, updateItemsPerPage, updatePage } from './features/books/booksSlice';
import { ListItems } from './components/ListItems/ListItems';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Pagination, PaginationItem } from '@mui/material';

import './App.scss';


function App() {
  const params = useParams();
  
  const dispatch = useAppDispatch();

  const page = useAppSelector((state) => state.booklist.params.page);
  const itemsPerPage = useAppSelector((state) => state.booklist.params.itemsPerPage);
  const count = useAppSelector((state) => state.booklist.count);

  useEffect(() => {
    dispatch(updatePage(Number(params.page)));
    dispatch(updateItemsPerPage(Number(params.itemsPerPage)));
    dispatch(getBooks());
  }, [dispatch, params.itemsPerPage, params.page]);

  const handlePageChange = () => {
    dispatch(updatePage(Number(params.page)));
    dispatch(updateItemsPerPage(Number(params.itemsPerPage)));
    dispatch(getBooks());
  }

  return (
    <div className="app">
      <ListItems />
      <div className="app__pagination">
      <Pagination
        page={Number(params.page)}
        count={Math.trunc (count / Number(params.itemsPerPage))}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/books/page=${item.page === 0 ? '' : `${item.page}/itemsPerPage=${itemsPerPage}`}`}
            {...item}
          />
        )}
      />
      </div>
    </div>
  );
}

export default App;
function selectCollection(page: string | undefined) {
  throw new Error('Function not implemented.');
}

function selectAppCollection(page: string | undefined) {
  throw new Error('Function not implemented.');
}

