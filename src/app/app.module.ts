import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardSharedModule } from './dashboard/shared/shared.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { StoreModule } from '@ngrx/store';
import { ProductsModule } from './products/products.module';
import { counterReducer } from './products/store/reducers';

const modules = [
  DashboardModule,
  NavBarModule,
  ProductsModule,
  DashboardSharedModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...modules,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
