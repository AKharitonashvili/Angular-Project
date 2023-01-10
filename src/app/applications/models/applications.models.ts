export interface Account {
  id: number;
  name: string;
  type: string;
  expirationMonth: Date;
  balance: number;
  image: string;
  iban: string;
  currency: string;
}
