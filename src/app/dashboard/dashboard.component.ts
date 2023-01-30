import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';
import {
  LoadAccountBalances,
  loadAccountImages,
  LoadAccounts,
  LoadExchangeRates,
  selectAccountImagesData,
  selectAccountsBalancesData,
  selectAccountsData,
  selectExchangeRatesData,
} from '../products/store';
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
  AccountImages,
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
    this.store.dispatch(LoadAccountBalances());
    this.store.dispatch(loadAccountImages());
    this.store.dispatch(LoadExchangeRates());
    this.store.pipe(tap(v=>console.log(v))).subscribe()

    this.accountsByCategory$ = combineLatest(
      this.store.select(selectAccountsData),
      this.store.select(selectAccountsBalancesData),
      this.store.select(selectAccountImagesData),
      this.store.select(selectExchangeRatesData)
    ).pipe(
      startWith([]),
      map(
        ([accounts, balances, images, exchangeRates]: [
          Account[],
          Balance[],
          AccountImages[],
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
