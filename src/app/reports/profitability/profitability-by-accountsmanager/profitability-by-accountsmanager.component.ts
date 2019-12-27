import { Component, OnInit } from '@angular/core';
import { accountsmanager, projectmanager } from '../profitability';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-profitability-by-accountsmanager',
  templateUrl: './profitability-by-accountsmanager.component.html',
  styleUrls: ['./profitability-by-accountsmanager.component.scss']
})
export class ProfitabilityByAccountsmanagerComponent implements OnInit {
  accountsmanager: any[];
  multi: any[];

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
          credits:{
            enabled: false
          },
          xAxis: {
              categories: [
                'Dwayne',
                'Dave',
                  // 'May',
                  // 'Jun',
                  // 'Jul',
                  // 'Aug',
                  // 'Sep',
                  // 'Oct',
                  // 'Nov',
                  // 'Dec'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Profitability'
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
              name: 'Account Manager',
              data: [90000,119000]
      
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
