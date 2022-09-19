import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Book, BookState } from './types';


export const booksAdapter = createEntityAdapter<Book>({});
const initialState: BookState = booksAdapter.getInitialState({});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded(state, action) {
      booksAdapter.addOne(state, {
        id: Math.floor(Math.random() * 10),
        title: action.payload,
      });
    },
    booksReceived(state, action) {
      booksAdapter.setAll(state, action.payload.books);
    },

  },
});

export const { bookAdded } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

