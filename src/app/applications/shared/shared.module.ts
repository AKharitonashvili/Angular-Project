import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureByProductPipe } from './pipes/picture-by-product.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [PictureByProductPipe],
  exports: [PictureByProductPipe],
})
export class SharedModule {}
