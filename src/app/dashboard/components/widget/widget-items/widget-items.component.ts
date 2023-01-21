import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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

  public drop(event: CdkDragDrop<AccountsByCategory[]>): void {
    if (this.accountsByCategory.accounts?.length) {
      moveItemInArray(
        this.accountsByCategory.accounts,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
