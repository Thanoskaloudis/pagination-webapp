import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { Item } from '../Item/Item';
import './ListItems.scss';

export const ListItems = () => {
  const books = useAppSelector((state) => state.booklist.books);
  
  return (
    <div className="cards">
      {books.map((book) => (
        <div className="cards--item" key={book.id} data-testid='list-item'>
            <Item {...book} />
        </div>
      ))}
    </div>
  );
}
