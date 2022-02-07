import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
// import { screen } from '@testing-library/dom';
import FilterMenu from './FilterMenu';
import ProductPage from '../ProductPage';

let container = null;
describe('handleCheckbox', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(cleanup);

  it('ensures the checkboxes can be checked', () => {
    const { getByTestId } = render(<ProductPage><FilterMenu /></ProductPage>,
      container);
    const nikeCheckbox = getByTestId('nikeCheckbox');
    expect(nikeCheckbox.checked).toEqual(false);
    fireEvent.click(nikeCheckbox, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }));
    expect(nikeCheckbox.checked).toEqual(true);
  });

  // it('checks that handleCheckbox is returning the appropriate filter string', () => {
  //   const { getByTestId } = render(<ProductPage><FilterMenu /></ProductPage>,
  //     container);

  //   const nikeCheckbox = getByTestId('nikeCheckbox');
  //   fireEvent.click(nikeCheckbox, new MouseEvent('click', {
  //     bubbles: true,
  //     cancelable: true

  //   }));
  // });
  // expect({filterArray}).toEqual(expect.arrayContaining('&Brand=Nike'));
});
