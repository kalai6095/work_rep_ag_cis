import { TestBed } from '@angular/core/testing';

import { CwiseService } from './cwise.service';

describe('CwiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CwiseService = TestBed.get(CwiseService);
    expect(service).toBeTruthy();
  });
});
