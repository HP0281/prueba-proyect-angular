import { TestBed } from '@angular/core/testing';

import { ServiceRecoveredService } from './service-recovered.service';

describe('ServiceRecoveredService', () => {
  let service: ServiceRecoveredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRecoveredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
