import { TestBed } from '@angular/core/testing';

import { Ng2MmbreakpointsService, BreakpointConfig } from './ng2-mmbreakpoints.service';

function mmCreate() {
  const breakpoints: BreakpointConfig = {
      xs: '(max-width: 767px)',
      sm: '(min-width: 768px) and (max-width: 991px)',
      md: '(min-width: 992px) and (max-width: 1199px)',
      lg: '(min-width: 1200px)'
  };
  return new Ng2MmbreakpointsService(breakpoints);
}

describe('Ng2MmbreakpointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [{ provide: Ng2MmbreakpointsService, useFactory: mmCreate }]}));

  it('should be created', () => {
    const service: Ng2MmbreakpointsService = TestBed.get(Ng2MmbreakpointsService);
    expect(service).toBeTruthy();
  });
  //Not much else to unit test as this is a browser/matchMedia dependant class
});
