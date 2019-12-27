import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MasterDataService } from '../../MasterDataService/master-data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-potential-level-dialog',
  templateUrl: './add-potential-level-dialog.component.html',
  styleUrls: ['./add-potential-level-dialog.component.scss']
})
export class AddPotentialLevelDialogComponent implements OnInit {
  sessionDetails: any;
  potentialLevelForm: FormGroup;
  isEdit: boolean;
  colorCode:string
  constructor(public dialogRef: MatDialogRef<AddPotentialLevelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _masterDataService: MasterDataService,
    private _fb:FormBuilder) { 
      this.sessionDetails = JSON.parse(localStorage.getItem('userloginsession'));
      this.potentialLevelForm = this._fb.group({
        'potentialLevelId': [null],
        'potentialLevelName': [null, Validators.compose([Validators.required])],
        'colorCode': [null, Validators.compose([Validators.required])],
        'status': [null],
        'createdBy': [this.sessionDetails['UserDetails']['int_user_id']],
        'modifiedBy': [this.sessionDetails['UserDetails']['int_user_id']]
      });
      if (this.data != null) {
        this.isEdit = true;
        this.fnEditPotentialLevel(this.data);
      }
      else{
        this.isEdit = false;
      }
    }

    onSubmitPotentialForm(values) {
      if(this.potentialLevelForm.valid){
        this._masterDataService.upsertPotentialLevel(values).subscribe(
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
        this.potentialLevelForm.controls.potentialLevelName.markAsTouched();
        this.potentialLevelForm.controls.colorCode.markAsTouched();
      }
    }
    onlyAlphabets(event) {
      var k = event.charCode;
      return (((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32)));
    }
    fnEditPotentialLevel(data) {
      this.potentialLevelForm.reset();
      this.potentialLevelForm.controls['potentialLevelId'].setValue(data.potentialLevelId);
      this.potentialLevelForm.controls['potentialLevelName'].setValue(data.potentialLevelName);
      this.potentialLevelForm.controls['colorCode'].setValue(data.colorCode);
      this.potentialLevelForm.controls['status'].setValue(data.status);
    }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}