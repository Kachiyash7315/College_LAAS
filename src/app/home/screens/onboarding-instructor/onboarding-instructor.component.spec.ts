import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingInstructorComponent } from './onboarding-instructor.component';

describe('OnboardingInstructorComponent', () => {
  let component: OnboardingInstructorComponent;
  let fixture: ComponentFixture<OnboardingInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
