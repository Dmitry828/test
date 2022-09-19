import { MovieState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Data, GenresArray, MovieType } from '../../core/store/sagas/types';


const initialState: MovieState = {
  movies: {},
  genres: {},
  isLoading: false,
  isError: false,
};

const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    fetchMovies: (state: MovieState) => {
      state.isLoading = true;
    },
    fetchMoviesSuccess: (state: MovieState, action: PayloadAction<Data<MovieType>>) => {
      state.movies = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    fetchMoviesGenres: (state: MovieState, action: PayloadAction<Data<GenresArray>>) => {
      state.genres = action.payload;
    },
    fetchMoviesError: (state: MovieState) => {
      state.isError = true;
    },

  },
});
export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError, fetchMoviesGenres } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;