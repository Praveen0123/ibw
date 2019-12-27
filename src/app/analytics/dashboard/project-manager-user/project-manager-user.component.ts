import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-project-manager-user',
  templateUrl: './project-manager-user.component.html',
  styleUrls: ['./project-manager-user.component.scss']
})
export class ProjectManagerUserComponent implements OnInit {
    result: any = null;
    currentconditionTypes = [
        { id: 0, value: "No longer needed" },
        { id: 1, value: "Need a different one" },
        { id: 2, value: "Needs repairs, not working" },
        { id: 2, value: "Needs repairs, but still working" }];
  barChart: Chart;
  barChart1: Chart;

  constructor() {
    this.barChart = new Chart(
        {

            chart: {
                type: 'column'
            },
            title: {
                text: 'Production Averages for Completed Actions for All Work Types'
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
                    text: 'Completed Action Hours'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} hrs</b></td></tr>',
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
                name: 'All Work Types',
                data: [40, 42, 38, 44, 41, 40, 43, 39, 42, 43, 40, 44, 39, 37, 40, 42, 41, 39,
                    40, 44, 42, 41, 41, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

            }]


        })

    this.barChart1 = new Chart(
        {

            chart: {
                type: 'column'
            },
            title: {
                text: 'Production Averages for Completed Actions per Category'
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
                    text: 'Completed Action Hours'
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} hrs</b></td></tr>',
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
                name: 'Legal',
                data: [8, 9, 10, 7, 8, 8, 9, 10, 8, 7, 8, 9, 10, 8, 8, 9, 7, 8, 10, 9, 9, 9, 7, 8, 7, 9, 8, 9, 10]

            }, {
                name: 'Engineering',
                data: [10, 8, 10, 9,8, 7, 8, 9, 10, 8, 8, 9, 7, 8, 9, 10, 7, 8, 8, 9,  9, 9, 7, 8, 7, 9, 8, 9, 10]
            },
            {
                name: 'Development',
                data: [7, 8, 9, 10,8, 8, 9, 10, 8, 10, 8, 8, 9, 10, 9, 9, 9, 7, 8, 7, 9, 8, 9, 10, 7,  8, 8, 9, 7]
            },
            {
                name: 'Planning',
                data: [8, 9, 10, 8, 8, 9, 10, 7, 8, 7, 8, 9, 10, 9, 10, 9, 8, 9, 10, 9, 7, 8, 7, 9, 8, 8, 9, 7, 8]
            }]
        })
}
  assignedactions=[
    {completionDate:"2019-09-23", projectnumber:"5-9809",site:"71 Mearns",sow:"Rplan",task:"Field",hours:"4",remaininghours:"3",details:"Details",assignedto:"--",duedate:"2019-07-10",status:"Pending"},
    {completionDate:"2019-09-09", projectnumber:"4-24642",site:"20 Mearns",sow:"Rplan",task:"Administration",hours:"7",remaininghours:"4",details:"Details",assignedto:"Andy J",duedate:"2019-07-11",status:"Scheduled"},
    {completionDate:"2019-09-23", projectnumber:"6-10235",site:"60 Mearns",sow:"Rplan",task:"Disbursments",hours:"3",remaininghours:"0",details:"Details",assignedto:"--",duedate:"2019-07-06",status:"Pending"},
    {completionDate:"2019-09-02", projectnumber:"2-51152",site:"71 Mearns",sow:"Rplan",task:"Management",hours:"9",remaininghours:"3",details:"Details",assignedto:"Cally J",duedate:"2019-07-20",status:"Scheduled"},
    {completionDate:"2019-09-17", projectnumber:"7-14164",site:"55 Mearns",sow:"Rplan",task:"Calcs & CAD",hours:"6",remaininghours:"1",details:"Details",assignedto:"Rob W",duedate:"2019-07-16",status:"Scheduled"},
    {completionDate:"2019-09-19", projectnumber:"2-25986",site:"85 Mearns",sow:"Rplan",task:"Fieldwork",hours:"5",remaininghours:"2",details:"Details",assignedto:"Brandon J",duedate:"2019-07-19",status:"Scheduled"},
    {completionDate:"2019-09-23", projectnumber:"4-82324",site:"71 Mearns",sow:"Rplan",task:"Field",hours:"8",remaininghours:"5",details:"Details",assignedto:"--",duedate:"2019-07-21",status:"Pending"},
    {completionDate:"2019-09-20", projectnumber:"2-51152",site:"71 Mearns",sow:"Rplan",task:"Management",hours:"9",remaininghours:"0",details:"Details",assignedto:"Cally J",duedate:"2019-07-26",status:"Scheduled"},
    {completionDate:"2019-09-28", projectnumber:"2-25986",site:"85 Mearns",sow:"Rplan",task:"Fieldwork",hours:"5",remaininghours:"1",details:"Details",assignedto:"Brandon J",duedate:"2019-07-30",status:"Scheduled"},

  ]
//   assetoverview=[
//     {assigned:"PC-374",fromdate:"2019-06-19",todate:"2019-06-20"},
//     {assigned:"AC-412",fromdate:"2019-06-21",todate:"2019-06-23"},
//     {assigned:"BG-144",fromdate:"2019-06-15",todate:"2019-06-17"},
//     {assigned:"AS-524",fromdate:"2019-07-06",todate:"2019-07-08"},
//     {assigned:"QO-458",fromdate:"2019-07-10",todate:"2019-07-12"},
//     {assigned:"SI-523",fromdate:"2019-07-15",todate:"2019-07-16"},
//     {assigned:"SO-252",fromdate:"2019-07-20",todate:"2019-07-22"},
//   ]
  assetoverview = [
    { assetName:'Personal Computer',assetNo: "PC-374", fromdate: "2019-06-19", todate: "2019-06-20" },
    { assetName:'Total Station',assetNo: "TS-412", fromdate: "2019-06-21", todate: "2019-06-23" },
    { assetName:'Cosmolabe',assetNo: "C-144", fromdate: "2019-06-15", todate: "2019-06-17" },
    { assetName:'Dioptra',assetNo: "D-524", fromdate: "2019-07-06", todate: "2019-07-08" },
    { assetName:'Tachymeter',assetNo: "T-458", fromdate: "2019-07-10", todate: "2019-07-12" },
    { assetName:'Total Station',assetNo: "TS-523", fromdate: "2019-07-15", todate: "2019-07-16" },
    { assetName:'Dioptra',assetNo: "D-252", fromdate: "2019-07-20", todate: "2019-07-22" },
]
  ngOnInit() {
  }
  @ViewChild('ReturnModal') ReturnModal: ModalDirective;
  openReturnModal(): void {
    this.ReturnModal.show();
}
hideReturnModal(): void {
    this.ReturnModal.hide();
}
}
