import { Component, OnInit } from '@angular/core';
import { Settings } from '../../../../app.settings.model';
import { AppSettings } from '../../../../app.settings';
import { single } from './overduepie';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.component.html',
  styleUrls: ['./overdue.component.scss']
})
export class OverdueComponent implements OnInit {
  selected = 4;
  // public single: any[];
  // public multi: any[];
  // public showLegend = true;
  // public gradient = true;
  // // view=[800,300]
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
            text: 'Distribution of Overdue Hours by Delay Reason'
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
            name: 'Overdue',
            colorByPoint: true,
            data: [{
                name: 'Overdue',
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
    {action:"Operations Assist",project:"4-24642",site:"20 Mearns Ct",sow:"SoW-2",task:"Administration",duedate:"2019-06-20",expecteddate:"2019-06-20",delay:"0",delayreason:""},
    {action:"Initial Survey",project:"4-82324",site:"71 Mearns Ct 20",sow:"SoW-7",task:"Fieldwork",duedate:"2019-07-18",expecteddate:"2019-07-18",delay:"0",delayreason:""},
    {action:"Site Audit",project:"6-10235",site:"60 Mearns",sow:"SoW-3",task:"Fieldwork",duedate:"2019-06-22",expecteddate:"2019-06-27",delay:"5",delayreason:"Vehicle Downtime"},
    {action:"Field Management",project:"2-51152",site:"71 Mearns 249",sow:"SoW-4",task:"Management",duedate:"2019-06-30",expecteddate:"2019-07-05",delay:"6",delayreason:"Staff Issues"},
    {action:"Surveyor Search",project:"7-14164",site:"55 Mearns Ct",sow:"SoW-5",task:"Disbursments",duedate:"2019-07-05",expecteddate:"2019-07-05",delay:"0",delayreason:""},
    {action:"CAD Drafting",project:"5-12564",site:"71 Mearns",sow:"SoW-1",task:"Calcs & CAD",duedate:"2019-06-16",expecteddate:"2019-06-16",delay:"0",delayreason:""},
    {action:"CAD Corrections",project:"2-25986",site:"85 Mearns Ct",sow:"SoW-6",task:"Calcs & CAD",duedate:"2019-07-11",expecteddate:"2019-07-15",delay:"4",delayreason:"Resources not available"},
    {action:"Operations Assist",project:"4-24642",site:"20 Mearns Ct",sow:"SoW-2",task:"Administration",duedate:"2019-06-20",expecteddate:"2019-06-20",delay:"0",delayreason:""},
    {action:"Initial Survey",project:"4-82324",site:"71 Mearns Ct 20",sow:"SoW-7",task:"Fieldwork",duedate:"2019-07-18",expecteddate:"2019-07-18",delay:"0",delayreason:""},
    {action:"Site Audit",project:"6-10235",site:"60 Mearns",sow:"SoW-3",task:"Fieldwork",duedate:"2019-06-22",expecteddate:"2019-06-27",delay:"5",delayreason:"Vehicle Downtime"},
    {action:"Field Management",project:"2-51152",site:"71 Mearns 249",sow:"SoW-4",task:"Management",duedate:"2019-06-30",expecteddate:"2019-07-05",delay:"6",delayreason:"Staff Issues"},

  ];
  ngOnInit() {
  
    
  }
  scrollActions(side) {
    var ele = document.getElementById('overdue');
    if(side == 'left')
    ele.scrollLeft += 190;
    else
    ele.scrollLeft -= 190;
}

}
