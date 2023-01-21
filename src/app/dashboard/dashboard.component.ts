import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';
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

  constructor(private rest: DashboardRestService) {}

  ngOnInit(): void {
    this.accountsByCategory$ = combineLatest(
      this.rest.accounts$.pipe(startWith([])),
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

  public drop(event: CdkDragDrop<AccountsByCategory[]>): void {
    if (this.accountsByCategory?.length) {
      moveItemInArray(
        this.accountsByCategory,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
