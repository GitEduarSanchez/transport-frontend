import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorComponent } from './conductor.component';

describe('ConductorComponent', () => {
  let component: ConductorComponent;
  let fixture: ComponentFixture<ConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConductorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
