import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-review-grid-col-dialog',
  templateUrl: './review-grid-col-dialog.component.html',
  styleUrls: ['./review-grid-col-dialog.component.scss']
})
export class ReviewGridColDialogComponent implements OnInit {
  gridColumnsArray: string[];

  constructor(public dialogRef: MatDialogRef<ReviewGridColDialogComponent>) { }


  close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.gridColumnsArray = ['Action', 'Project','Logged By','Hours Logged','Date Time', 'Site',
    'SOW','Task','Plan Hours', 'Actual Till Date','Client', 'Project Manager','Status',
    'Percent Complete', 'Updates','Expenses','Instructions', 'Due Date','Messages','Approved','Returned']
  }



}
