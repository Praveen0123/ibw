import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-notesdialog',
  templateUrl: './notesdialog.component.html',
  styleUrls: ['./notesdialog.component.scss']
})
export class NotesdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NotesdialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number) {  }

  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.dialogRef.close();
  }

}
