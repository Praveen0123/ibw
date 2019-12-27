import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-grid-col-dialog',
  templateUrl: './review-grid-col-dialog.component.html',
  styleUrls: ['./review-grid-col-dialog.component.scss']
})
export class ProjectGridColDialogComponent implements OnInit {
  gridColumnsArray: string[];

  constructor(public dialogRef: MatDialogRef<ProjectGridColDialogComponent>) { }


  close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.gridColumnsArray = ['Project','Client Name','Project Type','Account Manager', 'Project Manager', 'Sites',
    'SOW','Task','Action', 'Docs','Start Date', 'Completion Date','Billed',
    'Percent Complete', 'Potential','Status','Manage']
  }



}
