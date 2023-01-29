import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import {
  AccountsMock,
  BalancesMock,
  ExchangeRatesMock,
  ImagesMock,
} from '../../mocks/applications.mocks';
import { Account, Balance, ExchangeRate, AccountImages } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class DashboardRestService {
  constructor() {}

  public accounts$: Observable<Account[]> = this.getAccounts();
  public balances$: Observable<Balance[]> = this.getBalances();
  public images$: Observable<AccountImages[]> = this.getImages();
  public exchangeRates$: Observable<ExchangeRate[]> = this.getExchangeRates();

  private getAccounts(): Observable<Account[]> {
    return of(AccountsMock).pipe(delay(1000));
  }

  private getBalances(): Observable<Balance[]> {
    return of(BalancesMock).pipe(delay(5000));
  }

  private getImages(): Observable<AccountImages[]> {
    return of(ImagesMock).pipe(delay(6000));
  }

  private getExchangeRates(): Observable<ExchangeRate[]> {
    return of(ExchangeRatesMock).pipe(delay(5000));
  }
}
