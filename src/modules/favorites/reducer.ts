import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoritesState } from './types';
import { MovieDetails } from '../movie/types';

const initialState: FavoritesState = {
  favorites: [],
};


const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state: FavoritesState, action: PayloadAction<MovieDetails>) => {
      state.favorites.push(action.payload);
    },
    deleteFromFavorites: (state: FavoritesState, action: PayloadAction<MovieDetails>) => {
      state.favorites = state?.favorites?.filter((movie: MovieDetails) => movie.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;