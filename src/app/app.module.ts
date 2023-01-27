import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardSharedModule } from './dashboard/shared/shared.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ProductsModule } from './products/products.module';
import { BookListComponent } from './book-list/books-main/book-list/book-list.component';
import { BookListModule } from './book-list/book-list.module';

const modules = [
  DashboardModule,
  NavBarModule,
  ProductsModule,
  DashboardSharedModule,
  BookListModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...modules, BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
