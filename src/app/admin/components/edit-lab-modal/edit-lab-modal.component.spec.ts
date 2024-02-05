import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabModalComponent } from './edit-lab-modal.component';

describe('EditLabModalComponent', () => {
  let component: EditLabModalComponent;
  let fixture: ComponentFixture<EditLabModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLabModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLabModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
