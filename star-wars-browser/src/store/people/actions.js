import { createAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/prefer-default-export
export const setPeople = createAction('people/setPeople', (peopleList) => ({
  payload: {
    peopleList,
  },
}));

export const fetchPeople = createAction('people/fetchPeople');
