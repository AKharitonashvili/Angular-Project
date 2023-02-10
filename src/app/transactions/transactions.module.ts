import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { RouterModule, Routes } from '@angular/router';

const components = [TransactionsComponent];

const routes: Routes = [{ path: '', component: TransactionsComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [...components],
})
export class TransactionsModule {}
