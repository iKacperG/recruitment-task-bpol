import { createAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/prefer-default-export
export const setPeopleData = createAction('peopleData/setPeopleData', (dataProvided) => ({
  payload: {
    dataProvided,
  },
}));
