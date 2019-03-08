import { TestBed } from '@angular/core/testing';

import { FashionWeekService } from './fashion-week.service';

describe('FashionWeekService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FashionWeekService = TestBed.get(FashionWeekService);
    expect(service).toBeTruthy();
  });
});
