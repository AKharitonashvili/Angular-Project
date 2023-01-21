import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { filter } from 'rxjs';
import { Account, AccountsByCategory } from '../../models';
import { WidgetService } from './services/widget.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent implements OnInit {
  @Input() public accountsByCategory: AccountsByCategory;
  @Input() public index: string;
  public filteredAccountsByCategory: AccountsByCategory;

  constructor(private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.filteredAccountsByCategory = {
      ...this.accountsByCategory,
      accounts: this.accountsByCategory.accounts?.slice(0, 4),
    };

    this.widgetService.showAllItems$
      .pipe(filter((category: string) => category == this.index))
      .subscribe((v) => console.log({ index: this.index, v }));
  }
}
