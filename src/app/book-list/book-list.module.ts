import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/reducers';
import { collectionReducer } from './store/reducers/collections.reducers';
import { BookListService } from './services/book-list.service';
import { BookListComponent } from './books-main/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookCollectionComponent } from './books-main/book-collection/book-collection.component';
import { BooksMainComponent } from './books-main/books-main.component';

const components = [
  BookCollectionComponent,
  BookListComponent,
  BooksMainComponent,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
  ],
  declarations: [...components],
  exports: [...components],
  providers: [BookListService],
})
export class BookListModule {}
