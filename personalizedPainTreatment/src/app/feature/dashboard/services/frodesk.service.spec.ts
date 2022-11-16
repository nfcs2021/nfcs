import { TestBed } from '@angular/core/testing';

import { FrodeskService } from './frodesk.service';

describe('FrodeskService', () => {
  let service: FrodeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrodeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
