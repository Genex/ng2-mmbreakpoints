import { TestBed } from '@angular/core/testing';

import { MatchmediaService } from 'ng2-mmbreakpoints';
import { mmCreate } from './mm-create';

describe('MmCreate', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [{ provide: MatchmediaService, useFactory: mmCreate }]}));

  it('should be created', () => {
    const service: MatchmediaService = TestBed.get(MatchmediaService);
    expect(service).toBeTruthy();
  });
});
