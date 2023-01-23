import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './components/progress/progress.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const libraryModules = [MatProgressSpinnerModule, MatProgressBarModule];
const components = [ProgressComponent];

@NgModule({
  imports: [CommonModule, ...libraryModules],
  declarations: [...components],
  exports: [...components],
  entryComponents: [...components],
})
export class SharedModule {}
