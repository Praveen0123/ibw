import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-timesheets-status-modal',
  templateUrl: './timesheets-status-modal.component.html',
  styleUrls: ['./timesheets-status-modal.component.scss']
})
export class TimesheetsStatusModalComponent implements OnInit {

  constructor(public dialogref:MatDialogRef<TimesheetsStatusModalComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogref.close();
  }
  Timesheets=[
    {projectNumber:'5-5127',site:'71 Mearns',sow:'Reference Plan',task:'Quote',action:'Ops Internal Task',workedHours:4,status:'Approved'},
    {projectNumber:'5-5127',site:'20 Mearns',sow:'Topographic',task:'Field',action:'Site measurements',workedHours:6,status:'Approved'},
    {projectNumber:'8-5125',site:'60 Mearns',sow:'SRPR',task:'Quote',action:'CAD Drafting',workedHours:2,status:'Pending'},
    {projectNumber:'8-5125',site:'85 Mearns',sow:'SRPR',task:'Field',action:'Site measurements',workedHours:4,status:'Declined'}
  ]
}
