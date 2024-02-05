import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyingComponent } from './verifying.component';

describe('VerifyingComponent', () => {
  let component: VerifyingComponent;
  let fixture: ComponentFixture<VerifyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
