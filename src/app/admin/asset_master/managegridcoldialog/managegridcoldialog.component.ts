import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ManageService } from 'src/app/manage/manage.service';

@Component({
  selector: 'app-managegridcoldialog',
  templateUrl: './managegridcoldialog.component.html',
  styleUrls: ['./managegridcoldialog.component.scss']
})
export class ManagegridcoldialogComponent implements OnInit {
  paramId: any;
  gridColumns = [];
  session: any;
  gridArray : string[];
  gridForm: FormGroup;
  constructor(public dialog: MatDialogRef<ManagegridcoldialogComponent>, private _fb: FormBuilder, public manageservice: ManageService ) {
    this.initializeForm();
    this.session = JSON.parse(localStorage.getItem("userloginsession"));
   }

  ngOnInit() {
    this.getGridColumns();
  }
  
  getGridColumns(){
    this.manageservice.GetGridColumns(this.session['UserDetails'].int_user_id, 'Manage_master_data').subscribe(
        data => {
          if( data['Data'] != null){
            this.gridColumns = data['Data'];
          }
            this.initializeForm();
        }
    )};

    initializeForm(){
      this.gridForm = this._fb.group({
        'AssetNumber': [this.gridColumns.indexOf('Asset Number') > -1 || this.gridColumns.length==0],
        'AssetCategory': [this.gridColumns.indexOf('Asset Category') > -1 || this.gridColumns.length==0],
        'AssetName': [this.gridColumns.indexOf('Asset Name') > -1 || this.gridColumns.length==0],
        'PurchaseDate': [this.gridColumns.indexOf('Purchase Date') > -1 || this.gridColumns.length==0],
        'Make': [this.gridColumns.indexOf('Make') > -1 || this.gridColumns.length==0],
        'Model':[this.gridColumns.indexOf('Model') > -1 || this.gridColumns.length==0],
        'SerialNumber':[this.gridColumns.indexOf('Serial Number') > -1 || this.gridColumns.length==0],
        'PurchasePrice':[this.gridColumns.indexOf('Purchase Price') > -1 || this.gridColumns.length==0],
        'AssetTimeline':[this.gridColumns.indexOf('Asset Timeline') > -1 || this.gridColumns.length==0],
        'AssignedTo':[this.gridColumns.indexOf('Assigned To') > -1 || this.gridColumns.length==0],
        'Description':[this.gridColumns.indexOf('Description') > -1 || this.gridColumns.length==0],
        'Status':[this.gridColumns.indexOf('Status') > -1 || this.gridColumns.length==0],
    });
    }

   ConfigureGrid(values){
     console.log("values:", values);
     this.gridArray = [];
     if(values['AssetNumber']){
      this.gridArray.push('Asset Number');
     }
     if(values['AssetCategory']){
      this.gridArray.push('Asset Category');
     }
     if(values['AssetName']){
      this.gridArray.push('Asset Name');
     }
     if(values['PurchaseDate']){
      this.gridArray.push('Purchase Date');
     }
     if(values['Make']){
      this.gridArray.push('Make');
     }
     if(values['Model']){
      this.gridArray.push('Model');
     }
     if(values['SerialNumber']){
      this.gridArray.push('Serial Number');
     }
     if(values['PurchasePrice']){
      this.gridArray.push('Purchase Price');
     }
     if(values['AssetTimeline']){
      this.gridArray.push('Asset Timeline');
     }
     if(values['AssignedTo']){
      this.gridArray.push('Assigned To');
     }
     if(values['Description']){
      this.gridArray.push('Description');
     }
     if(values['Status']){
      this.gridArray.push('Status');
     }
     this.gridArray.push('Manage master data');
     this.gridArray.push(String(this.session['UserDetails'].int_user_id));

     this.manageservice.SaveGridColumns(this.gridArray).subscribe(
       data=>{
        if(data['Status'] == true){
          this.dialog.close();
        }
       },
       error=>{
         console.log(error);
       }
     );
   }


  close(): void {
    this.dialog.close();
  }

}
