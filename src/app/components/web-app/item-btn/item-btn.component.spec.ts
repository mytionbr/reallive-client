import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBtnComponent } from './item-btn.component';

describe('ItemBtnComponent', () => {
  let component: ItemBtnComponent;
  let fixture: ComponentFixture<ItemBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
