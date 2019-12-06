import { TestBed } from '@angular/core/testing';

import { RoutingInterceptorService } from './routing-interceptor.service';

describe('RoutingInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutingInterceptorService = TestBed.get(RoutingInterceptorService);
    expect(service).toBeTruthy();
  });
});
