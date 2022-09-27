import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStorefrontComponent } from './custom-storefront.component';

describe('CustomStorefrontComponent', () => {
  let component: CustomStorefrontComponent;
  let fixture: ComponentFixture<CustomStorefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStorefrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStorefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
