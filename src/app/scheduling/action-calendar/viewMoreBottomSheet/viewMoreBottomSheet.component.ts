import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-viewMoreBottomSheet',
  templateUrl: './viewMoreBottomSheet.component.html',
  styleUrls: ['./viewMoreBottomSheet.component.scss']
})
export class ViewMoreBottomSheetComponent implements OnInit {

ActionData:any;
constructor(private _bottomSheetRef: MatBottomSheetRef<ViewMoreBottomSheetComponent>,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}
  ngOnInit() {
  }
  close(): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
