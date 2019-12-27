import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { AssetCategoryDataType } from '../asset-categories.component';
import { eliminateSpaces } from '../../../theme/utils/app-validators';

@Component({
  selector: 'app-add-asset-category-dialog',
  templateUrl: './add-asset-category-dialog.component.html',
  styleUrls: ['./add-asset-category-dialog.component.scss']
})
export class AddAssetCategoryDialogComponent implements OnInit {
  assetCategoryForm: FormGroup;
  categoryName: any;

  constructor(public matdialogref: MatDialogRef<AddAssetCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AssetCategoryDataType,
    private _fb: FormBuilder, private _snackBar: MatSnackBar) {

    this.assetCategoryForm = this._fb.group({
      'AssetCategoryId': '',
      'AssetCategoryName': [null, Validators.compose([Validators.required,eliminateSpaces])],
      'AssetCategoryPrefix': [null, Validators.compose([Validators.required,eliminateSpaces])],
      'UserId': 1
    })
  }

  ngOnInit() {
    if (this.data != null) {
      this.assetCategoryForm.controls['AssetCategoryId'].setValue(this.data.AssetCategoryId);
      this.assetCategoryForm.controls['AssetCategoryName'].setValue(this.data.AssetCategoryName);
      this.assetCategoryForm.controls['AssetCategoryPrefix'].setValue(this.data.AssetCategoryPrefix);
    }
    else {
      this.data = new AssetCategoryDataType();
    }
  }
  onlyAlphabets(event) {
    var k = event.charCode;
    return (((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32)));
  }
  submitAssetCategoryData(formValues) {
    if (this.assetCategoryForm.valid) {
      if (formValues.AssetCategoryName == '' && formValues.AssetCategoryPrefix == '') {
        this._snackBar.open('Please enter valid input', '', { duration: 3000, panelClass: 'redSnackBar' })
      }
      else {
        this.matdialogref.close(formValues);
      }

    }
    else {
      this.assetCategoryForm.controls['AssetCategoryName'].markAsTouched();
      this.assetCategoryForm.controls['AssetCategoryPrefix'].markAsTouched();
    }
  }
  close(): void {
    this.matdialogref.close();
  }
}