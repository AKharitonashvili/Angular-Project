import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { cloneDeep, startsWith } from 'lodash';
import {
  combineLatest,
  forkJoin,
  map,
  Observable,
  startWith,
  switchMap,
  tap,
  zip,
} from 'rxjs';
import { findAccountBalance, groupByAccountType } from './helpers';
import { IbansArray } from './mocks/applications.mocks';
import { Account, AccountsByCategory, Balance } from './models';
import { ApplicationsRestService } from './services/rest/applications-rest.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  public accountsByCategory$: Observable<AccountsByCategory[]>;
  public accounts: Account[];

  constructor(
    private rest: ApplicationsRestService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.accountsByCategory$ = combineLatest(
      this.rest.accounts$.pipe(startWith([])),
      this.rest.balances$.pipe(startWith([]))
    ).pipe(
      startWith([]),
      map(([accounts, balances]: [Account[], Balance[]]) => {
        console.log({ accounts, balances });
        return accounts?.map((account: Account) => ({
          ...account,
          ...findAccountBalance(account, balances),
        }));
      }),
      map((accounts: Account[]) => groupByAccountType(accounts))
    );
  }
}
