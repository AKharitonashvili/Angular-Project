import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import {
  findAccountBalance,
  findAccountImage,
  groupByAccountType,
} from './helpers';
import { Account, AccountsByCategory, Balance, Image } from './models';
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
      this.rest.accounts$.pipe(startWith([])),
      this.rest.balances$.pipe(startWith([])),
      this.rest.images$.pipe(startWith([]))
    ).pipe(
      startWith([]),
      map(([accounts, balances, images]: [Account[], Balance[], Image[]]) =>
        accounts?.map((account: Account) => ({
          ...account,
          ...findAccountBalance(account, balances),
          ...findAccountImage(account, images),
        }))
      ),
      map((accounts: Account[]) => groupByAccountType(accounts))
    );
  }
}
