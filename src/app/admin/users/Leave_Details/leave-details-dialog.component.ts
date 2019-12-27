import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-leave-details-dialog',
  templateUrl: './leave-details-dialog.component.html',
  styleUrls: ['./leave-details-dialog.component.scss'],
  providers: [AlertService]
})
export class LeaveDetailsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LeaveDetailsDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) {  }

  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  saveUser() {
   // this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
