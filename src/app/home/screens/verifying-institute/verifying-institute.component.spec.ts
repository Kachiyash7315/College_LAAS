import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyingInstituteComponent } from './verifying-institute.component';

describe('VerifyingInstituteComponent', () => {
  let component: VerifyingInstituteComponent;
  let fixture: ComponentFixture<VerifyingInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyingInstituteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyingInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
