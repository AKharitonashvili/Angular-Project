import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Transaction } from '../../models';

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsHistoryComponent {
  @Input() public transactions: Transaction[];
  @Input() public form: FormGroup;
}
