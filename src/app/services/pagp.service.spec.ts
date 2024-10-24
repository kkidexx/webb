import { TestBed } from '@angular/core/testing';

import { PagpService } from './pagp.service';

describe('PagpService', () => {
  let service: PagpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
