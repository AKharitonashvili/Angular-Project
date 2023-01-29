import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
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
} from '../actions/product-store.actions';
import { ProductState } from '../models/product-store.models';

export const InitialProductState: ProductState = {
  data: [],
  loading: false,
  error: null,
};

export const AccountDataReducer = createReducer(
  InitialProductState,
  on(LoadAccounts, (state: ProductState) => ({ ...state, loading: true })),
  on(LoadAccountsSuccess, (state: ProductState, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(LoadAccountsFailure, (state: ProductState, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export const AccountBalancesDataReducer = createReducer(
  InitialProductState,
  on(LoadAccountBalances, (state: ProductState) => ({
    ...state,
    loading: true,
  })),
  on(LoadAccountBalancesSuccess, (state: ProductState, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(LoadAccountBalancesFailure, (state: ProductState, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export const AccountImagesDataReducer = createReducer(
  InitialProductState,
  on(loadAccountImages, (state: ProductState) => ({ ...state, loading: true })),
  on(LoadAccountImagesSuccess, (state: ProductState, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(LoadAccountImagesFailure, (state: ProductState, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
