import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'quote-update-dialog',
  templateUrl: './quote-update-dialog.component.html',
  styleUrls: ['./quote-update-dialog.component.scss'],
  providers: []
})
export class QuoteUpdateDialogComponent implements OnInit {
  public dateTime1: Date;
  modeOptions = ["Task","Asset"];
  modeOptionSelected: any;
  //startDate = new Date(1990, 0, 1);
  onModeOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }
  communicationOptions = ["Field","Office"];
  communicationOptionSelected: any;
  //startDate = new Date(1990, 0, 1);
  onCommunicationOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }

  constructor(public dialogRef: MatDialogRef<QuoteUpdateDialogComponent>,@Inject(MAT_DIALOG_DATA) public action: any) { 
    console.log(this.action);
  }

  
  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  saveInfo() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
