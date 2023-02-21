import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction-history-header',
  templateUrl: './transaction-history-header.component.html',
  styleUrls: ['./transaction-history-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionHistoryHeaderComponent {
  @Input() public form: FormGroup;
}
