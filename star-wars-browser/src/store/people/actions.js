import { createAction } from '@reduxjs/toolkit';

export const setPeople = createAction('people/setPeople', (peopleList) => ({
  payload: {
    peopleList,
  },
}));

export const fetchPeople = createAction('people/fetchPeople');
