import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AccountsByCategory } from 'src/app/dashboard/models';

@Component({
  selector: 'app-widget-items',
  templateUrl: './widget-items.component.html',
  styleUrls: ['./widget-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetItemsComponent implements OnInit {
  @Input() public accountsByCategory: AccountsByCategory;

  constructor() {}

  ngOnInit(): void {}
}
