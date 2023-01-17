import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './dashboard/shared/shared.module';

const modules = [SharedModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DashboardModule,
    BrowserAnimationsModule,
    ...modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
