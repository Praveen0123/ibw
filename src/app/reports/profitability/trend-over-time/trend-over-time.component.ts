import { Component, OnInit } from '@angular/core';
import { trendovertime } from '../profitability';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-trend-over-time',
    templateUrl: './trend-over-time.component.html',
    styleUrls: ['./trend-over-time.component.scss']
})
export class TrendOverTimeComponent implements OnInit {
    filterToggle: boolean = false;
    trendovertime: any[];
    multi: any[];
    year = 4;
    // options
    //   showXAxis = true;
    //   showYAxis = true;
    //   gradient = false;
    //   showLegend = false;
    //   showXAxisLabel = true;
    //   xAxisLabel = 'Trend';
    //   showYAxisLabel = true;
    //   yAxisLabel = 'Profitability';

    //   colorScheme = {
    //     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    //   };
    options: any;
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
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
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
                    name: 'Trend',
                    data: [90000, 119000, 99000, 88000, 80000, 87000, 90000, 95000, 100000, 110000, 150000, 120000]

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
