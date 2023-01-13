import { Injectable } from '@angular/core';
import { delay, map, Observable, of, startWith, tap } from 'rxjs';
import {
  AccountsMock,
  DepositAccountsMock,
} from '../../mocks/applications.mocks';
import { Account, AccountsByCategory } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsRestService {
  constructor() {}

  public getAccounts(): Observable<AccountsByCategory[]> {
    return of(AccountsMock).pipe(
      delay(1000),
      startWith([]),
      map((accounts: Account[]) => {
        if (accounts?.length > 0) {
          // const credit = accounts?.filter((a) => a.type === 'Credit');
          // const debit = accounts?.filter((a) => a.type === 'Debit');
          return [
            {
              category: 'Credit',
              accounts: accounts?.filter((a) => a.type === 'Credit'),
            },
            {
              category: 'Debit',
              accounts: accounts?.filter((a) => a.type === 'Debit'),
            },
          ];
        }
        return [];
      })
    );
  }

  public getAdditionalAccounts(): Observable<AccountsByCategory[]> {
    return of(DepositAccountsMock).pipe(
      delay(1000),
      startWith([]),
      map((accounts: Account[]) => {
        if (accounts?.length > 0) {
          // const saving = accounts?.filter((a) => a.type === 'Saving');
          // const deposit = accounts?.filter((a) => a.type === 'Deposit');
          return [
            {
              category: 'Saving',
              accounts: accounts?.filter((a) => a.type === 'Saving'),
            },
            {
              category: 'Deposit',
              accounts: accounts?.filter((a) => a.type === 'Deposit'),
            },
          ];
        }
        return [];
      })
    );
  }
}
