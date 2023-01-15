import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsRestService } from './services/rest/applications-rest.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AccountComponent } from './components/account/account.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AccountCardComponent } from './components/account/account-card/account-card.component';
import { SharedModule } from './shared/shared.module';

const modules = [SharedModule];

const components = [
  ApplicationsComponent,
  AccountComponent,
  AccountCardComponent,
];
const services = [ApplicationsRestService];

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ...modules,
  ],
  exports: [...components],
  declarations: [...components],
  entryComponents: [...components],
  providers: [...services],
})
export class ApplicationsModule {}
