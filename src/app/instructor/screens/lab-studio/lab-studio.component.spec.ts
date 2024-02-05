import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabStudioComponent } from './lab-studio.component';

describe('LabStudioComponent', () => {
  let component: LabStudioComponent;
  let fixture: ComponentFixture<LabStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabStudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
