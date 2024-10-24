import { ComponentFixture, TestBed } from '@angular/core/testing';

import { controlViajeProductoComponent} from './control-viaje-producto.component';

describe('ControlViajeProductoComponent', () => {
  let component: controlViajeProductoComponent;
  let fixture: ComponentFixture<controlViajeProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [controlViajeProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(controlViajeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
