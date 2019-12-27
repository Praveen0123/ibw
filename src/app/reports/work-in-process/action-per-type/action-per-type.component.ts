import { Component, OnInit } from '@angular/core';
import { Settings } from '../../../app.settings.model';
import { AppSettings } from '../../../app.settings';
import { actionsbytype } from '../work-in-process';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-action-per-type',
  templateUrl: './action-per-type.component.html',
  styleUrls: ['./action-per-type.component.scss']
})
export class ActionPerTypeComponent implements OnInit {

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
            text: 'Actions by Project Type'
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
            name: 'Actions',
            colorByPoint: true,
            data: [{
                name: 'Legal',
                y: 15,
            }, {
                name: 'Internal',
                y: 15
            }, {
                name: 'Engineering',
                y: 20
            }, {
                name: 'Construction',
                y: 30
            }, {
                name: 'Planning',
                y: 10
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
