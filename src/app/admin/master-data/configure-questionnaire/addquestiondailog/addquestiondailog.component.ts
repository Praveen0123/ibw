import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../../../../node_modules/@angular/forms';
import { ConfigQuestionDataType } from '../configure-questionnaire.component';
import { emailValidator, eliminateSpaces } from '../../../../theme/utils/app-validators';

@Component({
  selector: 'app-addquestiondailog',
  templateUrl: './addquestiondailog.component.html',
  styleUrls: ['./addquestiondailog.component.scss']
})
export class AddquestiondailogComponent implements OnInit {

  configQuestionForm: FormGroup
  surveyPurposes = [];

  constructor(public dialogRef: MatDialogRef<AddquestiondailogComponent>,
    private _fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data,
    private _snackBar: MatSnackBar) {
    this.formBuilding();
    this.setForm();
  }
  formBuilding() {
    this.configQuestionForm = this._fb.group({
      'ConfigQuestionId': 0,
      'SurveyPurposeId': [null, Validators.compose([Validators.required])],
      'ConfigQuestion': [null, Validators.compose([Validators.required,eliminateSpaces])],
    })
  }

  ngOnInit() {

  }

  setForm() {
    if (this.data) {
      if (this.data['configQuestion']) {
        this.configQuestionForm.controls['ConfigQuestionId'].setValue(this.data['configQuestion'].ConfigQuestionId);
        this.configQuestionForm.controls['SurveyPurposeId'].setValue(this.data['configQuestion'].SurveyPurposeId);
        this.configQuestionForm.controls['ConfigQuestion'].setValue(this.data['configQuestion'].ConfigQuestion);
      }
      else {
        this.data['configQuestion'] = new ConfigQuestionDataType();
      }

      if (this.data['surveyPurposes']) {
        this.surveyPurposes = this.data['surveyPurposes']
      }
    }
    else {
      this.data['configQuestion'] = new ConfigQuestionDataType();
    }
  }

  submitConfigQuestionForm(formValues) {
    if (this.configQuestionForm.valid) {
      if (this.configQuestionForm.controls['SurveyPurposeId'].value && this.configQuestionForm.controls['SurveyPurposeId'].value < 1) {
        this._snackBar.open('Please select Survey Purpose', '', { duration: 3000, panelClass: 'redSnackBar' })
      }
      else if (this.configQuestionForm.controls['ConfigQuestion'].value.trim() === "") {
        this._snackBar.open('Please enter a valid question', '', { duration: 3000, panelClass: 'redSnackBar' })
      }
      else {
        this.dialogRef.close(formValues)
      }
    }
    else {
      this.configQuestionForm.controls['SurveyPurposeId'].markAsTouched();
      this.configQuestionForm.controls['ConfigQuestion'].markAsTouched();

    }
  }

  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }







}
