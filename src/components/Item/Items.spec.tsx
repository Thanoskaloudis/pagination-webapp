import { render,  screen } from '@testing-library/react';
import { mockBook, mockData } from '../../utils/mocks';
import { Item } from './Item';
import { testableComponent } from '../../utils/utilsTest';
import { IBook } from '../../utils/models';

describe('Item Component', () => {
  it('Should load the correct number of list items', () => {
    render(testableComponent(<Item {...mockBook}/> , mockData));

    
  });
});
