import { createAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/prefer-default-export
export const changePage = createAction('pagination/changePage', (pageNumber) => ({
  payload: {
    pageNumber,
  },
}));
