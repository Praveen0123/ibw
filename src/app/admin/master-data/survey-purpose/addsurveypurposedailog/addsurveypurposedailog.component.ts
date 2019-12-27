import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addsurveypurposedailog',
  templateUrl: './addsurveypurposedailog.component.html',
  styleUrls: ['./addsurveypurposedailog.component.scss']
})
export class AddsurveypurposedailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddsurveypurposedailogComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }

}
