import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardSharedModule } from './dashboard/shared/shared.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { BookListModule } from './book-list/book-list.module';
import { ProductsModule } from './products/products.module';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  DashboardModule,
  NavBarModule,
  DashboardSharedModule,
  BookListModule,
  ProductsModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
