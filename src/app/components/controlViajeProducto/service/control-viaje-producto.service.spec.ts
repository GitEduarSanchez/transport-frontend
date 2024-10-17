import { TestBed } from '@angular/core/testing';

import { controlViajeProductoService } from './control-viaje-producto.service';

describe('ControlViajeProductoService', () => {
  let service: controlViajeProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(controlViajeProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
