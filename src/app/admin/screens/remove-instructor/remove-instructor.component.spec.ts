import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveInstructorComponent } from './remove-instructor.component';

describe('RemoveInstructorComponent', () => {
  let component: RemoveInstructorComponent;
  let fixture: ComponentFixture<RemoveInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
