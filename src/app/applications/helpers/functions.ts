import { Account } from '../models';
import { AccountTypes, Currencies, Names, SurNames } from './constants';

export function generateAcccount(): Account {
  return {
    id: randomInt(),
    name: randomName(),
    type: randomAccountType(),
    expirationDate: randomDate(),
    balance: randomInt(0, 10000),
    image: randomImageUrl(),
    iban: randomIban(),
    currency: randomCurrency(),
  };
}

export function generateAccounts(count: number): Account[] {
  const accounts: Account[] = [];

  for (let i = 0; i < count; i++) {
    accounts.push(generateAcccount());
  }

  return accounts;
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
  return AccountTypes[Math.floor(Math.random() * AccountTypes.length)];
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
