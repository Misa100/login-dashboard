import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexYAxis, ApexLegend, ApexXAxis, ApexTooltip, ApexTheme, ApexGrid, ApexPlotOptions,  ApexNonAxisChartSeries, ApexResponsive, ApexStroke, ApexFill} from 'ng-apexcharts';

import {Product,TopSelling} from './top-selling-data';
import { Feeds,Feed } from './feeds-data';
import { MatSnackBar } from '@angular/material/snack-bar';

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  backgroundColor : string[] | any;
  hoverBackgroundColor : any | any;
  pointBackgroundColor : any | any;
  colors: string[] | any;
  labels: any | any;
  borderColor : any | any;
};

export type exponentialChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  dataLabels: ApexDataLabels | any;
  tooltip: ApexTooltip | any;
  yaxis: ApexYAxis | any;
  stroke: ApexStroke | any;
  hoverBackgroundColor : any | any;
  pointBackgroundColor : any | any;
  borderColor : any | any;
  colors: string[] | any;
  backgroundColor : string[] | any;
  fill: ApexFill | any;
};

export type salesChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: any;
  theme: ApexTheme | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  markers: any;
  grid: ApexGrid | any;
  plotOptions: ApexPlotOptions | any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  topSellingProducts: Product[] = [];  
  feeds:Feed[] = [];

  @ViewChild("chart") chart: ChartComponent = Object.create(null);

  public exponentialChartOptions: Partial<exponentialChartOptions> ;
  public barChartOptions: Partial<ChartOptions>;
  public salesChartOptions: Partial<salesChartOptions>;
  public pieChartOptions: Partial<ChartOptions>;

  constructor(private snackBar: MatSnackBar) {
    this.exponentialChartOptions = {
      series: [
        {
          name: "Croissance Exponentielle",
          data: [1, 3, 9, 27, 81, 243, 729, 2187] // Exemple de données exponentielles
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      backgroundColor: ["#9BC0DC", "#79A2C9", "#CFE9F7"],
      dataLabels: {
        enabled: false
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      xaxis: {
        type: 'category',
        categories: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"]
      },    
    }

    this.barChartOptions = {
      series: [
        {
          name: "Revenue",
          data: [45000, 52000, 60000, 70000, 78000, 85000]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      colors: ["#9BC0DC", "#79A2C9", "#CFE9F7"],
      borderColor: '#9BC0DC',
      pointBackgroundColor: '#9BC0DC',
    }

    this.pieChartOptions = {
      series: [44, 55, 13],
      backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)'],
      hoverBackgroundColor: ['rgba(255,99,132,0.6)', 'rgba(54,162,235,0.6)', 'rgba(255,206,86,0.6)'],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
    
    this.salesChartOptions = {
      series: [
        {
          name: "Iphone 13",
          data: [0, 31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Oneplue 9",
          data: [0, 11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 390,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#9BC0DC", "#79A2C9", "#CFE9F7"],
      stroke: {
        curve: "smooth",
        width: 1,
      },
      grid: {
        strokeDashArray: 3,
      },
      markers: {
        size: 3
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
        ],
      },
      tooltip: {
        theme: 'dark'
      }
    };
  }
  ngOnInit(): void {
    this.topSellingProducts = TopSelling;
    this.feeds = Feeds;
  }

  userProfile:any
  showWelcomeMessage() {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
    if (this.userProfile) {
      this.snackBar.open(`Welcome, ${this.userProfile.name}`, 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }

  generateExponentialData(base: number, length: number): number[] {
    return Array.from({ length }, (_, i) => Math.pow(base, i));
  }
}
