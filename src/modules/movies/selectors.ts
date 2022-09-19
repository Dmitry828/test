import { GenresArray, MovieType } from '../../core/store/sagas/types';
import { RootState } from '../../core/store/store';


export const latestMovies = (state: RootState): MovieType =>
  state?.moviesReducer?.movies?.data;
export const getMovieGenres = (state: RootState): GenresArray => {
  return state.moviesReducer.genres.data;
};