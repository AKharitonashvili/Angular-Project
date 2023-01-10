import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsRestService } from './services/rest/applications-rest.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AccountComponent } from './components/account/account.component';

const components = [ApplicationsComponent, AccountComponent];
const services = [ApplicationsRestService];

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [...components],
  declarations: [...components],
  entryComponents: [...components],
  providers: [...services],
})
export class ApplicationsModule {}
