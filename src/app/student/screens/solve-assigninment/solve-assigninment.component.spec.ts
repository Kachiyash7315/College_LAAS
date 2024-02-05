import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveAssigninmentComponent } from './solve-assigninment.component';

describe('SolveAssigninmentComponent', () => {
  let component: SolveAssigninmentComponent;
  let fixture: ComponentFixture<SolveAssigninmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveAssigninmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolveAssigninmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
