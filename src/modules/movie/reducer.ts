import { DataMovie, MovieCredits, MovieDetails, MoviePageState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieType } from '../../core/store/sagas/types';


const initialState: MoviePageState = {
  movie: {},
  credits: {},
  similarMovies: {},
  isLoading: false,
  isError: false,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    fetchMovie: (state: MoviePageState) => {
      state.isLoading = true;
    },
    fetchMovieSuccess: (state: MoviePageState, action: PayloadAction<DataMovie<MovieDetails>>) => {
      state.movie = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    fetchMovieCredits: (state: MoviePageState, action: PayloadAction<DataMovie<MovieCredits>>) => {
      state.credits = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    fetchSimilarMovies: (state: MoviePageState, action: PayloadAction<DataMovie<MovieType>>) => {
      state.similarMovies = action.payload;
    },
    fetchMovieError: (state: MoviePageState) => {
      state.isError = true;
    },

  },
});
export const {
  fetchMovie,
  fetchMovieSuccess,
  fetchMovieError,
  fetchMovieCredits,
  fetchSimilarMovies,
} = movieSlice.actions;
export const movieReducer = movieSlice.reducer;