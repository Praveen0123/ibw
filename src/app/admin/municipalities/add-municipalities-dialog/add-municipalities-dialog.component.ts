import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { MasterDataService } from '../../MasterDataService/master-data.service';

@Component({
  selector: 'app-add-municipalities-dialog',
  templateUrl: './add-municipalities-dialog.component.html',
  styleUrls: ['./add-municipalities-dialog.component.scss']
})
export class AddMunicipalitiesDialogComponent implements OnInit {
  municipalityupsertForm: FormGroup;
  sessionDetails: any[];
  isEdit: boolean;


  constructor(public dialogRef: MatDialogRef<AddMunicipalitiesDialogComponent>,
     private _fb: FormBuilder,
     @Inject(MAT_DIALOG_DATA) public data: any,
     private _masterDataService: MasterDataService) { 
      this.sessionDetails = JSON.parse(localStorage.getItem('userloginsession'));

    this.municipalityupsertForm = this._fb.group({
      'municipalityId': [null],
      'municipalityName': [null, Validators.compose([Validators.required])],
      'status': [null],
      'createdBy': [this.sessionDetails['UserDetails']['int_user_id']],
      'modifiedBy': [this.sessionDetails['UserDetails']['int_user_id']]
    });
    if (this.data != null) {
      this.isEdit = true;
      this.fnEditMunicipality(this.data);
    }
    else{
      this.isEdit = false;
    }
  }

  ngOnInit() {
  }
  onlyAlphabets(event) {
    var k = event.charCode;
    return (((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32)));
  }
  fnEditMunicipality(data) {
    this.municipalityupsertForm.reset();
    this.municipalityupsertForm.controls['municipalityId'].setValue(data.municipalityId);
    this.municipalityupsertForm.controls['municipalityName'].setValue(data.municipalityName);
    this.municipalityupsertForm.controls['status'].setValue(data.status);
  }

  onSubmitMunicipalityForm(values) {
    if(this.municipalityupsertForm.valid){
      this._masterDataService.upsertMunicipality(values).subscribe(
        data => {
          console.log(data);
          if(data['Status'] == true){
            this.dialogRef.close();
          }
        },
        error => {
          console.log(error);
        }
      )
    }
    else{
      this.municipalityupsertForm.controls.municipalityName.markAsTouched();
    }

  }

  close(): void {
    this.dialogRef.close();
  }


}