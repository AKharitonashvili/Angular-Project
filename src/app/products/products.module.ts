import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/product.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  declarations: [],
})
export class ProductsModule {}
