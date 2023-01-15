import { Injectable } from '@angular/core';
import { indexOf } from 'lodash';
import { delay, map, Observable, of, startWith, tap } from 'rxjs';
import {
  AccountTypes,
  generateBalances,
  groupByAccountType,
} from '../../helpers';
import {
  AccountsMock,
  BalancesMock,
  ImagesMock,
} from '../../mocks/applications.mocks';
import { Account, AccountsByCategory, Balance, Image } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsRestService {
  constructor() {}

  public accounts$: Observable<Account[]> = this.getAccounts();
  public balances$: Observable<Balance[]> = this.getBalances();
  public images$: Observable<Image[]> = this.getImages();

  private getAccounts(): Observable<Account[]> {
    return of(AccountsMock).pipe(delay(1000));
  }

  private getBalances(): Observable<Balance[]> {
    return of(BalancesMock).pipe(delay(5000));
  }

  private getImages(): Observable<Image[]> {
    return of(ImagesMock).pipe(delay(6000));
  }
}
