import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeOrigenComponent } from './viaje-origen.component';

describe('ViajeOrigenComponent', () => {
  let component: ViajeOrigenComponent;
  let fixture: ComponentFixture<ViajeOrigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViajeOrigenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajeOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
