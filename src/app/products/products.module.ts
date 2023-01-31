import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsService } from './services/products.service';
import { StoreModule } from '@ngrx/store';
import {
  AccountBalancesDataReducer,
  AccountDataReducer,
  AccountImagesDataReducer,
  ExchangeRatesDataReducer,
  ProductDataEffects,
} from './store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      accounts: AccountDataReducer,
      accountBalances: AccountBalancesDataReducer,
      accountImages: AccountImagesDataReducer,
      exchangeRates: ExchangeRatesDataReducer,
    }),
    EffectsModule.forRoot([ProductDataEffects]),
  ],
  declarations: [ProductsComponent],
  providers: [ProductsService],
})
export class ProductsModule {}
