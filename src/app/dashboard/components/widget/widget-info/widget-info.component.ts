import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AccountsByCategory } from 'src/app/dashboard/models';

@Component({
  selector: 'app-widget-info',
  templateUrl: './widget-info.component.html',
  styleUrls: ['./widget-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetInfoComponent implements OnInit {
  @Input() public accountsByCategory: AccountsByCategory;

  constructor() {}

  ngOnInit(): void {}
}
