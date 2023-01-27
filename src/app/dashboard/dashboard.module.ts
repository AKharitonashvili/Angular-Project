import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRestService } from './services/rest/dashboard-rest.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DashboardSharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetAccountComponent } from './components/widget/widget-account/widget-account.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WidgetItemsComponent } from './components/widget/widget-items/widget-items.component';
import { WidgetInfoComponent } from './components/widget/widget-info/widget-info.component';
import { WidgetService } from './components/widget/services/widget.service';
import { SharedModule } from '../shared/shared.module';
import { BookListModule } from '../book-list/book-list.module';

const modules = [DashboardSharedModule, SharedModule,BookListModule];
const materialModules = [
  DragDropModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
];
const components = [
  DashboardComponent,
  WidgetComponent,
  WidgetAccountComponent,
  WidgetItemsComponent,
  WidgetInfoComponent,
];
const services = [DashboardRestService, WidgetService];

@NgModule({
  imports: [CommonModule, ...materialModules, ...modules],
  exports: [...components],
  declarations: [...components],
  entryComponents: [...components],
  providers: [...services],
})
export class DashboardModule {}
