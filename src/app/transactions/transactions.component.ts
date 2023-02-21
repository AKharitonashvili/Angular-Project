import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { combineLatest, map, Observable, startWith, tap } from 'rxjs';
import { Transaction } from './models';
import { TransactionsRestService } from './services/transactions-rest.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent implements OnInit {
  public searchForm: FormGroup;

  public transactions$: Observable<Transaction[]>;

  constructor(private fb: FormBuilder, private rest: TransactionsRestService) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchInput: new FormControl(null),
    });

    this.transactions$ = combineLatest(
      this.rest.transactions$,
      this.searchForm.get('searchInput').valueChanges.pipe(startWith(null))
    ).pipe(
      map(([transactions, searchInput]: [Transaction[], string]) => {
        if (searchInput) {
          return transactions?.filter((transaction: Transaction) =>
            transaction.description
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          );
        }
        return transactions;
      }),
      tap((v) => console.log(v))
    );
  }
}
