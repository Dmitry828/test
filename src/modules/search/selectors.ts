import { RootState } from '../../core/store/store';
import { MovieType } from '../../core/store/sagas/types';

export const getSearchMovie = (state:RootState):any => {
  return state.searchReducer?.searchMovie?.data;
}
export const getIsLoadingSearch = (state:RootState) : boolean => {
  return state.searchReducer?.isLoading;
}
export const getDiscoveredMovies = (state:RootState):any=> {
  return state.searchReducer.sort?.data;
}