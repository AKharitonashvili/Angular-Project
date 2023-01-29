import { createSelector } from '@ngrx/store';
import { AppState, ProductState } from '../models/product-store.models';

export const selectAccountsState = (state: AppState) => state.accounts;
export const selectAccountsData = createSelector(
  selectAccountsState,
  (state: ProductState) => state.data
);
