import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-hours-dialog',
  templateUrl: './hours-dialog.component.html',
  styleUrls: ['./hours-dialog.component.scss']
})
export class HoursDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HoursDialogComponent>) { }

  ngOnInit() {
  }
    close(): void {
      this.dialogRef.close();
    }
}
