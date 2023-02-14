import { randomDate, randomInt } from 'src/app/dashboard/helpers';
import { Account } from 'src/app/dashboard/models';
import { Cattegories } from '../constants/constants.constants';
import { Transaction, TransactionStatus } from '../models';

var randomSentence = require('random-sentence');

export function generateTransaction(account: Account): Transaction {
  return {
    id: randomInt(),
    iban: account.iban,
    currency: account.currency,
    amount: randomInt(0, 10000),
    category: generateCategory(),
    description: generateDescription(),
    date: randomDate(),
    status: generateTransactionStatus(),
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

export function generateTransactionStatus(): TransactionStatus {
  const statuses: string[] = ['positive', 'negative', 'pending'];
  return statuses[randomInt(0, statuses.length - 1)] as TransactionStatus;
}
