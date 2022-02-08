import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from 'react-dom';
import UsePagination from './UsePagination';
import Pagination from './Pagination';

jest.mock('./Pagination');
let container = null;
describe('UsePagination', () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('less pages then 10', () => {
    render(
      <Pagination
        currentPage={1}
        totalCount={8}
        pageSize={20}
      />, container
    );
    expect(UsePagination({
      currentPage: 1, totalCount: 4, pageSize: 20, siblingCount: 5
    }).toBe(1));
  });
});
