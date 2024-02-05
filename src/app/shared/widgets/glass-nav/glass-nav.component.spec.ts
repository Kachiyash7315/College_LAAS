import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassNavComponent } from './glass-nav.component';

describe('GlassNavComponent', () => {
  let component: GlassNavComponent;
  let fixture: ComponentFixture<GlassNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
