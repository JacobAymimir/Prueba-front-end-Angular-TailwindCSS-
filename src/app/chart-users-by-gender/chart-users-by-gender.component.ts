import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend,
  ApexTooltip,
  ApexOptions,
  ApexStroke,
} from "ng-apexcharts";


export type ChartOptions2 = {
  options: ApexOptions;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  series: ApexNonAxisChartSeries;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-chart-users-by-gender',
  templateUrl: './chart-users-by-gender.component.html',
  styleUrls: ['./chart-users-by-gender.component.css']
})
export class ChartUsersByGenderComponent implements OnInit {

  @ViewChild("chart3") chart3: ChartComponent;
  public chartOptions3: Partial<ChartOptions2>;
  
  constructor() {
    this.chartOptions3 = {
      series: [65, 35],
      title: {
        text: "Users by Gender",
      },
      chart: {
        type: "donut",
      },
      fill: {
        colors: ["#5b51e8", "#43c682"],
      },
      plotOptions: {
        pie: {
          startAngle: -20,
          endAngle: 340,
        },
      },
      labels: ["Female", "Male"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        markers: {
          fillColors: ["#43c682", "#5b51e8"],
        },
      },
      tooltip: {
        enabled: false,
        fillSeriesColor: true,
      },
      responsive: [
        {
          breakpoint: 160,
        },
      ],
    };

   }

  ngOnInit(): void {
  }

}
