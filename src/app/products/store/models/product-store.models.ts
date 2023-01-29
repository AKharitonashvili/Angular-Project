import {
  Account,
  Balance,
  ExchangeRate,
  AccountImages,
} from 'src/app/dashboard/models';

export interface ProductState {
  data: Account[] | Balance[] | AccountImages[] | ExchangeRate[];
  loading: boolean;
  error: any;
}

export interface AppState {
  accounts: ProductState;
  accountImages: ProductState;
  accountBalances: ProductState;
  excangeRates: ProductState;
}
