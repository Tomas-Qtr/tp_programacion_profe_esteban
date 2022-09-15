import { TestBed } from '@angular/core/testing';

import { CardNewService } from './card-new.service';

describe('CardNewService', () => {
  let service: CardNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
