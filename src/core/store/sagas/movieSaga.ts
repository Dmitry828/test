import { call, put, takeLatest } from 'redux-saga/effects';
import { requestMovie, requestMovieCredits, requestSimilarMovies } from './requests';
import {
  fetchMovie,
  fetchMovieCredits,
  fetchMovieError,
  fetchMovieSuccess,
  fetchSimilarMovies,
} from '../../../modules/movie/reducer';
import { REQUEST_MOVIE } from '../../../modules/movie/actions';
import { DataMovie, MovieCredits, MovieDetails } from '../../../modules/movie/types';
import { MovieType } from './types';

function* movieWorker({ payload }: { payload: any }) {
  try {
    yield put(fetchMovie());
    console.log('saga')
    const movie: DataMovie<MovieDetails> = yield call(requestMovie, payload);
    const credits: DataMovie<MovieCredits> = yield call(requestMovieCredits, payload);
    const { id } = movie.data;
    const similarMovies: DataMovie<MovieType> = yield call(requestSimilarMovies, id);
    yield put(fetchMovieSuccess(movie));
    yield put(fetchMovieCredits(credits));
    yield put(fetchSimilarMovies(similarMovies));
  } catch (e) {
    yield put(fetchMovieError());
  }
}

export function* movieWatcher(): Generator {
  yield takeLatest(REQUEST_MOVIE, movieWorker);
}