import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ManageService } from '../../manage.service';

@Component({
  selector: 'app-clients-grid-col-dialog',
  templateUrl: './clients-grid-col-dialog.component.html',
  styleUrls: ['./clients-grid-col-dialog.component.scss']
})
export class ClientsGridColDialogComponent implements OnInit {

  gridColumns = [];
  session: any;
  gridArray : string[];
  gridForm: FormGroup;
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  constructor(public dialogRef: MatDialogRef<ClientsGridColDialogComponent>, private _fb: FormBuilder, public manageservice: ManageService ) {
  this.initializeForm();
  this.session = JSON.parse(localStorage.getItem("userloginsession"));
   }

   getGridColumns(){
    this.manageservice.GetGridColumns(this.session['UserDetails'].int_user_id, 'Manage_clients').subscribe(
        data => {
          if( data['Data'] != null){
            this.gridColumns = data['Data'];
          }
            this.initializeForm();
        }
    )};

    initializeForm(){
      this.gridForm = this._fb.group({
        'clientCode': [this.gridColumns.indexOf('Client Code') > -1 || this.gridColumns.length==0],
        'clientName': [this.gridColumns.indexOf('Client Name') > -1 || this.gridColumns.length==0],
        'clientType': [this.gridColumns.indexOf('Client Type') > -1 || this.gridColumns.length==0],
        'clientAddress': [this.gridColumns.indexOf('Street Address') > -1 || this.gridColumns.length==0],
        'clientCity': [this.gridColumns.indexOf('City') > -1 || this.gridColumns.length==0],
        'clientMuncipality':[this.gridColumns.indexOf('Muncipality') > -1 || this.gridColumns.length==0],
        'clientPostalCode':[this.gridColumns.indexOf('Postal Code') > -1 || this.gridColumns.length==0],
        'clientPhone':[this.gridColumns.indexOf('Phone') > -1 || this.gridColumns.length==0],
        'clientActive':[this.gridColumns.indexOf('Active (Inactive) Quotes') > -1 || this.gridColumns.length==0],
        'clientInactive':[this.gridColumns.indexOf('Active (Inactive) Projects') > -1 || this.gridColumns.length==0],
        'clientContacts':[this.gridColumns.indexOf('Contact(s)') > -1 || this.gridColumns.length==0],
        'clientEmail':[this.gridColumns.indexOf('Email') > -1 || this.gridColumns.length==0],
        'clientCreatedDate':[this.gridColumns.indexOf('Date Created') > -1 || this.gridColumns.length==0],
        'clientActivityDate':[this.gridColumns.indexOf('Activity') > -1 || this.gridColumns.length==0],
        'clientbtFlag':[this.gridColumns.indexOf('Flag') > -1 || this.gridColumns.length==0],
        'clientStatus':[this.gridColumns.indexOf('Status') > -1 || this.gridColumns.length==0],
        'clientActions':[true]
    });
    }

   ConfigureGrid(values){
     console.log("values:", values);
     this.gridArray = [];
     if(values['clientCode']){
      this.gridArray.push('Client Code');
     }
     if(values['clientName']){
      this.gridArray.push('Client Name');
     }
     if(values['clientType']){
      this.gridArray.push('Client Type');
     }
     if(values['clientAddress']){
      this.gridArray.push('Street Address');
     }
     if(values['clientCity']){
      this.gridArray.push('City');
     }
     if(values['clientMuncipality']){
      this.gridArray.push('Muncipality');
     }
     if(values['clientPostalCode']){
      this.gridArray.push('Postal Code');
     }
     if(values['clientPhone']){
      this.gridArray.push('Phone');
     }
     if(values['clientActive']){
      this.gridArray.push('Active (Inactive) Quotes');
     }
     if(values['clientInactive']){
      this.gridArray.push('Active (Inactive) Projects');
     }
     if(values['clientContacts']){
      this.gridArray.push('Contact(s)');
     }
     if(values['clientEmail']){
      this.gridArray.push('Email');
     }
     if(values['clientCreatedDate']){
      this.gridArray.push('Date Created');
     }
     if(values['clientActivityDate']){
      this.gridArray.push('Activity');
     }
     if(values['clientbtFlag']){
      this.gridArray.push('Flag');
     }
     if(values['clientStatus']){
      this.gridArray.push('Status');
     }
     if(values['clientActions']){
      this.gridArray.push('Actions');
     }
     this.gridArray.push('Manage clients');
     this.gridArray.push(String(this.session['UserDetails'].int_user_id));
     console.log("gridColumns:", this.gridArray);
     this.manageservice.SaveGridColumns(this.gridArray).subscribe(
       data=>{
        if(data['Status'] == true){
          this.dialogRef.close();
        }
       },
       error=>{
         console.log(error);
       }
     );
   }


  close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.getGridColumns();
  }


}
