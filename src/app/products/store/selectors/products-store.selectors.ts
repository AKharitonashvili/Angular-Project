import { createSelector } from '@ngrx/store';
import { AppState, ProductState } from '../models/product-store.models';

export const selectAccountsState = (state: AppState) => state.accounts;
export const selectAccountsData = createSelector(
  selectAccountsState,
  (state: ProductState) => state.data
);

export const selectAccountsBalancesState = (state: AppState) =>
  state.accountBalances;
export const selectAccountsBalancesData = createSelector(
  selectAccountsBalancesState,
  (state: ProductState) => state.data
);

export const selectAccountImagesState = (state: AppState) =>
  state.accountImages;
export const selectAccountImagesData = createSelector(
  selectAccountImagesState,
  (state: ProductState) => state.data
);

export const selectExchangeRatesState = (state: AppState) =>
  state.exchangeRates;
export const selectExchangeRatesData = createSelector(
  selectExchangeRatesState,
  (state: ProductState) => state.data
);
