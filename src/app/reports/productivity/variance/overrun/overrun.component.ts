import { Component, OnInit } from '@angular/core';
import { Settings } from '../../../../app.settings.model';
import { AppSettings } from '../../../../app.settings';
import { single } from './overrunpie';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-overrun',
  templateUrl: './overrun.component.html',
  styleUrls: ['./overrun.component.scss']
})
export class OverrunComponent implements OnInit {
  selected = 4;
  // public single: any[];
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
  //   Object.assign(this, {single}); 
  // }
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
            text: 'Distribution of Overrun Hours by Delay Reason'
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
            name: 'Overrun',
            colorByPoint: true,
            data: [{
                name: 'Overrun',
                y: 30.41,
            }, {
                name: 'Delay Reason',
                y: 21.84
            }]
        }]
        }
    )
  }

  
  public onSelect(event) {
    console.log(event);
  }
  onTime = [
    {action:"Operations Assist",project:"4-24642",site:"20 Mearns Ct",sow:"SoW-2",task:"Administration",planhours:"20",actualhours:"16",expectedhours:"16",percentcomplete:"100",excesshours:"4",delayreason:"Vehicle Downtime"},
    {action:"Initial Survey",project:"4-82324",site:"71 Mearns Ct 20",sow:"SoW-7",task:"Fieldwork",planhours:"10",actualhours:"10",expectedhours:"10",percentcomplete:"90",excesshours:"0",delayreason:"-"},
    {action:"Site Audit",project:"6-10235",site:"60 Mearns",sow:"SoW-3",task:"Fieldwork",planhours:"24",actualhours:"24",expectedhours:"24",percentcomplete:"100",excesshours:"0",delayreason:"-"},
    {action:"Field Management",project:"2-51152",site:"71 Mearns 249",sow:"SoW-4",task:"Management",planhours:"14",actualhours:"16",expectedhours:"16",percentcomplete:"95",excesshours:"2",delayreason:"-"},
    {action:"Surveyor Search",project:"7-14164",site:"55 Mearns Ct",sow:"SoW-5",task:"Disbursments",planhours:"24",actualhours:"20",expectedhours:"20",percentcomplete:"100",excesshours:"4",delayreason:"Bad Weather"},
    {action:"CAD Drafting",project:"5-12564",site:"71 Mearns",sow:"SoW-1",task:"Calcs & CAD",planhours:"20",actualhours:"20",expectedhours:"20",percentcomplete:"90",excesshours:"0",delayreason:"-"},
    {action:"CAD Corrections",project:"2-25986",site:"85 Mearns Ct",sow:"SoW-6",task:"Calcs & CAD",planhours:"30",actualhours:"24",expectedhours:"24",percentcomplete:"100",excesshours:"6",delayreason:"Resources not available"},
    {action:"Surveyor Search",project:"7-14164",site:"55 Mearns Ct",sow:"SoW-5",task:"Disbursments",planhours:"24",actualhours:"20",expectedhours:"20",percentcomplete:"100",excesshours:"4",delayreason:"Bad Weather"},
    {action:"Operations Assist",project:"4-24642",site:"20 Mearns Ct",sow:"SoW-2",task:"Administration",planhours:"20",actualhours:"16",expectedhours:"16",percentcomplete:"100",excesshours:"4",delayreason:"Vehicle Downtime"},
    {action:"Initial Survey",project:"4-82324",site:"71 Mearns Ct 20",sow:"SoW-7",task:"Fieldwork",planhours:"10",actualhours:"10",expectedhours:"10",percentcomplete:"90",excesshours:"0",delayreason:"-"},
    {action:"Site Audit",project:"6-10235",site:"60 Mearns",sow:"SoW-3",task:"Fieldwork",planhours:"24",actualhours:"24",expectedhours:"24",percentcomplete:"100",excesshours:"0",delayreason:"-"},
    {action:"Field Management",project:"2-51152",site:"71 Mearns 249",sow:"SoW-4",task:"Management",planhours:"14",actualhours:"16",expectedhours:"16",percentcomplete:"95",excesshours:"2",delayreason:"-"},



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
