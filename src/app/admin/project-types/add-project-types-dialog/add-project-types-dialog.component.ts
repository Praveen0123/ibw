import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-project-types-dialog',
  templateUrl: './add-project-types-dialog.component.html',
  styleUrls: ['./add-project-types-dialog.component.scss']
})
export class AddProjectTypesDialogComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<AddProjectTypesDialogComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }

}
