import { Component, OnInit } from '@angular/core';
import { Settings } from '../../../app.settings.model';
import { AppSettings } from '../../../app.settings';
import { billjobcodes } from './bill-jobcodes';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-billing-by-jobcodes',
  templateUrl: './billing-by-jobcodes.component.html',
  styleUrls: ['./billing-by-jobcodes.component.scss']
})
export class BillingByJobcodesComponent implements OnInit {
  selected = 4;
  public billjobcodes: any[];
  public multi: any[];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  barChart: Chart;

  constructor() {
    this.barChart = new Chart(
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
            text: 'Distribution of Billing by Jobcodes'
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
            name: 'Billing',
            colorByPoint: true,
            data: [{
                name: 'Admin Assistant',
                y: 30.41,
            }, {
                name: 'CAD Supervisor',
                y: 21.84
            }, {
                name: 'Cals & Cad',
                y: 10.85
            }, {
                name: 'Field Assistant',
                y: 14.67
            }, {
                name: 'GIS Manager',
                y: 20.18
            }, {
                name: 'IT Technician',
                y: 31.64
            }]
        }]
      
      
        }
    )
  }
  
  public onSelect(event) {
    console.log(event);
  }
  onTime = [
    {jobcodes:"Admin Assistant",billedhrs:"140",rate:"70",billedamount:"7000"},
    {jobcodes:"CAD Supervisor",billedhrs:"160",rate:"75",billedamount:"7500"},
    {jobcodes:"Cals & Cad",billedhrs:"150",rate:"65",billedamount:"8000"},
    {jobcodes:"Field Assistant",billedhrs:"120",rate:"65",billedamount:"6500"},
    {jobcodes:"GIS Manager",billedhrs:"140",rate:"100",billedamount:"9000"},
    {jobcodes:"IT Technician",billedhrs:"130",rate:"60",billedamount:"8500"},
    {jobcodes:"Admin Assistant",billedhrs:"140",rate:"70",billedamount:"7000"},
    {jobcodes:"CAD Supervisor",billedhrs:"160",rate:"75",billedamount:"7500"},
    {jobcodes:"Cals & Cad",billedhrs:"150",rate:"65",billedamount:"8000"},
    {jobcodes:"Field Assistant",billedhrs:"120",rate:"65",billedamount:"6500"},
    {jobcodes:"GIS Manager",billedhrs:"140",rate:"100",billedamount:"9000"},
    {jobcodes:"IT Technician",billedhrs:"130",rate:"60",billedamount:"8500"},
    {jobcodes:"Admin Assistant",billedhrs:"140",rate:"70",billedamount:"7000"},
  ];
  ngOnInit() {
  }
  scrollActions(side) {
    var ele = document.getElementById('overrun');
    if(side == 'left')
    ele.scrollLeft += 190;
    else
    ele.scrollLeft -= 190;
}

}
