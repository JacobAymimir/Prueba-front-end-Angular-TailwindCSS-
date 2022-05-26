import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartUsersByTypeComponent } from './chart-users-by-type.component';

describe('ChartUsersByTypeComponent', () => {
  let component: ChartUsersByTypeComponent;
  let fixture: ComponentFixture<ChartUsersByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartUsersByTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartUsersByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
