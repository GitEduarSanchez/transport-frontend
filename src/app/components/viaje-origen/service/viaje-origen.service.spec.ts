import { TestBed } from '@angular/core/testing';

import { ViajeOrigenService } from './viaje-origen.service';

describe('ViajeOrigenService', () => {
  let service: ViajeOrigenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajeOrigenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
