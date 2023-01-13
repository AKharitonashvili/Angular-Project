import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { randomImageUrl } from '../../helpers';
import { Account, AccountsByCategory } from '../../models';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnInit {
  @Input() public accountsByCategory: AccountsByCategory[];

  constructor() {}

  ngOnInit(): void {}
}
