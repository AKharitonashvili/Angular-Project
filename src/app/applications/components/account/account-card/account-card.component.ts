import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Account } from 'src/app/applications/models';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCardComponent implements OnInit {
  @Input() account: Account;

  constructor() {}

  ngOnInit() {}

  public randomImageUrl(acc: Account): void {
    // acc.image = randomImageUrl();
  }
}
