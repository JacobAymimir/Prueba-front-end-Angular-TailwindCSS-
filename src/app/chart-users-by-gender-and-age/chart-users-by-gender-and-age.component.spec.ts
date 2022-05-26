import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartUsersByGenderAndAgeComponent } from './chart-users-by-gender-and-age.component';

describe('ChartUsersByGenderAndAgeComponent', () => {
  let component: ChartUsersByGenderAndAgeComponent;
  let fixture: ComponentFixture<ChartUsersByGenderAndAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartUsersByGenderAndAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartUsersByGenderAndAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
