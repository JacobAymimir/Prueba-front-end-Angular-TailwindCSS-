import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSesionesComponent } from './chart-sesiones.component';

describe('ChartSesionesComponent', () => {
  let component: ChartSesionesComponent;
  let fixture: ComponentFixture<ChartSesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartSesionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
