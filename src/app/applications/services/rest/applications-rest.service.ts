import { Injectable } from '@angular/core';
import { indexOf } from 'lodash';
import { delay, map, Observable, of, startWith, tap } from 'rxjs';
import {
  AccountTypes,
  generateBalances,
  groupByAccountType,
} from '../../helpers';
import { AccountsMock, BalancesMock } from '../../mocks/applications.mocks';
import { Account, AccountsByCategory, Balance } from '../../models';

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

  public getBalances(): Observable<Balance[]> {
    return of(BalancesMock).pipe(delay(5000));
  }
}
