import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlViajeProductoComponent } from './control-viaje-producto.component';

describe('ControlViajeProductoComponent', () => {
  let component: ControlViajeProductoComponent;
  let fixture: ComponentFixture<ControlViajeProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlViajeProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlViajeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
