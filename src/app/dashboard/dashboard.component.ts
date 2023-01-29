import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';
import { LoadAccounts, selectAccountsData } from '../products/store';
import {
  findAccountBalance,
  findAccountImage,
  groupByAccountType,
} from './helpers';
import {
  Account,
  AccountsByCategory,
  Balance,
  ExchangeRate,
  Image,
} from './models';
import { DashboardRestService } from './services/rest/dashboard-rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public accountsByCategory$: Observable<AccountsByCategory[]>;
  public accountsByCategory: AccountsByCategory[];
  public accounts: Account[];
  public count$: Observable<number>;

  constructor(private rest: DashboardRestService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(LoadAccounts());

    this.accountsByCategory$ = combineLatest(
      this.store.select(selectAccountsData),
      this.rest.balances$.pipe(startWith([])),
      this.rest.images$.pipe(startWith([])),
      this.rest.exchangeRates$.pipe(startWith([]))
    ).pipe(
      startWith([]),
      map(
        ([accounts, balances, images, exchangeRates]: [
          Account[],
          Balance[],
          Image[],
          ExchangeRate[]
        ]) =>
          accounts?.map((account: Account) => ({
            ...account,
            ...findAccountBalance(account, balances, exchangeRates),
            ...findAccountImage(account, images),
          }))
      ),
      map((accounts: Account[]) => groupByAccountType(accounts)),
      tap(
        (accountsByCategory) => (this.accountsByCategory = accountsByCategory)
      )
    );
  }
}
