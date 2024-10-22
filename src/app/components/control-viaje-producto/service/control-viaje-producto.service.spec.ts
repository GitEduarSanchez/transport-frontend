import { TestBed } from '@angular/core/testing';

import { ControlViajeProductoService } from './control-viaje-producto.service';

describe('ControlViajeProductoService', () => {
  let service: ControlViajeProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlViajeProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
