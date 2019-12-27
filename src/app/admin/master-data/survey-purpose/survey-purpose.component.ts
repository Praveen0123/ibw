import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddsurveypurposedailogComponent } from './addsurveypurposedailog/addsurveypurposedailog.component';
import { DeleteConfirmDailogComponent } from '../../../shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { CommonMasterData } from '../master-data.component';
import { CommonMasterDataDialogComponent } from '../common-master-data-dialog/common-master-data-dialog.component';
import { MasterDataService } from '../../master-data.service';

@Component({
  selector: 'app-survey-purpose',
  templateUrl: './survey-purpose.component.html',
  styleUrls: ['./survey-purpose.component.scss']
})
export class SurveyPurposeComponent implements OnInit {

  Data = [];

  constructor(public dialog: MatDialog,
    private _commonMasterDataService: MasterDataService) { }

  ngOnInit() {
    this.getMasterData()
  }

  public AddData(commonMasterData, commonString) {
    let dialogRef = this.dialog.open(CommonMasterDataDialogComponent, {
      height: 'auto',
      width: '600px',
      data: { commonMasterData: commonMasterData, commonString: commonString }
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data, 'step data')
      if (data != undefined) {
        data.CommonMasterDataCategory = 'Survey Purpose'
        this.addMasterData(data)

      }

    });
  }

  public addMasterData(CommonMasterDataName: CommonMasterData) {
    this._commonMasterDataService.addCommonMasterData(CommonMasterDataName).subscribe(data => {

      console.log(data, "CommonMasterDataName");
      this.getMasterData()
    },
      error => {
        console.log(error);
      }
    );
  }

  public getMasterData() {
    this._commonMasterDataService.getCommonMasterData().subscribe(data => {
      this.Data = []
      console.log(this.Data, 'this.Data at get call')
      if (data['Data'] != null) {

        if (data['Data'].length > 0) {
          this.Data = data['Data'].filter(x => x.CommonMasterDataCategory == "Survey Purpose");
        }
      }
      console.log(this.Data)
    });
  }

  public changeStatus(CommonMasterDataId) {
    let status = this.Data.filter(x => x.CommonMasterDataId == CommonMasterDataId)[0]["IsActive"];
    console.log(status, 'staus value')
    status = !status
    this._commonMasterDataService.updateCommonMasterDataStatus(CommonMasterDataId, status).subscribe(
      data => {
        this.getMasterData();
      }
    )
  }

  public deleteKanbanStage(CommonMasterDataId: number) {
    let DeleteDialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      data: CommonMasterDataId,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    DeleteDialogRef.afterClosed().subscribe(id => {
      if (id != null) {

        this._commonMasterDataService.deleteCommonMasterData(id,"Survey Purposes").subscribe(
          data => {
            console.log(this.Data, 'this.Data before get call')
            this.getMasterData();
          }
        )
      }
    });

  }
}
