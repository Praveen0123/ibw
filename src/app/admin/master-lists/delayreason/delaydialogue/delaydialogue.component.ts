import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delaydialogue',
  templateUrl: './delaydialogue.component.html',
  styleUrls: ['./delaydialogue.component.scss']
})
export class DelaydialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DelaydialogueComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}
