import { TestBed } from '@angular/core/testing';

import { FwiseService } from './fwise.service';

describe('FwiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FwiseService = TestBed.get(FwiseService);
    expect(service).toBeTruthy();
  });
});
