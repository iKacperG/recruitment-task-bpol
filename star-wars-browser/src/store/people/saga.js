import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPeople, setPeople } from './actions';
import { SWAPI_ADDRESS } from '../../config';

export function* fetchPeopleSaga() {
  const peopleArray = [];
  const response = yield call(fetch, `${SWAPI_ADDRESS}`);
  let data = yield response.json();

  peopleArray.push(data.results);

  while (data.next != null) {
    console.log('getting next page', data.next);
    const nextData = yield call(fetch, data.next);
    data = yield nextData.json();
    peopleArray.push(data.results);
  }

  peopleArray.push(data.results);
  yield put(setPeople(peopleArray));
}

export function* watchFetchPeopleSaga() {
  yield takeEvery(String(fetchPeople), fetchPeopleSaga);
}

export default null;
