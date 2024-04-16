import { TestBed } from '@angular/core/testing';

import { GlobalApiUrlService } from './global-api-url.service';

describe('GlobalApiUrlService', () => {
  let service: GlobalApiUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalApiUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
