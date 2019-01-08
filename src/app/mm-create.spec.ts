import { TestBed } from '@angular/core/testing';

import { Ng2MmbreakpointsService } from 'ng2-mmbreakpoints';
import { mmCreate } from './mm-create';

describe('MmCreate', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [{ provide: Ng2MmbreakpointsService, useFactory: mmCreate }]}));

  it('should be created', () => {
    const service: Ng2MmbreakpointsService = TestBed.get(Ng2MmbreakpointsService);
    expect(service).toBeTruthy();
  });
});
