import { TestBed } from '@angular/core/testing';

import { GsRequestService } from './gs-request.service';

describe('GsRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsRequestService = TestBed.get(GsRequestService);
    expect(service).toBeTruthy();
  });
});
