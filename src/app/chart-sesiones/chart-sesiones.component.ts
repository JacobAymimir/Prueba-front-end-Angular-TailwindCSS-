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
  selector: 'app-chart-sesiones',
  templateUrl: './chart-sesiones.component.html',
  styleUrls: ['./chart-sesiones.component.css']
})
export class ChartSesionesComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "Sessions",
          data: [15, 16, 20, 25, 22, 19, 30, 26, 20, 18, 15, 18, 21, 23],
        },
      ],

      chart: {
        foreColor: '#64748B',
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
          columnWidth: "25%",
          borderRadius: 5,
          rangeBarOverlap: false,

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
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
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
      xaxis: {
        categories: [
          "Jan 20",
          "Feb 20",
          "Mar 20",
          "Apr 20",
          "May 20",
          "Jun 20",
          "Jul 20",
          "Aug 20",
          "Sep 20",
          "Oct 20",
          "Nov 20",
          "Dec 20",
          "Jan 21",
          "Feb 21",
        ],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
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
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    };
  }

  ngOnInit(): void {
  }

}
