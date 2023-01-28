import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../models/product-store.models';

export const selectData = (state: ProductState) => state.data;
export const selectAccountsData = createSelector(selectData, (data) => {
  return data || [];
});
