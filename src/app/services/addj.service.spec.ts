import { TestBed } from '@angular/core/testing';

import { AddjService } from './addj.service';

describe('AddjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddjService = TestBed.get(AddjService);
    expect(service).toBeTruthy();
  });
});
