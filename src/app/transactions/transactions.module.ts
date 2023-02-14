import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsRestService } from './services/transactions-rest.service';
import { SharedModule } from '../shared/shared.module';

const components = [TransactionsComponent];

const routes: Routes = [{ path: '', component: TransactionsComponent }];

const services = [TransactionsRestService];

@NgModule({
  imports: [CommonModule,SharedModule, RouterModule.forChild(routes)],
  declarations: [...components],
  providers: [...services],
})
export class TransactionsModule {}
