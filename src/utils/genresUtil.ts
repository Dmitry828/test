import { Genre } from '../modules/movie/types';

export const genresToUpperCase = (genre: string): string => {
  return genre.split(' ').map((el) => el[0].toUpperCase() + el.slice(1)).join('');
};

export const showFirstThreeGenres = (genres: Genre[]): string => {
  const toUpperCase = genres?.map((el: Genre) => el.name[0].toUpperCase() + el.name.slice(1));
  return toUpperCase?.slice(0, 3).join(', ');
};

