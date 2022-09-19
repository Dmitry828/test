import { all, call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_GENRES, REQUEST_MOVIES } from '../../../modules/movies/actions';
import { fetchMovies, fetchMoviesError, fetchMoviesGenres, fetchMoviesSuccess } from '../../../modules/movies/reducer';
import { requestMovies, requestMoviesGenres } from './requests';
import { Data, GenresArray, MovieType } from './types';

function* moviesWorker({payload}:{payload:number}) {
  try {
    yield put(fetchMovies());
    const movies: Data<MovieType> = yield call(requestMovies, payload);
    yield put(fetchMoviesSuccess(movies));
  } catch (e) {
    yield put(fetchMoviesError());
  }
}

function* genresWorker() {
  try {
    yield put(fetchMovies());
    const genres: Data<GenresArray> = yield call(requestMoviesGenres);
    yield put(fetchMoviesGenres(genres));
  } catch (e) {
    yield put(fetchMoviesError());
  }
}

export function* moviesWatcher(): Generator {
  yield all([
    yield takeLatest(REQUEST_MOVIES, moviesWorker),
    yield takeLatest(REQUEST_GENRES, genresWorker),
  ]);

}
