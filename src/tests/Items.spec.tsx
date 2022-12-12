import { render,  screen } from '@testing-library/react';
import { mockBook, mockData } from '../utils/mocks';
import { Item } from '../components/Item/Item';
import { testableComponent } from '../utils/utilsTest';

describe('Item Component', () => {
  it('Should load the card with the correct book title', () => {
    render(testableComponent(<Item {...mockBook}/> , mockData));

    const tittle: HTMLElement = screen.getByTestId("title");
    
    expect(tittle.textContent).toEqual(mockData.booklist.books[1].book_title);
  });

  it('Should load the card with the correct book author', () => {
    render(testableComponent(<Item {...mockBook}/> , mockData));

    const tittle: HTMLElement = screen.getByTestId("author");
    
    expect(tittle.textContent).toEqual(mockData.booklist.books[1].book_author[0]);
  });

  it('Should load the card with the correct publication info(city, country, year)', () => {
    render(testableComponent(<Item {...mockBook}/> , mockData));

    const tittle: HTMLElement = screen.getByTestId("publication-info");
    
    expect(tittle.textContent).toEqual(`${mockData.booklist.books[1].book_publication_city}, ${mockData.booklist.books[1].book_publication_country} ${mockData.booklist.books[1].book_publication_year}`);
  });

  it('Should load the card with the correct number of pages', () => {
    render(testableComponent(<Item {...mockBook}/> , mockData));

    const tittle: HTMLElement = screen.getByTestId("pages");
    
    expect(tittle.textContent).toEqual(`Pages: ${mockData.booklist.books[1].book_pages}`);
  });
});
