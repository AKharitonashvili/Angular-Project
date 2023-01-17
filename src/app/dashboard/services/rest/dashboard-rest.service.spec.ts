/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardRestService } from './dashboard-rest.service';

describe('Service: ApplicationsRest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardRestService],
    });
  });

  it('should ...', inject(
    [DashboardRestService],
    (service: DashboardRestService) => {
      expect(service).toBeTruthy();
    }
  ));
});
