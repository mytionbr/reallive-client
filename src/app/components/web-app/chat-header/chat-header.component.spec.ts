import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChatHeaderComponent } from './chat-header.component';

describe('ChatHeaderComponent', () => {
  let component: ChatHeaderComponent;
  let fixture: ComponentFixture<ChatHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('Should have title from header component', () => {
    const newTitle = 'new title'
    component.title = newTitle;
    fixture.detectChanges();
    const elementTitle = fixture.debugElement
      .query(By.css('.title'));
      expect((elementTitle.nativeElement as HTMLHeadingElement).textContent)
      .toEqual(newTitle);
  })

});
