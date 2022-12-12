import { render,  screen } from '@testing-library/react';
import { mockData } from '../utils/mocks';
import { ListItems } from '../components/ListItems/ListItems';
import { testableComponent } from '../utils/utilsTest';

describe('Listitems Component', () => {
  it('Should load the correct number of list items', () => {
    render(testableComponent(<ListItems />, mockData ));

    const items = screen.getAllByTestId('list-item', {});

    expect(items).toHaveLength(2);
  });
});
