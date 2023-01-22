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
import { filter, tap } from 'rxjs';
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
    this.hideAndShowAll();

    this.widgetService.showAllItems$
      .pipe(
        filter((category: string) => category == this.index),
        tap(() => this.hideAndShowAll())
      )
      .subscribe();
  }

  private hideAndShowAll(): void {
    this.filteredAccountsByCategory = {
      ...this.accountsByCategory,
      accounts: this.accounts(),
    };
  }

  private accounts(): Account[] {
    return this.isMoreThanFour()
      ? this.accountsByCategory.accounts?.slice(0, 4)
      : this.accountsByCategory.accounts;
  }

  private isMoreThanFour(): boolean {
    return (
      !this.filteredAccountsByCategory ||
      this.filteredAccountsByCategory?.accounts?.length > 4
    );
  }
}
