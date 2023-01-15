export interface AccountsByCategory {
  category: string;
  accounts: Account[];
}

export interface Account extends Balance, Credit {
  id: number;
  iban: string;
  name: string;
  type: string;
  expirationDate: Date;
  image: string;
  cards?: Account[];
  actions?: Action[];
}

export interface Balance {
  balance?: number;
  currency?: string;
  iban?: string;
}

export interface Credit {
  creditLimit?: number;
  creditLimitCurrency?: string;
  creditLimitDate?: Date;
}

export interface Action {
  renewal?: boolean;
  transferTo?: boolean;
  transferFrom?: boolean;
}
