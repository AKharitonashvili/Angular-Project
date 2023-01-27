import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookListService } from '../services/book-list.service';
import { BooksActions, BooksApiActions } from '../store/actions';
import { selectBookCollection, selectBooks } from '../store/selectors';

@Component({
  selector: 'app-books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.scss'],
})
export class BooksMainComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private store: Store, private booksService: BookListService) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  public onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  public onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
