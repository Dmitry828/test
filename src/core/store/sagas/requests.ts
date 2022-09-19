import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e95bcb0bf0897e89eba22e51491c3a7b';
export const requestMovies = (page:number) => {
  return axios(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=ru-RU&page=${page}`);
};
export const requestMoviesGenres = () => {
  return axios(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=ru-RU`);
};
export const requestMovie = (id: number) => {
  console.log('MOVUE')
  return axios(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=ru-RU`);
};
export const requestMovieCredits = (id: number) => {
  return axios(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=ru-RU`);
};
export const requestSearchMovie = (title: string) => {
  return axios(`${BASE_URL}search/movie?api_key=${API_KEY}&language=ru-RU&query=${title}&page=1&include_adult=false`);
};
export const requestSimilarMovies = (id: number) => {
  return axios(`${BASE_URL}movie/${id}/similar?api_key=${API_KEY}&language=ru-RU&page=1`);
};
export const requestDiscoverMovies = (sort: string, page?:number) => {
  return axios(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=ru-RU&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);
};