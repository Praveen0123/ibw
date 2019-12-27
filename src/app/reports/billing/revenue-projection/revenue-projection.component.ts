import { Component, OnInit } from '@angular/core';
import { week } from './projectionbar';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-revenue-projection',
  templateUrl: './revenue-projection.component.html',
  styleUrls: ['./revenue-projection.component.scss']
})
export class RevenueProjectionComponent implements OnInit {
  // week: any[];
  // multi: any[];

  // view: any[] = [1000,500];

  // // options
  // showXAxis = true;
  // showYAxis = true;
  // gradient = false;
  // showLegend = false;
  // showXAxisLabel = true;
  // xAxisLabel = 'Weekly';
  // showYAxisLabel = true;
  // yAxisLabel = 'Revenue Projection';

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  // constructor() {
  //   Object.assign(this, { week })
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
                    'Wk1',
                    'Wk2',
                    'Wk3',
                    'Wk4',
                    'Wk5',
                    'Wk6',
                    'Wk7',
                    'Wk8',
                    'Wk9',
                    'Wk10',
                    'Wk11',
                    'Wk12',
                    'Wk13',
                    'Wk14',
                    'Wk15',
                    'Wk16',
                    'Wk17',
                    'Wk18',
                    'Wk19',
                    'Wk20',
                    'Wk21',
                    'Wk22',
                    'Wk23',
                    'Wk24',
                    'Wk25',
                    'Wk26',
                    'Wk27',
                    'Wk28',
                    'Wk29',
                    'Wk30',
                    'Wk31',
                    'Wk32',
                    'Wk33',
                    'Wk34',
                    'Wk35',
                    'Wk36',
                    'Wk37',
                    'Wk38',
                    'Wk39',
                    'Wk40',
                    'Wk41',
                    'Wk42',
                    'Wk43',
                    'Wk44',
                    'Wk45',
                    'Wk46',
                    'Wk47',
                    'Wk48',
                    'Wk49',
                    'Wk50',
                    'Wk51',
                    'Wk52'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Revenue Projection'
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
                name: 'Weekly',
                data: [25000,19000,26000,20000,28000,32000,25000,22000,21000,24000,31000,27000,27500,28000,27000,31000,33000,37000,
                27000,25000,21000,22000,23000,24000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

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
