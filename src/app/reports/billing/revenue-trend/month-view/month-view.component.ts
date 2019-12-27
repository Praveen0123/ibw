import { Component, OnInit } from '@angular/core';
import { month } from '../revenuebar';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {
  // month: any[];
  // multi: any[];

  // view: any[] = [700, 400];

  // // options
  // showXAxis = true;
  // showYAxis = true;
  // gradient = false;
  // showLegend = false;
  // showXAxisLabel = true;
  // xAxisLabel = 'Monthly';
  // showYAxisLabel = true;
  // yAxisLabel = 'Revenue';

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  // constructor() {
  //   Object.assign(this, { month })
  // }
  barChart: Chart;
  constructor() {
      this.barChart = new Chart(
          {
              chart: {
                  type: 'column'
              },
              title: {
                  text: ''
              },
              credits: {
                  enabled: false
              },
              xAxis: {
                  categories: [
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec'
                  ],
                  crosshair: true
              },
              yAxis: {
                  min: 0,
                  title: {
                      text: 'Revenue'
                  }
              },
              tooltip: {
                  headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                  pointFormat: '<tr><td style="color:{series.color};padding:0"> </td>' +
                      '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                  footerFormat: '</table>',
                  shared: true,
                  useHTML: true
              },
              plotOptions: {
                  column: {
                      pointPadding: 0.2,
                      borderWidth: 0
                  }
              },
              series: [{
                  name: 'Monthly',
                  data: [90000, 119000, 99000, 88000, 80000, 87000, 90000, 95000, 100000, 110000, 150000, 120000]
              }]
          }
      )
  }
  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
  }
}
