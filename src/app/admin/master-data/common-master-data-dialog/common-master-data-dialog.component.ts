import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { CommonMasterData } from '../master-data.component';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { eliminateSpaces } from '../../../theme/utils/app-validators';

@Component({
  selector: 'app-common-master-data-dialog',
  templateUrl: './common-master-data-dialog.component.html',
  styleUrls: ['./common-master-data-dialog.component.scss']
})
export class CommonMasterDataDialogComponent implements OnInit {
  commonMasterDataForm: FormGroup;
  categoryName: any;

  constructor(public matdialogref : MatDialogRef<CommonMasterDataDialogComponent>,
  @Inject (MAT_DIALOG_DATA) public data,
private _fb : FormBuilder) { 
  this.commonMasterDataForm = this._fb.group({
    'CommonMasterDataId':'',
    'CommonMasterDataName': [null, Validators.compose([Validators.required,eliminateSpaces])],
    'CommonMasterDataCategory':'',
    'UserId':1
  })
}

ngOnInit() {
  if(this.data){
    if (this.data['commonMasterData']) {
      this.commonMasterDataForm.controls['CommonMasterDataId'].setValue(this.data['commonMasterData'].CommonMasterDataId);
      this.commonMasterDataForm.controls['CommonMasterDataName'].setValue(this.data['commonMasterData'].CommonMasterDataName);
      this.commonMasterDataForm.controls['CommonMasterDataCategory'].setValue(this.data['commonMasterData'].CommonMasterDataCategory);
    }
    else {
      this.data['commonMasterData'] = new CommonMasterData();
    }
    if(this.data['commonString'] != null || this.data['commonString'] != ''){
      this.categoryName = this.data['commonString']
     }
  }
  
}

submitCommonMasterData(formValues) {
  if (this.commonMasterDataForm.valid) {
    this.matdialogref.close(formValues);
  }
  else {
    this.commonMasterDataForm.controls['CommonMasterDataName'].markAsTouched();
  }
}

close(): void {
  this.matdialogref.close();
}
onlyAlphabets(event) {
  var k = event.charCode;
  return (((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32)));
}
}

