/* eslint-disable no-param-reassign */

import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './defaultState';
import { setPeople } from './actions';

const peopleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPeople, (state, action) => {
      state.peopleList = action.payload.peopleList;
    });
});

export default peopleReducer;
