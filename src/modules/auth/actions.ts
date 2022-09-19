import { createAction } from '@reduxjs/toolkit';

export const addBook = createAction(
  'ADD_BOOK',
  (id: number, title: string) => ({
    payload: {
      id,
      title,
    },
  }),
);