import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './defaultState';
import { setPeopleData } from './actions';

const peopleDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPeopleData, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.dataProvided = action.payload.dataProvided;
    });
});

export default peopleDataReducer;
