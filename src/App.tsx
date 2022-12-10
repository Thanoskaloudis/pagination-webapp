import React, { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from './store/hooks';
import {
  getBooks,
  updateItemsPerPage,
  updatePage,
} from './features/books/booksSlice';
import { ListItems } from './components/ListItems/ListItems';
import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Pagination,
  PaginationItem,
} from '@mui/material';
import './App.scss';

const App = () => {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const page = useAppSelector(
    (state) => state.booklist.params.page
  );
  const itemsPerPage = useAppSelector(
    (state) => state.booklist.params.itemsPerPage
  );
  const count = useAppSelector(
    (state) => state.booklist.count
  );
  const status = useAppSelector(
    (state) => state.booklist.status
  );

  useEffect(() => {
    dispatch(updatePage(Number(params.page)));
    dispatch(
      updateItemsPerPage(Number(params.itemsPerPage))
    );
    dispatch(getBooks());
  }, [dispatch, params.itemsPerPage, params.page]);

  const handlePageChange = (): void => {
    dispatch(updatePage(Number(params.page)));
    dispatch(
      updateItemsPerPage(Number(params.itemsPerPage))
    );
    dispatch(getBooks());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) {
      return;
    } else {
      navigate(
        `/books/page=${page}/itemsPerPage=${e.target.value}`
      );
      dispatch(updatePage(Number(params.page)));
      dispatch(
        updateItemsPerPage(Number(params.itemsPerPage))
      );
    }
  };

  return (
    <div className="app">
      {status === 'loading' ? (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <ListItems />
          <div className="app__pagination">
            <Pagination
              page={Number(params.page)}
              count={Math.trunc(
                count / Number(params.itemsPerPage)
              )}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/books/page=${
                    item.page === 0
                      ? ''
                      : `${item.page}/itemsPerPage=${itemsPerPage}`
                  }`}
                  {...item}
                />
              )}
            />
            <div className="app__pagination__input">
              <span>Items per page: </span>
              <input
                type="number"
                min="1"
                max={count}
                value={params.itemsPerPage}
                onChange={(e) => handleInputChange(e)}
              ></input>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
