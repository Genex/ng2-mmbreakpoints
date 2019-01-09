import { TestBed } from '@angular/core/testing';

import { MatchmediaService, BreakpointConfig } from './ng2-mmbreakpoints.service';

function mmCreate() {
  const breakpoints: BreakpointConfig = {
      xs: '(max-width: 767px)',
      sm: '(min-width: 768px) and (max-width: 991px)',
      md: '(min-width: 992px) and (max-width: 1199px)',
      lg: '(min-width: 1200px)'
  };
  return new MatchmediaService(breakpoints);
}

describe('MatchmediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [{ provide: MatchmediaService, useFactory: mmCreate }]}));

  it('should be created', () => {
    const service: MatchmediaService = TestBed.get(MatchmediaService);
    expect(service).toBeTruthy();
  });
  //Not much else to unit test as this is a browser/matchMedia dependant class
});
