import { ComponentFixture, TestBed } from '@angular/core/testing';

import { trailerComponent } from './trailer.component';

describe('trailerComponent', () => {
  let component: trailerComponent;
  let fixture: ComponentFixture<trailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [trailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(trailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
