export interface Transaction {
  id: number;
  iban: string;
  amount: number;
  currency: string;
  category: string;
  description: string;
  date:Date;
}
