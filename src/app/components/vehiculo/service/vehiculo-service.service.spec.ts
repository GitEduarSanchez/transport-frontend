import { TestBed } from '@angular/core/testing';

import { VehiculoServiceService } from './vehiculo-service.service';

describe('VehiculoServiceService', () => {
  let service: VehiculoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
