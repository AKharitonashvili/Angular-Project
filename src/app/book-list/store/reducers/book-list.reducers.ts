import { createReducer, on } from '@ngrx/store';
import { Book } from '../../models/models';
import { BooksApiActions } from '../actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
