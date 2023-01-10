import { Account } from '../models';
import { AccountTypes, Currencies } from './constants';

export function generateAcccount(): Account {
  return {
    id: randomInt(),
    name: randomString(),
    type: randomAccountType(),
    expirationMonth: randomDate(),
    balance: randomInt(0, 10000),
    image: randomImageUrl(),
    iban: randomIban(),
    currency: randomCurrency(),
  };
}

export function generateAccounts(): Account[] {
  const accounts: Account[] = [];

  for (let i = 0; i < 10; i++) {
    accounts.push(generateAcccount());
  }

  return accounts;
}

export function randomDate(
  start: number = 0,
  end: number = 30,
  startHour: number = 0,
  endHour: number = 23
): Date {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  return date;
}

export function randomInt(min: number = 0, max: number = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomString(length: number = 10): string {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
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
