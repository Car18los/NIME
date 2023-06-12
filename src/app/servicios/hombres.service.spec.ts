import { TestBed } from '@angular/core/testing';

import { HombresService } from './hombres.service';

describe('HombresService', () => {
  let service: HombresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HombresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
