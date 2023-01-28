import { createAction, props } from '@ngrx/store';

export const LoadAccounts = createAction('[Account] Load Data');
export const LoadAccountsSuccess = createAction(
  '[Account] Load Data Success',
  props<{ data: any[] }>()
);
export const LoadAccountsFailure = createAction(
  '[Account] Load Data Failure',
  props<{ error: any }>()
);
