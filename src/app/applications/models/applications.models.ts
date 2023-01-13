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

export interface AccountsByCategory {
  category: string;
  accounts: Account[];
}
