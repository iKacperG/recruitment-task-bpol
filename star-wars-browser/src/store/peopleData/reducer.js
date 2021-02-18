import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './defaultState';
import { setPeopleData } from './actions';

const peopleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPeopleData, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.peopleList = action.payload.peopleList;
    });
});

export default peopleReducer;
