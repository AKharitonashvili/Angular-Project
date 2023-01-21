import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Account, AccountsByCategory } from 'src/app/dashboard/models';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-widget-info',
  templateUrl: './widget-info.component.html',
  styleUrls: ['./widget-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetInfoComponent implements OnInit {
  @Input() public accountsByCategory: AccountsByCategory;
  @Input() public index: string;

  constructor(private widgetService: WidgetService) {}

  ngOnInit(): void {}

  public hideAndShow(): void {
    this.widgetService.showAllItems$.next(this.index);
  }
}
