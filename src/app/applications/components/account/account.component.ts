import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { randomImageUrl } from '../../helpers';
import { Account } from '../../models';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnInit {
  @Input() public accounts: Account[];

  constructor() {}

  ngOnInit() {}

  public randomImageUrl(acc: Account): void {
    acc.image = randomImageUrl();
  }
}
