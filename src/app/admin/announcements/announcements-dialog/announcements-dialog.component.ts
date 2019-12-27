import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-announcements-dialog',
  templateUrl: './announcements-dialog.component.html',
  styleUrls: ['./announcements-dialog.component.scss']
})
export class AnnouncementsDialogComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AnnouncementsDialogComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}
