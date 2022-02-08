import React from 'react';
import { cleanup } from '@testing-library/react';
import UsePagination, { paginationRange } from './UsePagination';

describe('UsePagination', () => {
  test('less pages then 10', () => {
    expect(UsePagination({
      currentPage: 1, totalCount: 4, pageSize: 20, siblingCount: 5
    }).toBe(1));
  });
});
