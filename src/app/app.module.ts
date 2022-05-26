import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartSesionesComponent } from './chart-sesiones/chart-sesiones.component';
import { ChartUsersByTypeComponent } from './chart-users-by-type/chart-users-by-type.component';
import { ChartUsersByGenderComponent } from './chart-users-by-gender/chart-users-by-gender.component';
import { ChartUsersByGenderAndAgeComponent } from './chart-users-by-gender-and-age/chart-users-by-gender-and-age.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartSesionesComponent,
    ChartUsersByTypeComponent,
    ChartUsersByGenderComponent,
    ChartUsersByGenderAndAgeComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
