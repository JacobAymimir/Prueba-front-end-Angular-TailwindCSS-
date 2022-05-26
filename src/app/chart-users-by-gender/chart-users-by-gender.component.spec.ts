import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartUsersByGenderComponent } from './chart-users-by-gender.component';

describe('ChartUsersByGenderComponent', () => {
  let component: ChartUsersByGenderComponent;
  let fixture: ComponentFixture<ChartUsersByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartUsersByGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartUsersByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
