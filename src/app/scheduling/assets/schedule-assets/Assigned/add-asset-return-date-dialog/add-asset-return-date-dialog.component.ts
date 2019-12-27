import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-add-asset-return-date-dialog',
  templateUrl: './add-asset-return-date-dialog.component.html',
  styleUrls: ['./add-asset-return-date-dialog.component.scss']
})
export class AddAssetReturnDateDialogComponent implements OnInit {
  @ViewChild('childModal', { }) childModal: ModalDirective;
  isReturned:boolean=false;
  showChildModal() {
    this.childModal.show(); 
  }
 
  hideChildModal(){
    this.childModal.hide();
  }
  constructor(public dialogRef: MatDialogRef<AddAssetReturnDateDialogComponent>,) { }
  // data=[
  //   {returnedDate:'-',isReturned:false,status:true,title:'Cosmolabe is assigned to George Smith.',partyCheif:'George Smith',fieldAssistantsCount:2,fieldAssistantsList:'Tom Kin, Fernando Jack',assetsScheduledCount:5,assetsList:'Cosmolabe',fromDate:'2019-06-10',toDate:'2019-06-12'},
  //   {returnedDate:'-',isReturned:false,status:false,title:'Graphometer is assigned to Maxwell Martin.',partyCheif:'Maxwell Martin',fieldAssistantsCount:1,fieldAssistantsList:'James Smith',assetsScheduledCount:4,assetsList:'Graphometer',fromDate:'2019-06-09',toDate:'2019-06-12'},
  //   {returnedDate:'-',isReturned:false,status:true,title:'Total station is assigned to Thomas Brown.',partyCheif:'Thomas Brown',fieldAssistantsCount:2,fieldAssistantsList:'Michael Smith, Maria Garcia',assetsScheduledCount:5,assetsList:'Total station',fromDate:'2019-06-09',toDate:'2019-06-13'},
  //   {returnedDate:'2019-06-11',isReturned:true,status:true,title:'Tachymeter is assigned to William Tremblay.',partyCheif:'William Tremblay',fieldAssistantsCount:2,fieldAssistantsList:'David Smith, Maria Rodriguez',assetsScheduledCount:4,assetsList:'Tachymeter',fromDate:'2019-06-11',toDate:'-'}
  // ]
  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}