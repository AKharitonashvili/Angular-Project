import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardSharedModule } from './dashboard/shared/shared.module';
import { NavBarModule } from './nav-bar/nav-bar.module';

const modules = [DashboardSharedModule, BrowserModule, BrowserAnimationsModule];

@NgModule({
  declarations: [AppComponent],
  imports: [DashboardModule, NavBarModule, ...modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
