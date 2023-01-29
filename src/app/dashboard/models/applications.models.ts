export interface AccountsByCategory {
  category: string;
  accounts: Account[];
}

export interface Account extends Balance, Credit, AccountImages {
  id: number;
  iban: string;
  name: string;
  type: string;
  expirationDate: Date;
  cards?: Account[];
  actions?: Action[];
}

export interface Balance {
  balance?: number;
  balanceInGel?: number;
  currency?: string;
  iban?: string;
}

export interface Credit {
  creditLimit?: number;
  creditLimitCurrency?: string;
  creditLimitDate?: Date;
}

export interface AccountImages {
  image?: string;
  iban?: string;
}

export interface Action {
  renewal?: boolean;
  transferTo?: boolean;
  transferFrom?: boolean;
}

export interface ExchangeRate {
  currency: string;
  rate: number;
}
