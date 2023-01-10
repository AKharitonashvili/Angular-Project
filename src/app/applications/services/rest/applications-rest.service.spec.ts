/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApplicationsRestService } from './applications-rest.service';

describe('Service: ApplicationsRest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationsRestService]
    });
  });

  it('should ...', inject([ApplicationsRestService], (service: ApplicationsRestService) => {
    expect(service).toBeTruthy();
  }));
});
