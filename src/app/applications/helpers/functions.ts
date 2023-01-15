import * as _ from 'lodash';
import { AccountsMock } from '../mocks/applications.mocks';
import { Account, AccountsByCategory, Balance } from '../models';
import { AccountTypes, Currencies, Names, SurNames } from './constants';

export function generateAcccount(iban: string): Account {
  return {
    id: randomInt(),
    iban: iban,
    name: randomName(),
    type: randomAccountType(),
    expirationDate: randomDate(),
    image: randomImageUrl(),
  };
}

export function generateBalance(iban: string): Balance {
  return {
    balance: randomInt(0, 10000),
    currency: randomCurrency(),
    iban,
  };
}

export function generateAccounts(ibansArray: string[]): Account[] {
  const accounts: Account[] = [];
  for (let i = 0; i < ibansArray.length; i++) {
    accounts.push(generateAcccount(ibansArray[i]));
  }
  return accounts;
}

export function generateIbans(count: number): string[] {
  const ibans: string[] = [];
  for (let i = 0; i < count; i++) {
    ibans.push(randomIban());
  }
  return ibans;
}

export function generateBalances(ibansArray: string[]): Balance[] {
  const balances: Balance[] = [];
  for (let i = 0; i < ibansArray.length; i++) {
    balances.push(generateBalance(ibansArray[i]));
  }
  return balances;
}

function randomDate(
  start: Date = new Date(1998, 0, 1),
  end: Date = new Date()
): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export function randomInt(min: number = 0, max: number = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomName(): string {
  return `${Names[Math.floor(Math.random() * Names.length)]} ${
    SurNames[Math.floor(Math.random() * SurNames.length)]
  }`;
}

export function randomBoolean(): boolean {
  return Math.random() > 0.5;
}

export function randomAccountType(): string {
  const accountTypes = Object.keys(AccountTypes);
  return accountTypes[Math.floor(Math.random() * accountTypes.length)];
}

export function randomImageUrl(): string {
  return `https://picsum.photos/id/${randomInt()}/60`;
}

export function randomIban(): string {
  var ktnr, iban;
  var pruef, pruef2;
  ktnr = Math.round(Math.random() * 8999999) + 1000000;
  pruef = ktnr * 1000000 + 43;
  pruef2 = pruef % 97;
  pruef = 98 - pruef2;
  if (pruef > 9) {
    iban = 'GE';
  } else {
    iban = 'GE0';
  }
  iban = iban + pruef + '70050000' + '000' + ktnr;
  return iban;
}

export function randomCurrency(): string {
  return Currencies[Math.floor(Math.random() * Currencies.length)];
}

export function groupByAccountType(accounts: Account[]): AccountsByCategory[] {
  const grouped = _.groupBy(accounts, 'type');
  return Object.keys(grouped).map((type: string) => {
    return { category: type, accounts: grouped[type] };
  });
}

export function findAccountBalance(
  account: Account,
  balances: Balance[]
): Balance {
  return balances.find((balance) => balance.iban === account.iban);
}
