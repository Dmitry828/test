import { Data, GenresArray, MovieType } from '../../core/store/sagas/types';


export interface MovieState {
  movies: Record<string, never> | Data<MovieType>;
  genres: Record<string, never> | Data<GenresArray>;
  isLoading: boolean;
  isError: boolean;
}

