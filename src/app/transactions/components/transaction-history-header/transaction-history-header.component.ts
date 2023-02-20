import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history-header',
  templateUrl: './transaction-history-header.component.html',
  styleUrls: ['./transaction-history-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionHistoryHeaderComponent {}
