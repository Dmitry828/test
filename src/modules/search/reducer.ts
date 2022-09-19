import { DataMovie, MovieSearchState, SearchMovie } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: MovieSearchState = {
  searchMovie: {},
  sort: {},
  isLoading: false,
  isError: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    fetchSearchMovie: (state: MovieSearchState) => {
      state.isLoading = true;
    },
    fetchSearchMovieSuccess: (state: MovieSearchState, action: PayloadAction<DataMovie<SearchMovie>>) => {
      state.searchMovie = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    clearSearchMovie: (state: MovieSearchState) => {
      state.searchMovie = {};
    },
    fetchSortMovie: (state: MovieSearchState, action: PayloadAction<any>) => {
      state.sort = action.payload;
    },
    fetchSearchMovieError: (state: MovieSearchState) => {
      state.isError = true;
    },

  },
});
export const {
  fetchSearchMovie,
  fetchSearchMovieSuccess,
  fetchSearchMovieError,
  clearSearchMovie,
  fetchSortMovie,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;