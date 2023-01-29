import {
  generateAccounts,
  generateBalances,
  generateIbans,
  generateImages,
} from '../helpers';
import { Account, Balance, ExchangeRate, AccountImages } from '../models';

export const IbansArray: string[] = generateIbans(20);

export const AccountsMock: Account[] = generateAccounts(IbansArray);
export const BalancesMock: Balance[] = generateBalances(IbansArray);
export const ImagesMock: AccountImages[] = generateImages(IbansArray);

export const ExchangeRatesMock: ExchangeRate[] = [
  {
    currency: 'GEL',
    rate: 1,
  },
  {
    currency: 'EUR',
    rate: 0.35,
  },
  {
    currency: 'USD',
    rate: 0.38,
  },
];
