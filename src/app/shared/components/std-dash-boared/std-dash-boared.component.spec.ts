import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDashBoaredComponent } from './std-dash-boared.component';

describe('StdDashBoaredComponent', () => {
  let component: StdDashBoaredComponent;
  let fixture: ComponentFixture<StdDashBoaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdDashBoaredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdDashBoaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
