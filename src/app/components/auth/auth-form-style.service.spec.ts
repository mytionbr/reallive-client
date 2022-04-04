import { TestBed } from '@angular/core/testing';

import { AuthFormStyleService } from './auth-form-style.service';

describe('AuthFormStyleService', () => {
  let service: AuthFormStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFormStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
