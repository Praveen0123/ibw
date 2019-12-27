import { Component, OnInit } from '@angular/core';
import { rpr } from './revenue-region';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-revenue-per-region',
  templateUrl: './revenue-per-region.component.html',
  styleUrls: ['./revenue-per-region.component.scss']
})
export class RevenuePerRegionComponent implements OnInit {
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
            text: 'Revenue Per Region'
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
            name: 'Billing',
            colorByPoint: true,
            data: [{
                name: 'Niagara',
                y: 10,
            }, {
                name: 'Durham',
                y: 10,
            }, {
                name: 'Halton',
                y: 12,
            }, {
                name: 'Muskoka',
                y: 15,
            }, {
                name: 'Waterloo',
                y: 20,
            },{
              name: 'Oxford County',
              y: 12,
            }, {
                name: 'York',
                y: 19,
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
