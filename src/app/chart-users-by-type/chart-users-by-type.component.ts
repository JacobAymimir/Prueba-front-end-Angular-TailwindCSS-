import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexTheme,
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
  theme: ApexTheme;
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
  selector: 'app-chart-users-by-type',
  templateUrl: './chart-users-by-type.component.html',
  styleUrls: ['./chart-users-by-type.component.css']
})
export class ChartUsersByTypeComponent implements OnInit {

  @ViewChild("chart2") chart2: ChartComponent;
  public chartOptions2: Partial<ChartOptions2>;

  constructor() {
     this.chartOptions2 = {
      title: {
        text: "Users by Type",
      },
      series: [60, 40],
      chart: {
        type: "donut",
        foreColor: '#64748B'
      },
      tooltip: {
        enabled: false,
        fillSeriesColor: true,
      },
      fill: {
        colors: ["#0078fc", "#05c3f3"],
      },
      plotOptions: {
        pie: {
          customScale: 1,
          startAngle: -145,
          endAngle: 290,
            donut: {
          size: '65%'
        }
        },
      },
      labels: ["New Visitors", "Returning"],
      dataLabels: {
        enabled: false,
      },

      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        markers: {
          fillColors: ["#0078fc", "#05c3f3"],
        },
      },
      responsive: [
        {
          breakpoint: 360,
        },
      ],
    };
   }

  ngOnInit(): void {
  }

}
