import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('pagination/increment');
export const decrement = createAction('pagination/decrement');
export const changePage = createAction('pagination/changePage', (pageNumber) => ({
  payload: {
    pageNumber,
  },
}));
