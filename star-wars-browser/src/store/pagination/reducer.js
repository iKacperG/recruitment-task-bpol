import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement, changePage } from './actions';
import { initialState } from './defaultState';

const pageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.pageNumber += 1;
    })
    .addCase(decrement, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.pageNumber -= 1;
    })
    .addCase(changePage, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.pageNumber = action.payload.pageNumber;
    });
});

export default pageReducer;
