import { TestBed } from '@angular/core/testing';

import { ControlViajeService } from './control-viaje.service';

describe('ControlViajeService', () => {
  let service: ControlViajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlViajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
