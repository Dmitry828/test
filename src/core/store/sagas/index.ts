import { all } from 'redux-saga/effects';
import { moviesWatcher } from './moviesSaga';
import { movieWatcher } from './movieSaga';


export function* rootSaga() {
  yield all([moviesWatcher(), movieWatcher()]);
}
