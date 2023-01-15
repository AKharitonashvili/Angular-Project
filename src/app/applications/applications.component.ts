import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, switchMap, tap } from 'rxjs';
import { Account, AccountsByCategory } from './models';
import { ApplicationsRestService } from './services/rest/applications-rest.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  public cards$: Observable<any>;
  public deposits$: Observable<any>;

  public accounts$: Observable<AccountsByCategory[]>;
  public cards: AccountsByCategory[] = [];
  public savings: AccountsByCategory[] = [];

  constructor(private rest: ApplicationsRestService) {}

  ngOnInit() {
    this.accounts$ = this.rest.getAccounts().pipe(
      switchMap((accounts: Account[]) => {
        return combineLatest(this.rest.getCards(), this.rest.getSavings()).pipe(
          map(([cards, savings]) => {
            this.cards = cards;
            this.savings = savings;
            return [...cards, ...savings];
          })
        );
      })
    );
  }
}
