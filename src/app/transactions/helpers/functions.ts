import { randomDate, randomInt } from 'src/app/dashboard/helpers';
import { Account } from 'src/app/dashboard/models';
import { Cattegories } from '../constants/constants.constants';
import { Transaction, TransactionStatus } from '../models';

const randomSentence = require('random-sentence');

export function generateTransaction(account: Account): Transaction {
  const amount = randomInt(-10000, 10000);
  return {
    id: randomInt(),
    iban: account.iban,
    currency: account.currency,
    amount,
    category: generateCategory(),
    description: generateDescription(),
    date: randomDate(),
    status: generateTransactionStatus(amount > 0),
  };
}

export function generateTransactions(accounts: Account[]): Transaction[] {
  const transactions: Transaction[] = [];
  accounts.forEach((account: Account) => {
    for (let i = 0; i < randomInt(1, 5); i++) {
      transactions.push(generateTransaction(account));
    }
  });
  return transactions;
}

export function generateDescription(): string {
  return randomSentence({ min: 4, max: 9 });
}

export function generateCategory(): string {
  return Cattegories[randomInt(0, Cattegories.length - 1)];
}

export function generateTransactionStatus(
  isPositive: boolean
): TransactionStatus {
  const statuses: string[] = isPositive
    ? ['positive']
    : ['negative', 'pending'];
  return statuses[randomInt(0, statuses.length - 1)] as TransactionStatus;
}
