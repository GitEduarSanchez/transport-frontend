import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVehiculoComponent } from './tipo-vehiculo.component';

describe('TipoVehiculoComponent', () => {
  let component: TipoVehiculoComponent;
  let fixture: ComponentFixture<TipoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoVehiculoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
