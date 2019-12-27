import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-sow-dailog',
  templateUrl: './new-sow-dailog.component.html',
  styleUrls: ['./new-sow-dailog.component.scss']
})
export class NewSowDailogComponent implements OnInit {

  sites=["71 Mearns / 249", "71 Mearns Ct 20","20 Mearns Ct"];
  SowTypes=["Legal","Engineering","Construction","Internal"];
  projects = ["5-12564", "4-24642", "4-82324", "6-10235" ];


  constructor(public dialogRef: MatDialogRef<NewSowDailogComponent>, public router : Router) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveInfo() {
    this.dialogRef.close();
    this.router.navigate(['/IBW/manage/project-dashboard/sow'])
  }
}
