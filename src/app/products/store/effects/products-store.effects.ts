import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  Account,
  AccountImages,
  Balance,
  ExchangeRate,
} from 'src/app/dashboard/models';
import { ProductsService } from '../../services/products.service';
import {
  LoadAccountBalances,
  LoadAccountBalancesFailure,
  LoadAccountBalancesSuccess,
  loadAccountImages,
  LoadAccountImagesFailure,
  LoadAccountImagesSuccess,
  LoadAccounts,
  LoadAccountsFailure,
  LoadAccountsSuccess,
  LoadExchangeRates,
  LoadExchangeRatesFailure,
  LoadExchangeRatesSuccess,
} from '../actions/product-store.actions';

@Injectable()
export class ProductDataEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadAccounts),
      switchMap(() =>
        this.productsService.accounts$.pipe(
          map((data: Account[]) => LoadAccountsSuccess({ data })),
          catchError((error) => of(LoadAccountsFailure({ error })))
        )
      )
    )
  );

  loadAccountBalances$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadAccountBalances),
      switchMap(() =>
        this.productsService.balances$.pipe(
          map((data: Balance[]) => LoadAccountBalancesSuccess({ data })),
          catchError((error) => of(LoadAccountBalancesFailure({ error })))
        )
      )
    )
  );

  loadAccountImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAccountImages),
      switchMap(() =>
        this.productsService.images$.pipe(
          map((data: AccountImages[]) => LoadAccountImagesSuccess({ data })),
          catchError((error) => of(LoadAccountImagesFailure({ error })))
        )
      )
    )
  );

  loadExchangeRates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadExchangeRates),
      switchMap(() =>
        this.productsService.exchangeRates$.pipe(
          map((data: ExchangeRate[]) => LoadExchangeRatesSuccess({ data })),
          catchError((error) => of(LoadExchangeRatesFailure({ error })))
        )
      )
    )
  );
}
