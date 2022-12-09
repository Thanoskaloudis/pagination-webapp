import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getBooks, updateItemsPerPage, updatePage } from './features/books/booksSlice';
import { ListItems } from './components/ListItems/ListItems';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Pagination, PaginationItem } from '@mui/material';
import './App.scss';

function App() {
  const { page } =  useParams();
  const { itemsPerPage } = useParams();
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updatePage(Number(page)));
    dispatch(updateItemsPerPage(Number(itemsPerPage)))
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="app">
      <ListItems />
      <div className="app__pagination">
      {/* <Pagination
        page={page}
        count={10}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/books/page/${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
        )}
      /> */}
      </div>
    </div>
  );
}

export default App;
