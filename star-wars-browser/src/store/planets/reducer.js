/* eslint-disable no-param-reassign */

import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './defaultState';
import { setPlanets } from './actions';

const planetsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPlanets, (planets, action) => {
      planets[action.payload.url] = action.payload.planetInfo;
    });
});

export default planetsReducer;
