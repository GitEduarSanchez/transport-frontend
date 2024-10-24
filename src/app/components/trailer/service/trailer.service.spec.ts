import { TestBed } from '@angular/core/testing';

import { trailerService } from './trailer.service';

describe('trailerService', () => {
  let service: trailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(trailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
