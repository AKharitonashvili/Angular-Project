import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRestService } from './services/rest/dashboard-rest.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { WidgetComponent } from './components/widget/widget.component';
import { AccountCardComponent } from './components/widget/account-card/account-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WidgetItemsComponent } from './components/widget/widget-items/widget-items.component';
import { WidgetInfoComponent } from './components/widget/widget-info/widget-info.component';

const modules = [SharedModule];
const materialModules = [
  DragDropModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
];
const components = [
  DashboardComponent,
  WidgetComponent,
  AccountCardComponent,
  WidgetItemsComponent,
  WidgetInfoComponent,
];
const services = [DashboardRestService];

@NgModule({
  imports: [CommonModule, ...materialModules, ...modules],
  exports: [...components],
  declarations: [...components],
  entryComponents: [...components],
  providers: [...services],
})
export class DashboardModule {}
