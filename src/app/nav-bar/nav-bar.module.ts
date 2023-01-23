import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  entryComponents: [NavBarComponent],
  providers: [],
})
export class NavBarModule {}
