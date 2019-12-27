import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-phone-notes',
  templateUrl: './add-phone-notes.component.html',
  styleUrls: ['./add-phone-notes.component.scss']
})
export class AddPhoneNotesComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddPhoneNotesComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close('close');
  }

  save(): void {
    this.dialogRef.close('save');
  }
}
