import { MovieType } from '../../core/store/sagas/types';

export interface MovieSearchState {
  searchMovie:Record<string, never> | DataMovie<SearchMovie>;
  sort: Record<string, never> | DataMovie<MovieType>;
  isLoading: boolean;
  isError: boolean;
}

export interface DataMovie<T> {
  data: T ;
}

export interface SearchMovie {
  page:number,
  results: any[];
}