import { createAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/prefer-default-export
export const setFilms = createAction('films/setFilms', (film) => ({
  payload: {
    film,
  },
}));

export const fetchFilms = createAction('films/fetchFilms');
