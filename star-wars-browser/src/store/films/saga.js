import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchFilms, setFilms } from './actions';

export function* fetchFilmsSaga(film) {
  const response = yield call(fetch, film.payload);
  const data = yield response.json();
  yield put(setFilms(data));
}

export function* watchFetchFilmsSaga() {
  yield takeEvery(String(fetchFilms), fetchFilmsSaga);
}

export default null;
