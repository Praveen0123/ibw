import { Component, OnInit } from '@angular/core';
import { projectmanager } from '../profitability';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-profitability-by-projectmanager',
    templateUrl: './profitability-by-projectmanager.component.html',
    styleUrls: ['./profitability-by-projectmanager.component.scss']
})
export class ProfitabilityByProjectmanagerComponent implements OnInit {
    projectmanager: any[];
    multi: any[];

    // options
    //   showXAxis = true;
    //   showYAxis = true;
    //   gradient = false;
    //   showLegend = false;
    //   showXAxisLabel = true;
    //   xAxisLabel = 'Project Manager';
    //   showYAxisLabel = true;
    //   yAxisLabel = 'Profitability';

    //   colorScheme = {
    //     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    //   };
    options: any;
    barChart: Chart;
    //   constructor() {
    //     this.options = {
    //       chart: {
    //         type: 'column'
    //     },
    //     title: {
    //         text: ''
    //     },
    //     credits:{
    //       enabled: false
    //     },
    //     xAxis: {
    //         categories: [
    //             'James Robin',
    //             'Mark Davis',
    //             'Jason Milller',
    //             'Fiona Francis',
    //             'Erica Joel',
    //             'Mary',
    //             'Erick Smith',
    //             // 'May',
    //             // 'Jun',
    //             // 'Jul',
    //             // 'Aug',
    //             // 'Sep',
    //             // 'Oct',
    //             // 'Nov',
    //             // 'Dec'
    //         ],
    //         crosshair: true
    //     },
    //     yAxis: {
    //         min: 0,
    //         title: {
    //             text: 'Profitability'
    //         }
    //     },
    //     tooltip: {
    //         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    //         pointFormat: '<tr><td style="color:{series.color};padding:0"> </td>' +
    //             '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    //         footerFormat: '</table>',
    //         shared: true,
    //         useHTML: true
    //     },
    //     plotOptions: {
    //         column: {
    //             pointPadding: 0.2,
    //             borderWidth: 0
    //         }
    //     },
    //     series: [{
    //         name: 'Project Manager',
    //         data: [90000,119000,80000,130000,90000,80000,100000]

    //     }]


    //   };

    //     Object.assign(this, { projectmanager })
    //   }
    // constructor() {
    //   Object.assign(this, { projectmanager })
    // }

    onSelect(event) {
        console.log(event);
    }
    ngOnInit() {
    }

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
                        'James Robin',
                        'Mark Davis',
                        'Jason Milller',
                        'Fiona Francis',
                        'Erica Joel',
                        'Mary',
                        'Erick Smith',
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
                    name: 'Project Manager',
                    data: [90000, 119000, 80000, 130000, 90000, 80000, 100000]

                }]


            }
        )
    }
}
