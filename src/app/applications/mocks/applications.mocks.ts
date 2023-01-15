import {
  generateAccounts,
  generateBalances,
  generateIbans,
  generateImages,
} from '../helpers';
import { Account, Balance, Image } from '../models';

export const IbansArray: string[] = generateIbans(20);

export const AccountsMock: Account[] = generateAccounts(IbansArray);
export const BalancesMock: Balance[] = generateBalances(IbansArray);
export const ImagesMock: Image[] = generateImages(IbansArray);
