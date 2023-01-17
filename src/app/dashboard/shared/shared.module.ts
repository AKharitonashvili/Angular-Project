import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureByProductPipe } from './pipes/picture-by-product.pipe';
import { TotalSumPipe } from './pipes/total-sum.pipe';
import { AmountPipe } from './pipes/amount.pipe';

const pipes = [TotalSumPipe, PictureByProductPipe, AmountPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [...pipes],
  exports: [...pipes],
})
export class SharedModule {}
