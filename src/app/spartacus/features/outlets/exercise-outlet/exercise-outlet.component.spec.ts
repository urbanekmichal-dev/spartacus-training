import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseOutletComponent } from './exercise-outlet.component';

describe('ExerciseOutletComponent', () => {
  let component: ExerciseOutletComponent;
  let fixture: ComponentFixture<ExerciseOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
