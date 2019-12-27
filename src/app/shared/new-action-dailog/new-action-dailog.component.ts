import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-action-dailog',
  templateUrl: './new-action-dailog.component.html',
  styleUrls: ['./new-action-dailog.component.scss']
})
export class NewActionDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewActionDailogComponent>, public router : Router) { }
  projects = ["5-12564", "4-24642", "4-82324", "6-10235" ]
  Sites=["71 Mearns","20 Mearns","60 Mearns"]

  SOWs=["Reference Plan","Topographic","SRPR"]

  Tasks=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]
  JobCodes=["LPC1","EPC1","CPC1"]
  ActionTypes=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]
  ngOnInit() {
  }

  projectNumber: any;
  siteNum: any;
  planHours : any
  actionType : any
  jobCode : any
  actionTitle: any
  taskNum: any
  sowNum: any

  
  close(): void {
    this.dialogRef.close();
  }

  saveInfo() {
    this.dialogRef.close();
    this.router.navigate(['/IBW/manage/project-dashboard/actions'])
  }

}
