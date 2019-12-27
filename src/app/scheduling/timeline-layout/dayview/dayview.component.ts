import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dayview',
  templateUrl: './dayview.component.html',
  styleUrls: ['./dayview.component.scss']
})
export class DayviewComponent implements OnInit {

  constructor() { }
  Vacations = [
    { projects: "5-12564", sites: "71 Mearns", sow: "SRPR", task: "Calcs & CAD", action: "CAD Drafting", oneHr: "Reviewed", twoHr: "Reviewed", threeHr: 'Reviewed', fourHr: "Reviewed", fiveHr: "Reviewed",sixHr:"Reviewed",sevenHr:"Reviewed",eigthHr:"",nineHr:"",
    tenHr:"",elevenHr:"",twelveHr:"",thirteenHr:"",fourteenHr:"",fifteenHr:"",sixteenHr:"",seventeenHr:"",eighteenHr:"",nineteenHr:"",twentyHr:"",twentyoneHr:"",twentytwoHr:"",twentythreeHr:"",twentyfourHr:""},

    { projects: "4-24642", sites: "20 Mearns Ct", sow: "Reference Plan", task: "Administration", action: "Operations Assist", oneHr: "", twoHr: "", threeHr: '', fourHr: "", fiveHr: "Pending",sixHr:"Pending",sevenHr:"Pending",eigthHr:"Pending",nineHr:"Pending",
    tenHr:"Pending",elevenHr:"Pending",twelveHr:"",thirteenHr:"",fourteenHr:"",fifteenHr:"",sixteenHr:"",seventeenHr:"",eighteenHr:"",nineteenHr:"",twentyHr:"",twentyoneHr:"",twentytwoHr:"",twentythreeHr:"",twentyfourHr:""},

    { projects: "4-82324", sites: "11 Mearns", sow: "Topographic", task: "Fieldwork", action: "Site Audit", oneHr: "", twoHr: "Completed", threeHr: 'Completed', fourHr: "Completed", fiveHr: "Completed",sixHr:"Completed",sevenHr:"Completed",eigthHr:"Completed",nineHr:"Completed",
    tenHr:"Completed",elevenHr:"Completed",twelveHr:"Completed",thirteenHr:"Completed",fourteenHr:"Completed",fifteenHr:"Completed",sixteenHr:"Completed",seventeenHr:"",eighteenHr:"",nineteenHr:"",twentyHr:"",twentyoneHr:"",twentytwoHr:"",twentythreeHr:"",twentyfourHr:""},

    { projects: "6-10235", sites: "Mearns-249", sow: "Reference Plan", task: "Management	", action: "Field Management", oneHr: "", twoHr: "", threeHr: '', fourHr: "", fiveHr: "",sixHr:"",sevenHr:"",eigthHr:"Overdue",nineHr:"Overdue",
    tenHr:"Overdue",elevenHr:"Overdue",twelveHr:"Overdue",thirteenHr:"Overdue",fourteenHr:"Overdue",fifteenHr:"Overdue",sixteenHr:"Overdue",seventeenHr:"Overdue",eighteenHr:"Overdue",nineteenHr:"Overdue",twentyHr:"Overdue",twentyoneHr:"",twentytwoHr:"",twentythreeHr:"",twentyfourHr:""},

    { projects: "2-51152", sites: "Mearns Ct", sow: "SRPR", task: "Calcs & CAD	", action: "CAD Corrections", oneHr: "", twoHr: "", threeHr: '', fourHr: "", fiveHr: "",sixHr:"",sevenHr:"",eigthHr:"",nineHr:"",
    tenHr:"",elevenHr:"",twelveHr:"",thirteenHr:"",fourteenHr:"",fifteenHr:"Initiated",sixteenHr:"Initiated",seventeenHr:"Initiated",eighteenHr:"Initiated",nineteenHr:"Initiated",twentyHr:"Initiated",twentyoneHr:"Initiated",twentytwoHr:"Initiated",twentythreeHr:"Initiated",twentyfourHr:"Initiated"},

    { projects: "7-14164", sites: "06 Mearns", sow: "Topographic", task: "Fieldwork", action: "Initial Survey", oneHr: "Pending", twoHr: "Pending", threeHr: 'Pending', fourHr: "Pending", fiveHr: "Pending",sixHr:"Pending",sevenHr:"Pending",eigthHr:"Pending",nineHr:"Pending",
    tenHr:"Pending",elevenHr:"Pending",twelveHr:"Pending",thirteenHr:"Pending",fourteenHr:"Pending",fifteenHr:"Pending",sixteenHr:"Pending",seventeenHr:"Pending",eighteenHr:"",nineteenHr:"",twentyHr:"",twentyoneHr:"",twentytwoHr:"",twentythreeHr:"",twentyfourHr:""},

  ];
  ngOnInit() {
  }

}
