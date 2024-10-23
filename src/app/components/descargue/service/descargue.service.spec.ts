import { TestBed } from '@angular/core/testing';
import { descargueService } from './descargue.service';

describe('descargueService', () => {
  let service: descargueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(descargueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
