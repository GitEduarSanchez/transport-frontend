import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlViajeComponent } from './control-viaje.component';

describe('ControlViajeComponent', () => {
  let component: ControlViajeComponent;
  let fixture: ComponentFixture<ControlViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlViajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
