import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ApplicationsModule } from './applications/applications.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './applications/shared/shared.module';

const modules = [SharedModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ApplicationsModule,
    BrowserAnimationsModule,
    ...modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
