import { createAction } from '@reduxjs/toolkit';

export const setPlanets = createAction('planets/setPlanets', (url, planetInfo) => ({
  payload: {
    url,
    planetInfo,
  },
}));

export const fetchPlanets = createAction('planets/fetchPlanets');
