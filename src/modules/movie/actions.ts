import { createAction } from '@reduxjs/toolkit';

export const REQUEST_MOVIE = createAction<number>('request/movie');
// export const REQUEST_DISCVOER = createAction<any>('request/discover');
export const REQUEST_DISCVOER = createAction('request/movie', function prepare( sort: string, page?: number) {
  return {
    payload: {
      sort,
      page,
    },
  };
});