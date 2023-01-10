import { Injectable } from '@angular/core';
import { delay, map, Observable, of, startWith, tap } from 'rxjs';
import { AccountsMock } from '../../mocks/applications.mocks';
import { Account } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsRestService {
  constructor() {}

  public getAccounts(): Observable<{ credit: Account[]; debit: Account[] }> {
    return of(AccountsMock).pipe(
      delay(1000),
      startWith([]),
      map((accounts: Account[]) => {
        if (accounts?.length > 0) {
          const credit = accounts?.filter((a) => a.type === 'Credit');
          const debit = accounts?.filter((a) => a.type === 'Debit');
          return { credit, debit };
        }
        return {
          credit: [],
          debit: [],
        };
      }),
      tap((v) => console.log(v))
    );
  }
}
