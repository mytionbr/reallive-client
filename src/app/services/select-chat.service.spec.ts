import { TestBed } from '@angular/core/testing';

import { SelectChatService } from './select-chat.service';

describe('SelectChatService', () => {
  let service: SelectChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
