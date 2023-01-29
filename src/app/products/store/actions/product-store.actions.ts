import { createAction, props } from '@ngrx/store';
import { Account, Balance, AccountImages } from 'src/app/dashboard/models';

export const LoadAccounts = createAction('[Account] Load Data');
export const LoadAccountsSuccess = createAction(
  '[Account] Load Data Success',
  props<{ data: Account[] }>()
);
export const LoadAccountsFailure = createAction(
  '[Account] Load Data Failure',
  props<{ error: any }>()
);

export const LoadAccountBalances = createAction('[Balances] Load Data');
export const LoadAccountBalancesSuccess = createAction(
  '[Balances] Load Data Success',
  props<{ data: Balance[] }>()
);
export const LoadAccountBalancesFailure = createAction(
  '[Balances] Load Data Failure',
  props<{ error: any }>()
);

export const loadAccountImages = createAction('[Images] Load data');
export const LoadAccountImagesSuccess = createAction(
  '[Images] Load Data Success',
  props<{ data: AccountImages[] }>()
);
export const LoadAccountImagesFailure = createAction(
  '[Images] Load Data Failure',
  props<{ error: any }>()
);
