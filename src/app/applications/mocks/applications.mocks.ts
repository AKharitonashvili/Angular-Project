import { generateAccounts, generateBalances, generateIbans } from '../helpers';
import { Account, Balance } from '../models';

export const IbansArray: string[] = generateIbans(20);

export const AccountsMock: Account[] = generateAccounts(IbansArray);
export const BalancesMock: Balance[] = generateBalances(IbansArray);
