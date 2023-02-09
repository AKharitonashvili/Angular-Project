import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  NavBarModule,
  ProductsModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...modules, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
