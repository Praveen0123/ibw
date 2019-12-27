import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-manage-sow-grid-col-dialog',
  templateUrl: './manage-sow-grid-col-dialog.component.html',
  styleUrls: ['./manage-sow-grid-col-dialog.component.scss']
})
export class ManageSOWGridColDialogComponent implements OnInit {
  gridColumnsArray: string[];

  constructor(public dialogRef: MatDialogRef<ManageSOWGridColDialogComponent>) { }


  close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.gridColumnsArray = ['Action', 'Due Date','Completion Date','	Job Code','Rate', 'Hours',
    'Budget','Total Hours','Total Cost']
  }



}
