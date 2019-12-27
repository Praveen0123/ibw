import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '../../../../../node_modules/@angular/forms';
import { expenseCodeDataType } from '../expense-codes.component';
import { AdminService } from '../../admin.service';
import { eliminateSpaces } from '../../../theme/utils/app-validators';

@Component({
  selector: 'app-add-expense-code-dialog',
  templateUrl: './add-expense-code-dialog.component.html',
  styleUrls: ['./add-expense-code-dialog.component.scss']
})
export class AddExpenseCodeDialogComponent implements OnInit {

  expenseCodeForm: FormGroup;
  expenseUnits: any;
  expenseLimitTypes: any;

  constructor(public dialogRef: MatDialogRef<AddExpenseCodeDialogComponent>, private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data, private _snackBar: MatSnackBar) {

    this.expenseCodeForm = this._fb.group({
      'ExpenseCodeId': 0,
      'ExpenseCode': [null, Validators.compose([Validators.required, eliminateSpaces])],
      'ExpenseUnitId': null,
      'ExpenseLimitTypeId': null,
      'ExpenseLimitAmount': null,
      'Rate': null
    })
    const control = new FormControl(2, Validators.min(3));
    console.log(control.errors)
  }

  onlyNumbers(event) {
    var k;
    k=event.charCode;
    return ((k > 47 && k < 58));
  }


  ngOnInit() {
    if (this.data) {
      if (this.data['expenseCode']) {
        this.expenseCodeForm.controls['ExpenseCodeId'].setValue(this.data['expenseCode'].ExpenseCodeId);
        this.expenseCodeForm.controls['ExpenseCode'].setValue(this.data['expenseCode'].ExpenseCode,eliminateSpaces);
        this.expenseCodeForm.controls['ExpenseUnitId'].setValue(this.data['expenseCode'].ExpenseUnitId);
        this.expenseCodeForm.controls['ExpenseLimitTypeId'].setValue(this.data['expenseCode'].ExpenseLimitTypeId);
        this.expenseCodeForm.controls['ExpenseLimitAmount'].setValue(this.data['expenseCode'].ExpenseLimitAmount);
        this.expenseCodeForm.controls['Rate'].setValue(this.data['expenseCode'].Rate);
      }
      else {
        this.data['expenseCode'] = new expenseCodeDataType();
      }
      if (this.data['expenseUnits']) {
        this.expenseUnits = this.data['expenseUnits']
      }
      if (this.data['expenseLimitTypes']) {
        this.expenseLimitTypes = this.data['expenseLimitTypes']
      }

    }
    else {
      this.data['expenseCode'] = new expenseCodeDataType();
    }
  }

  submitExpenseCodeForm(formValues) {
    if (this.expenseCodeForm.valid) {
      if (this.expenseCodeForm.controls['ExpenseLimitAmount'].value && this.expenseCodeForm.controls['ExpenseLimitAmount'].value < 1) {
        this._snackBar.open('Numeric values cannot be less than 1', '', { duration: 3000, panelClass: 'redSnackBar' })
      }
      else if (this.expenseCodeForm.controls['Rate'].value && this.expenseCodeForm.controls['Rate'].value < 1) {
        this._snackBar.open('Numeric values cannot be less than 1', '', { duration: 3000, panelClass: 'redSnackBar' })
      }
      else {
        this.dialogRef.close(formValues)
      }
    }
    else {
      this.expenseCodeForm.controls['ExpenseCode'].markAsTouched();
    }
  }



  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }



}