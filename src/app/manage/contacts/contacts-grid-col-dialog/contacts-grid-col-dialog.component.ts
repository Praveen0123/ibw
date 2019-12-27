import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ClientsGridColDialogComponent } from '../../clients/clients-grid-col-dialog/clients-grid-col-dialog.component';

@Component({
  selector: 'app-contacts-grid-col-dialog',
  templateUrl: './contacts-grid-col-dialog.component.html',
  styleUrls: ['./contacts-grid-col-dialog.component.scss']
})
export class ContactsGridColDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClientsGridColDialogComponent>) { }


  close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
