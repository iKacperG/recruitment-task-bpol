import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './defaultState';
import { setFilms } from './actions';

const filmReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilms, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.films = [...state.films, action.payload.film];
    });
});

export default filmReducer;
