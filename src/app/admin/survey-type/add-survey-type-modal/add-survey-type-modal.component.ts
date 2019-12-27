import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-survey-type-modal',
  templateUrl: './add-survey-type-modal.component.html',
  styleUrls: ['./add-survey-type-modal.component.scss']
})
export class AddSurveyTypeModalComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<AddSurveyTypeModalComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}