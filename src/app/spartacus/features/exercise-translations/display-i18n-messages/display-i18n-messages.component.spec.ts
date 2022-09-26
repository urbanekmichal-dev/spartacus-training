import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayI18nMessagesComponent } from './display-i18n-messages.component';

describe('DisplayI18nMessagesComponent', () => {
  let component: DisplayI18nMessagesComponent;
  let fixture: ComponentFixture<DisplayI18nMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayI18nMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayI18nMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
