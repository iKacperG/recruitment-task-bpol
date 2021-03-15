import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPlanets, setPlanets } from './actions';

export function* fetchPlanetsSaga(planet) {
  const response = yield call(fetch, planet.payload.homeworld);
  const data = yield response.json();
  yield put(setPlanets(planet.payload.homeworld, data));
}

export function* watchFetchPlanetsSaga() {
  yield takeEvery(String(fetchPlanets), fetchPlanetsSaga);
}
