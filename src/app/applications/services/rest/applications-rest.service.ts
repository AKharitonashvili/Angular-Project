import { Injectable } from '@angular/core';
import { delay, map, Observable, of, startWith, tap } from 'rxjs';
import {
  AccountsMock,
  CardsMock,
  SavingMock,
} from '../../mocks/applications.mocks';
import { Account, AccountsByCategory } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsRestService {
  constructor() {}

  public getAccounts(): Observable<Account[]> {
    return of(AccountsMock).pipe(
      delay(1000),
      map((accounts: Account[]) => {
        return accounts;
      })
    );
  }

  public getCards(): Observable<AccountsByCategory[]> {
    return of(CardsMock).pipe(
      delay(1000),
      startWith([]),
      map((accounts: Account[]) => {
        if (accounts?.length > 0) {
          return [
            {
              category: 'Credit',
              accounts: accounts?.filter((a: Account) => a.type === 'Credit'),
            },
            {
              category: 'Debit',
              accounts: accounts?.filter((a: Account) => a.type === 'Debit'),
            },
          ];
        }
        return [];
      })
    );
  }

  public getSavings(): Observable<AccountsByCategory[]> {
    return of(SavingMock).pipe(
      delay(1000),
      startWith([]),
      map((accounts: Account[]) => {
        if (accounts?.length > 0) {
          return [
            {
              category: 'Saving',
              accounts: accounts?.filter((a: Account) => a.type === 'Saving'),
            },
            {
              category: 'Deposit',
              accounts: accounts?.filter((a: Account) => a.type === 'Deposit'),
            },
          ];
        }
        return [];
      })
    );
  }
}
