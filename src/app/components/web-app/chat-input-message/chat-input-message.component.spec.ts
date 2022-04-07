import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInputMessageComponent } from './chat-input-message.component';

describe('ChatInputMessageComponent', () => {
  let component: ChatInputMessageComponent;
  let fixture: ComponentFixture<ChatInputMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatInputMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInputMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
