import { Component, OnInit } from '@angular/core';
import { startsWith } from 'lodash';
import {
  combineLatest,
  map,
  Observable,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { findAccountBalance, groupByAccountType } from './helpers';
import { IbansArray } from './mocks/applications.mocks';
import { Account, AccountsByCategory } from './models';
import { ApplicationsRestService } from './services/rest/applications-rest.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  public accountsByCategory$: Observable<AccountsByCategory[]>;
  public accounts: Account[];

  constructor(private rest: ApplicationsRestService) {}

  ngOnInit() {
    this.accountsByCategory$ = combineLatest(
      this.rest.getAccounts(),
      this.rest.getBalances()
    ).pipe(
      map(([accounts, balances]) => {
        console.log(accounts, balances);
        return accounts?.map((account: Account) => ({
          ...account,
          ...findAccountBalance(account, balances),
        }));
      }),
      map((accounts: Account[]) => groupByAccountType(accounts))
    );

    this.rest.getAccounts().pipe(
      startWith([]),
      tap((accounts: Account[]) => (this.accounts = accounts)),
      map((accounts: Account[]) => groupByAccountType(accounts)),
      switchMap(() => {
        return this.rest.getBalances().pipe(
          map((balances) =>
            this.accounts?.map((account: Account) => ({
              ...account,
              ...findAccountBalance(account, balances),
            }))
          )
        );
      }),
      map((accounts: Account[]) => groupByAccountType(accounts))
    );
  }
}
