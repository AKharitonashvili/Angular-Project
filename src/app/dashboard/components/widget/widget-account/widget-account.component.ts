import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Account } from 'src/app/dashboard/models';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-account.component.html',
  styleUrls: ['./widget-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetAccountComponent implements OnInit {
  @Input() account: Account;

  constructor() {}

  ngOnInit() {}
}
