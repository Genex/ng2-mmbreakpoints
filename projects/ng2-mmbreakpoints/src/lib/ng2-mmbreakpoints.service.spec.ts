import { TestBed } from '@angular/core/testing';

import { Ng2MmbreakpointsService } from './ng2-mmbreakpoints.service';

describe('Ng2MmbreakpointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng2MmbreakpointsService = TestBed.get(Ng2MmbreakpointsService);
    expect(service).toBeTruthy();
  });
});
