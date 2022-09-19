import { FavoritesState } from './types';
import { MovieArray } from '../../core/store/sagas/types';
import { RootState } from '../../core/store/store';
import { MovieDetails } from '../movie/types';

export const favoritesMovies = (state:RootState):MovieDetails[] => state.favoritesReducer.favorites;