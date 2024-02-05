import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSubmissionComponent } from './check-submission.component';

describe('CheckSubmissionComponent', () => {
  let component: CheckSubmissionComponent;
  let fixture: ComponentFixture<CheckSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
