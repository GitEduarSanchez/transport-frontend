import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptoComponent } from './concepto.component';

describe('ConceptoComponent', () => {
  let component: ConceptoComponent;
  let fixture: ComponentFixture<ConceptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
