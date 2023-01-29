import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import {
  LoadAccounts,
  LoadAccountsFailure,
  LoadAccountsSuccess,
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
          map((data) => LoadAccountsSuccess({ data })),
          catchError((error) => of(LoadAccountsFailure({ error })))
        )
      )
    )
  );
}
