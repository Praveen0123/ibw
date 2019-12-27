import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-assign-dialog',
  templateUrl: './asset-assign-dialog.component.html',
  styleUrls: ['./asset-assign-dialog.component.scss']
})
export class AssetAssignDialogComponent implements OnInit {




  constructor(public dialogRef: MatDialogRef<AssetAssignDialogComponent>, public router : Router) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveInfo() {
    this.dialogRef.close();
  }
}
