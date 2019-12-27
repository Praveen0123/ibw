import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { Lookup, CodeMaster } from '../lookup.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-lookup-dialog',
  templateUrl: './add-lookup-dialog.component.html',
  styleUrls: ['./add-lookup-dialog.component.scss'],
  providers: [AlertService]
})
export class AddLookupDialogComponent implements OnInit {
lookup:Lookup;
codeMaster: Array<CodeMaster>;
lookupForm: FormGroup;  
  constructor(public dialogRef: MatDialogRef<AddLookupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private _fb: FormBuilder,private _adminService:AdminService) { 
      this.lookup = this.data.lookup;
      this.codeMaster= this.data.codemaster;
      this.initAssetForm(this.lookup);
   }

  
  ngOnInit() {
    
  }
  private initAssetForm(lookup: Lookup) {
    //Add lookup Form
    this.lookupForm = this._fb.group({
      'LookupId': [lookup.LookupId],
      'LookupName': [lookup.LookupName, Validators.compose([Validators.required])],
      'CodeMasterId': [lookup.CodeMasterId,  Validators.compose([Validators.required])],
      'CodeMasterName': [lookup.CodeMasterName]
    })


  }
  close(): void {
    this.dialogRef.close();
  }
  onSubmitLookupForm(formValues) {
    console.log(formValues)
    if (this.lookupForm.valid) {
      console.log(formValues)
      this._adminService.UpsertLookup(formValues).subscribe(
        data => {
          console.log(data, 'lookup Upsert Data');
          if(data['Status'] == true){
            this.dialogRef.close();
          }
          else{
            this.lookupForm.controls.LookupName.markAsTouched();
          }
        }
      )
    }
    else {
      this.lookupForm.controls.CodeMasterId.markAsTouched();
      this.lookupForm.controls.LookupName.markAsTouched();
    }
  }
  

}
