import { createAction } from '@reduxjs/toolkit';

export const setFilms = createAction('films/setFilms', (film) => ({
  payload: {
    film,
  },
}));

export const fetchFilms = createAction('films/fetchFilms');
