import { Component, OnInit } from '@angular/core';
import { rpw } from './per-worktype';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-revenue-per-worktype',
  templateUrl: './revenue-per-worktype.component.html',
  styleUrls: ['./revenue-per-worktype.component.scss']
})
export class RevenuePerWorktypeComponent implements OnInit {
  // public rpw: any[];
  // public multi: any[];
  // public showLegend = true;
  // public gradient = true;
  // public colorScheme = {
  //   domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  // }; 
  // public showLabels = true;
  // public explodeSlices = false;
  // public doughnut = false;
  // public settings: Settings;

  // constructor(public appSettings:AppSettings) {
  //   this.settings = this.appSettings.settings; 
  //   Object.assign(this, {rpw}); 
  // }
  
  barChart: Chart;
  constructor() {
    this.barChart = new Chart(
        {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Revenue Per Worktype'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
          enabled: false
      },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                    }
                }
            }
        },
        series: [{
            name: 'Type',
            colorByPoint: true,
            data: [{
                name: 'Legal',
                y: 5000,
            }, {
              name: 'Engineering',
              y: 6500,
            },{
              name: 'Internal',
              y: 7000,
            },{
                name: 'Construction',
                y: 8000,
            }]
        }]
        }
    )
  }

  public onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
  }

}
