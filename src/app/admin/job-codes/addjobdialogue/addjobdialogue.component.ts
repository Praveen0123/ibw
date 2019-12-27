import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { jobCodeDataType } from '../job-codes.component';
import { eliminateSpaces } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-addjobdialogue',
  templateUrl: './addjobdialogue.component.html',
  styleUrls: ['./addjobdialogue.component.scss']
})
export class AddjobdialogueComponent implements OnInit {

  clientsOptions = ["City Homes", "Delpark Homes", "Hydro One", "Sandbank Homes", "Valleymede Homes", "AECOM", "City of Pickering", "Stantec"];
  clientsOptionSelected: any;
  public dateTime1: Date;
  onClientsOptionsSelected(event) {
    console.log(event); //option value will be sent as event
  }
  projecttypeOptions = ["Legal", "Engineering", "Construction", "Internal"];

  contactOptions = ["Dwayne", "Dave", "Emily", "Joe", "Stephanie", "Laurie", "Other"];
  contactOptionSelected: any;


  pmOptions = ["Dwayne", "Dave"];
  pmOptionSelected: any;

  onPmOptionsSelected(event) {
    console.log(event); //option value will be sent as event
  }


  public jobCodeForm: FormGroup;

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<AddjobdialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public jobCode: jobCodeDataType,private _snackBar: MatSnackBar) {
    this.jobCodeForm = this.fb.group({
      'JobCodeId': null,
      'JobCode': [null, Validators.compose([Validators.required,eliminateSpaces])],
      'JobCodeTitle': [null, Validators.compose([Validators.required,eliminateSpaces])],
      'ChargeoutRate': [null, Validators.compose([Validators.required])],
      'IsActive': null,
      'IsDelete': null,
      'UserId': 1
    });

  }


  onlyNumbers(event) {
    var k;
    k=event.charCode;
    return (k > 47 && k < 58);
  }

  onlyAlphabets(event) {
    var k = event.charCode;
    return (((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32)));
  }
  submitJobCodeForm(formValues) {
    if (this.jobCodeForm.valid) {
      if (this.jobCodeForm.controls['ChargeoutRate'].value < 1) {
        this._snackBar.open('Numeric values cannot be less than 1', '', { duration: 3000, panelClass: 'redSnackBar' })
        this.jobCodeForm.controls['ChargeoutRate'].markAsDirty();
      } else {
        this.dialogRef.close(formValues);

      }

    }
    else {
      this.jobCodeForm.controls['JobCode'].markAsTouched();
      this.jobCodeForm.controls['JobCodeTitle'].markAsTouched();
      this.jobCodeForm.controls['ChargeoutRate'].markAsTouched();
    }
  }


  ngOnInit() {
    if (this.jobCode) {
      this.jobCodeForm.setValue(this.jobCode);
    }
    else {
      this.jobCode = new jobCodeDataType();
    }
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}


