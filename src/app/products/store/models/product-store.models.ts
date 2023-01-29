import {
  Account,
  Balance,
  ExchangeRate,
  Image,
} from 'src/app/dashboard/models';

export interface ProductState {
  data: Account[] | Balance[] | Image[] | ExchangeRate[];
  loading: boolean;
  error: any;
}

export interface AppState {
  accounts: ProductState;
  accountImages: ProductState;
  accountBalances: ProductState;
  excangeRates: ProductState;
}
