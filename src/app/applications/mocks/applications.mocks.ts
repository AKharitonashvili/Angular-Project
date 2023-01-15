import { generateAccounts } from '../helpers';
import { Account } from '../models';

export const AccountsMock: Account[] = generateAccounts(20);
export const CardsMock: Account[] = generateAccounts(10);
export const SavingMock: Account[] = generateAccounts(10);
