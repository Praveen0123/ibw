import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';

export class Asset {
  categoryList: Array<any>;
  AssetValue: AssetValue;
}

export class AssetValue {
  assetId: number;
  CategoryId: number;
  Category: string;
  Number: string;
  Name: string;
  Make: string;
  Model: string;
  strPurchaseDate: string;
  Dealer: string;
  SerialNumber: string;
  assetDescription: string;
  PurchasePrice: string;
  bt_delete: boolean;
  bt_status: boolean;
  CreatedBy: number;
}

@Component({
  selector: 'app-add-asset-dialog',
  templateUrl: './add-asset-dialog.component.html',
  styleUrls: ['./add-asset-dialog.component.scss']
})
export class AddAssetDialogComponent implements OnInit {
  AssetForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddAssetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Asset,
    private _fb: FormBuilder, private _adminService: AdminService, ) {
    console.log(data);
    console.log('add asset constructor');
  }
  Categories: Array<any> = [];
  ngOnInit() {
    console.log('add asset dialog');
    this.Categories = this.data.categoryList;
    this.initAssetForm(this.data.AssetValue);
  }
  close(): void {
    this.dialogRef.close();
  }
  private initAssetForm(asset: AssetValue) {
    //Add asset Form
    this.AssetForm = this._fb.group({
      'assetId': asset.assetId,
      'Number': [asset.Number, Validators.compose([Validators.required])],
      'Category': [asset.Category],
      'CategoryId': [asset.CategoryId, Validators.compose([Validators.required])],
      'Name': [asset.Name, Validators.compose([Validators.required])],
      'Make': [asset.Make, Validators.compose([Validators.required])],
      'Model': [asset.Model, Validators.compose([Validators.required])],
      'strPurchaseDate': [asset.strPurchaseDate, Validators.compose([Validators.required])],
      'Dealer': [asset.Dealer, Validators.compose([Validators.required])],
      'PurchasePrice': [asset.PurchasePrice, Validators.compose([Validators.required])],
      'SerialNumber': [asset.SerialNumber, Validators.compose([Validators.required])],
      'assetDescription': [asset.assetDescription, Validators.compose([Validators.required])],
      'CreatedBy': [asset.CreatedBy]
    })


  }
  onCategoryChangeEvent(event) {
    let target = event.source.selected._element.nativeElement;

    let catId: number = event.value;
    let catText: string = target.innerText;
    console.log(catId, catText, 'component serial');
    this._adminService.getAssetCategorySerial(catText, catId).subscribe(data => {
      if (data['Status'] == true) {
        this.AssetForm.controls['Number'].setValue(data['Data']);
        console.log(data['Data'])
        console.log(this.AssetForm.controls.Number.value)
      }
    },
      error => {
        console.log(error);
      })
  }
  onlyAlphabets(event) {
    var k = event.charCode;
    return (((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32)));
  }
  isNumberKey(evt, obj) {

    var charCode = (evt.which) ? evt.which : evt.keyCode
    var value = evt.target.value;
    var dotcontains = value.indexOf(".") != -1;
    if (dotcontains)
      if (charCode == 46) return false;
    if (charCode == 46) return true;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }
  onSubmitAssetForm(formValues) {
    console.log(formValues)
    if (this.AssetForm.valid) {
      console.log(formValues)
      this._adminService.UpsertAsset(formValues).subscribe(
        data => {
          console.log(data, 'asset Upsert Data');
          if(data['Status'] == true){
            this.dialogRef.close();
          }
        }
      )
    }
    else {
      this.AssetForm.controls.Number.markAsTouched();
      this.AssetForm.controls.Category.markAsTouched();
      this.AssetForm.controls.CategoryId.markAsTouched();
      this.AssetForm.controls.Name.markAsTouched();
      this.AssetForm.controls.Make.markAsTouched();
      this.AssetForm.controls.Model.markAsTouched();
      this.AssetForm.controls.strPurchaseDate.markAsTouched();
      this.AssetForm.controls.Dealer.markAsTouched();
      this.AssetForm.controls.PurchasePrice.markAsTouched();
      this.AssetForm.controls.SerialNumber.markAsTouched();
      this.AssetForm.controls.assetDescription.markAsTouched();
    }
  }
}
