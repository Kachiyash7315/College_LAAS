import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingInstitutionComponent } from './onboarding-institution.component';

describe('OnboardingInstitutionComponent', () => {
  let component: OnboardingInstitutionComponent;
  let fixture: ComponentFixture<OnboardingInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingInstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
