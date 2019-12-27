import { Component, OnInit } from '@angular/core';
import { day } from '../revenuebar';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-day-revenue',
  templateUrl: './day-revenue.component.html',
  styleUrls: ['./day-revenue.component.scss']
})
export class DayRevenueComponent implements OnInit {
  // day: any[];
  // multi: any[];

  // view: any[] = [1000,500];

  // options
  // showXAxis = true;
  // showYAxis = true;
  // gradient = false;
  // showLegend = false;
  // showXAxisLabel = true;
  // xAxisLabel = 'Daily';
  // showYAxisLabel = true;
  // yAxisLabel = 'Revenue';

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };
  barChart: Chart;
  constructor() {
    // Object.assign(this, { day }),
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
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                    '23',
                    '24',
                    '25',
                    '26',
                    '27',
                    '28',
                    '29',
                    '30'
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
                name: 'Daily',
                data: [3800,4000,3560,4500,4200,4800,3900,4600,3500,3900,5100,4980,3600,3800,4200,4000,4300,4500,
                4600,4500,4800,3000,3900,4200,4500,4700,4850,5100,4900]

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
