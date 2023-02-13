import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { find } from 'lodash';
import { combineLatest, forkJoin, map, Observable, of, tap } from 'rxjs';
import { Account, Balance } from 'src/app/dashboard/models';
import {
  selectAccountsBalancesData,
  selectAccountsData,
} from 'src/app/products/store';
import { generateTransactions } from '../helpers/functions';
import { Transaction } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TransactionsRestService {
  constructor(private store: Store) {}

  public transactions$: Observable<Transaction[]> = this.getTransactions();

  private getTransactions(): Observable<Transaction[]> {
    return combineLatest(
      this.store.select(selectAccountsData),
      this.store.select(selectAccountsBalancesData)
    ).pipe(
      map(([accounts, balances]: [Account[], Balance[]]) =>
        accounts.map((account: Account) => ({
          ...account,
          ...find(
            balances,
            (balance: Balance) => balance.iban === account.iban
          ),
        }))
      ),
      map((accounts: Account[]) => generateTransactions(accounts))
    );
  }
}
