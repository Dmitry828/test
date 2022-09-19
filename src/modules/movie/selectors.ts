import { RootState } from '../../core/store/store';
import { Cast, DataMovie, MovieCredits, MovieDetails } from './types';
import { MovieType } from '../../core/store/sagas/types';


export const getMovieDetails = (state: RootState): Record<string, never> | DataMovie<MovieDetails> => {
  return state.movieReducer?.movie;
};
export const getMovieCredits = (state: RootState):  Cast[] => {
  return state.movieReducer?.credits?.data?.cast?.slice(0,10);
};
export const getMovieLoading = (state: RootState): boolean => {
  return state.movieReducer?.isLoading;
};
export const getSimilarMovies = (state:RootState):Record<string, never> | MovieType => {
  return state?.movieReducer?.similarMovies?.data;
}