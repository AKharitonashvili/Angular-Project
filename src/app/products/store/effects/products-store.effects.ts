import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects/src';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import {
  LoadAccounts,
  LoadAccountsFailure,
  LoadAccountsSuccess,
} from '../actions/product-store.actions';

@Injectable()
export class ProductDataEffects {
  public loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadAccounts),
      switchMap(() =>
        this.productsService.accounts$.pipe(
          tap((v) => console.log(v)),
          map((data) => LoadAccountsSuccess({ data })),
          catchError((error) => of(LoadAccountsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
