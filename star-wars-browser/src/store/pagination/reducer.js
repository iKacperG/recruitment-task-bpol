import { createReducer } from '@reduxjs/toolkit';
import { changePage } from './actions';
import { initialState } from './defaultState';

const pageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changePage, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.pageNumber = action.payload.pageNumber;
    });
});

export default pageReducer;
