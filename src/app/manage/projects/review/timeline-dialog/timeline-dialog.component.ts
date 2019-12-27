import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'timeline-dialog',
  templateUrl: './timeline-dialog.component.html',
  styleUrls: ['./timeline-dialog.component.scss']
})
export class TimelineDialogComponent implements OnInit {
  gridColumnsArray: string[];

  constructor(public dialogRef: MatDialogRef<TimelineDialogComponent>) { }

 isaddMessage :boolean=true;
  close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

  }



}
