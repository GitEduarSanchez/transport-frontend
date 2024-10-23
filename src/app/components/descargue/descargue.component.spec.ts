import { ComponentFixture, TestBed } from '@angular/core/testing';

import { descargueComponent } from './descargue.component';

describe('descargueComponent', () => {
  let component: descargueComponent;
  let fixture: ComponentFixture<descargueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [descargueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(descargueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
