import { all } from 'redux-saga/effects';
import { watchFetchPeopleSaga } from './people/saga';
import { watchFetchFilmsSaga } from './films/saga';
import { watchFetchPlanetsSaga } from './planets/saga';

export default function* rootSaga() {
  yield all([
    watchFetchPeopleSaga(),
    watchFetchFilmsSaga(),
    watchFetchPlanetsSaga(),
  ]);
  yield;
}
