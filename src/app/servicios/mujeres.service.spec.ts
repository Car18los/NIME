import { TestBed } from '@angular/core/testing';

import { MujeresService } from './mujeres.service';

describe('MujeresService', () => {
  let service: MujeresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MujeresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
