import { TestBed } from '@angular/core/testing';

import { ActiveDrawerLeftService } from './active-drawer-left.service';

describe('ActiveDrawerLeftService', () => {
  let service: ActiveDrawerLeftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveDrawerLeftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
