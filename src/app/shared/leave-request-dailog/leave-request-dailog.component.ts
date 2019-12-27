import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-leave-request-dailog',
  templateUrl: './leave-request-dailog.component.html',
  styleUrls: ['./leave-request-dailog.component.scss']
})
export class LeaveRequestDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LeaveRequestDailogComponent>, public router : Router) { }
  mytime: Date = new Date();
  mytime2: Date = new Date();
  projects = ["5-12564", "4-24642", "4-82324", "6-10235" ]
  fromtimehrOptions = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
  fromtimemmOptions = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23",
  "24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
  ngOnInit() {
  }
  lateAttendanceType : number = 1;
  requestType: number = 1;
  leaveType: number = null;
  FullDayDecisionType:number=1;
  close(): void {
    this.dialogRef.close();
  }


  saveInfo() {
    this.dialogRef.close();
    this.router.navigate(['/IBW/manage/leaves/leave-activity'])
  }
}