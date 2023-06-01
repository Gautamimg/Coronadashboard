import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  wordwide: any;
  countrywise_data: any;
  chartOptions: any;

  constructor(private serve: ServiceService) {}

  ngOnInit(): void {
    this.serve.Coronadata_api().subscribe((res: any) => {
      console.log('data', res);
      this.wordwide = res.world_total;
      this.countrywise_data = res.countries_stat;
      console.log('country', this.countrywise_data);
      console.log(this.wordwide);
    });

    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
