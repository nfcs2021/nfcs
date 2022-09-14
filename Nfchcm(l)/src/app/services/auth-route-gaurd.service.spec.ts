import { TestBed } from '@angular/core/testing';

import { AuthRouteGaurdService } from './auth-route-gaurd.service';

describe('AuthRouteGaurdService', () => {
  let service: AuthRouteGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRouteGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
