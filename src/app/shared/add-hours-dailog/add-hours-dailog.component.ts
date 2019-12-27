import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-hours-dailog',
  templateUrl: './add-hours-dailog.component.html',
  styleUrls: ['./add-hours-dailog.component.scss']
})
export class AddHoursDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddHoursDailogComponent>, public router : Router) { }

  en: any;
  values;

  projects = ["5-12564", "4-24642", "4-82324", "6-10235" ]
  ActionTypes = ["Quotes","Research","Field","Calcs","Drafting","Quality Control","Management","Admin"]
  Sites=["71 Mearns / 249","71 Mearns Ct 20","20 Mearns Ct","Site 4"]
  SOWs =["Reference Plan","Topographic","SRPR"]
  Tasks=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]
  Actions=["Take Measurements","CAD Drafting","Initial Survey","Site Audit","Field Management"]
  ExpenseCodes=["Fuel Charges","Breakfast","Lunch","Sundry Expenses"]

  ngOnInit() {
    this.en = {
      firstDayOfWeek: 1,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
      monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'mm/dd/yy',
      weekHeader: 'Wk'
  };
  }
  
  close(): void {
    this.dialogRef.close();
  }

  


  select(evt) {
    let start = new Date(evt);
    start.setDate(start.getDate() - start.getDay());
    this.values[0] = start;

    let end = new Date(start);
    end.setDate(start.getDate() + 6); 
    this.values[1] = end;
  }

  saveInfo() {
    this.dialogRef.close();
    this.router.navigate(['/IBW/manage/project-dashboard/hours'])
  }

}
