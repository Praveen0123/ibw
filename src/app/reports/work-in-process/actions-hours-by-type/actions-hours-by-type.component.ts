import { Component, OnInit } from '@angular/core';
import { Settings } from '../../../app.settings.model';
import { AppSettings } from '../../../app.settings';
import { actionshrsbytype } from '../work-in-process';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-actions-hours-by-type',
  templateUrl: './actions-hours-by-type.component.html',
  styleUrls: ['./actions-hours-by-type.component.scss']
})
export class ActionsHoursByTypeComponent implements OnInit {
  pieChart: Chart;

  constructor() {
    this.pieChart = new Chart(
        {
            position: {
                align: 'left',
                verticalAlign: 'bottom',
                x: 10,
                y: -10
            },
            
          chart: {
            spacingBottom: 0    ,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
    
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Action Hours by Project Type'
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
            name: 'Action Hours',
            colorByPoint: true,
            data: [{
                name: 'Legal',
                y: 25,
            }, {
                name: 'Internal',
                y: 30
            }, {
                name: 'Engineering',
                y: 15
            }, {
                name: 'Construction',
                y: 20
            }, {
                name: 'Planning',
                y: 25
            }]
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
