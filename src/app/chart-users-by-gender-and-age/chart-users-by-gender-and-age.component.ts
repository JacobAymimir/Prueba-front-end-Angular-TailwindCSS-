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

export type ChartOptions = {
  stroke: ApexStroke;
  options: ApexOptions;
  tooltip: ApexTooltip;
  series: ApexAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  labels: any;

  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart-users-by-gender-and-age',
  templateUrl: './chart-users-by-gender-and-age.component.html',
  styleUrls: ['./chart-users-by-gender-and-age.component.css']
})
export class ChartUsersByGenderAndAgeComponent implements OnInit {
  
  @ViewChild("chart4") chart4: ChartComponent;
  public chartOptions4: Partial<ChartOptions>;

  constructor() { 
    this.chartOptions4 = {
      series: [
        {
          name: "18-24",
          data: [8, 5],
        },
        {
          name: "25-34",
          data: [11, 21],
        },
        {
          name: "35-44",
          data: [15, 16],
        },
        {
          name: "45-54",
          data: [9, 7],
        },
        {
          name: "55-64",
          data: [5, 3],
        },
      ],

      chart: {
        stacked: false,
        height: 350,
        type: "bar",
        toolbar: {
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
            customIcons: [],
          },
        },
      },
      title: {
        text: "Sessions",
      },
      plotOptions: {
        bar: {
          columnWidth: "35%",
          rangeBarOverlap: true,

          dataLabels: {
            position: "bottom", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -10,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      stroke: {
        colors: ["transparent"],
        width: 5,
      },
      xaxis: {
        type: "category",
        categories: ["Female", "Male"],
        position: "bottom",
        axisBorder: {
          show: true,
          color: "#747f8c",
        },
        axisTicks: {
          show: true,
          color: "#747f8c",
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
          offsetY: -35,
        },
      },
      yaxis: {
        min: 0,
        max: 30,
        tickAmount: 3,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
    }; }

  ngOnInit(): void {
  }

}
