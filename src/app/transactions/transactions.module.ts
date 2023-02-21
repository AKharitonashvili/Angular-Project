import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsRestService } from './services/transactions-rest.service';
import { SharedModule } from '../shared/shared.module';
import { TransactionsHistoryComponent } from './components/transactions-history/transactions-history.component';
import { TransactionHistoryHeaderComponent } from './components/transaction-history-header/transaction-history-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  TransactionsComponent,
  TransactionsHistoryComponent,
  TransactionHistoryHeaderComponent,
];

const routes: Routes = [{ path: '', component: TransactionsComponent }];

const services = [TransactionsRestService];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [...components],
  providers: [...services],
})
export class TransactionsModule {}
