import { generateAccounts } from '../helpers';
import { Account } from '../models';

export const AccountsMock: Account[] = generateAccounts();
export const DepositAccountsMock: Account[] = generateAccounts(true);
