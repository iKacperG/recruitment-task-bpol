import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './defaultState';
import { setPlanets } from './actions';

const planetsReducer = createReducer(initialState, (builder) => {
  builder
    // eslint-disable-next-line no-unused-vars
    .addCase(setPlanets, (planets, action) => {
      // eslint-disable-next-line no-param-reassign
      planets[action.payload.url] = action.payload.planetInfo;
    });
});

export default planetsReducer;
