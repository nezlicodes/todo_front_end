import { TestBed } from '@angular/core/testing';

import { SingleResolverService } from './single-resolver.service';

describe('SingleResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleResolverService = TestBed.get(SingleResolverService);
    expect(service).toBeTruthy();
  });
});
