import { TestBed } from '@angular/core/testing';

import { SourcesStoreService } from './sources-store.service';

describe('SourcesStoreService', () => {
  let service: SourcesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourcesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
