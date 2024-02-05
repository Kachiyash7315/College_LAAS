import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSection1Component } from './info-section1.component';

describe('InfoSection1Component', () => {
  let component: InfoSection1Component;
  let fixture: ComponentFixture<InfoSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
