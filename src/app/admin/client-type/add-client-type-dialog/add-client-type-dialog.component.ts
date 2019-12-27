import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-client-type-dialog',
  templateUrl: './add-client-type-dialog.component.html',
  styleUrls: ['./add-client-type-dialog.component.scss']
})
export class AddClientTypeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddClientTypeDialogComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}
