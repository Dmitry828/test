import { createAction } from '@reduxjs/toolkit';

export const REQUEST_MOVIES = createAction<number>('request/movies');
export const REQUEST_GENRES = createAction<any>('request/genres');
