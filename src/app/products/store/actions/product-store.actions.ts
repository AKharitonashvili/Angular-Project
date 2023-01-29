import { createAction, props } from '@ngrx/store';
import { Account, Balance } from 'src/app/dashboard/models';

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
