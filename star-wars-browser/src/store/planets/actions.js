import { createAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/prefer-default-export
export const setPlanets = createAction('planets/setPlanets', (url, planetInfo) => ({
  payload: {
    url,
    planetInfo,
  },
}));

export const fetchPlanets = createAction('planets/fetchPlanets');
