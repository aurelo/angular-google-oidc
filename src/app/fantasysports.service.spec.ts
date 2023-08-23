import { TestBed } from '@angular/core/testing';

import { FantasysportsService } from './fantasysports.service';

describe('FantasysportsService', () => {
  let service: FantasysportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantasysportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
