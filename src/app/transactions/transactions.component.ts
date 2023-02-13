import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Transaction } from './models';
import { TransactionsRestService } from './services/transactions-rest.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent implements OnInit {
  constructor(private rest: TransactionsRestService) {}

  public transactions$: Observable<Transaction[]>;

  ngOnInit() {
    this.transactions$ = this.rest.transactions$.pipe(
      tap((v) => console.log(v))
    );
  }
}
