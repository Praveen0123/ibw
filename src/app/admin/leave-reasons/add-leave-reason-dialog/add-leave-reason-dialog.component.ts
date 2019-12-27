import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { eliminateSpaces } from '../../../theme/utils/app-validators';
import { leaveReasonDataType } from '../leave-reasons.component';

@Component({
  selector: 'app-add-leave-reason-dialog',
  templateUrl: './add-leave-reason-dialog.component.html',
  styleUrls: ['./add-leave-reason-dialog.component.scss']
})
export class AddLeaveReasonDialogComponent implements OnInit {

  leaveReasonForm: FormGroup;
  typeOfAbsence = [];
  constructor(public dialogRef: MatDialogRef<AddLeaveReasonDialogComponent>,
    private _fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.CreateForm();
  }

  ngOnInit() {
    this.setForm()
  }

  CreateForm() {
    this.leaveReasonForm = this._fb.group({
      'LeaveReasonId': null,
      'TypeOfAbsenceId': [null, Validators.compose([Validators.required])],
      'LeaveReason': [null, Validators.compose([Validators.required, eliminateSpaces])]
    })
  }

  setForm() {
    if (this.data) {
      if (this.data['LeaveReason']) {
        this.leaveReasonForm.controls['LeaveReasonId'].setValue(this.data['LeaveReason'].LeaveReasonId);
        this.leaveReasonForm.controls['TypeOfAbsenceId'].setValue(this.data['LeaveReason'].TypeOfAbsenceId);
        this.leaveReasonForm.controls['LeaveReason'].setValue(this.data['LeaveReason'].LeaveReason);
      }
      else {
        this.data['LeaveReason'] = new leaveReasonDataType();
      }
      if (this.data['typeOfAbsenceList']) {
        this.typeOfAbsence = this.data['typeOfAbsenceList']
      }
    }
    else {
      this.data['LeaveReason'] = new leaveReasonDataType();
    }
  }

  submitAddReasonForm(formValues) {
    if (this.leaveReasonForm.valid) {
      this.dialogRef.close(formValues)
    }
    else {
      this.leaveReasonForm.controls['TypeOfAbsenceId'].markAsTouched();
      this.leaveReasonForm.controls['LeaveReason'].markAsTouched();
    }
  }


  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}
