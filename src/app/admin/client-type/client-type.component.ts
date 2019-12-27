import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddClientTypeDialogComponent } from './add-client-type-dialog/add-client-type-dialog.component';
import { CommonMasterDataDialogComponent } from '../master-data/common-master-data-dialog/common-master-data-dialog.component';
import { CommonMasterData } from '../master-data/master-data.component';
import { MasterDataService } from '../master-data.service';
import { DeleteConfirmDailogComponent } from '../../shared/delete-confirm-dailog/delete-confirm-dailog.component';

@Component({
    selector: 'app-client-type',
    templateUrl: './client-type.component.html',
    styleUrls: ['./client-type.component.scss']
})
export class ClientTypeComponent implements OnInit {
    ClientTypeData=[];

    constructor(public dialog: MatDialog, 
        private _commonMasterDataService : MasterDataService) { }

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
            console.log(data, 'client type')
            if (data != undefined) {
                data.CommonMasterDataCategory = 'Client Types'
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
            this.ClientTypeData =[]
          console.log(this.ClientTypeData, 'this.ClientTypeData at get call')
          if(data['Data'] != null){
            
          if(data['Data'].length > 0){
            this.ClientTypeData = data['Data'].filter(x => x.CommonMasterDataCategory == "Client Types");
          }
        }
          console.log(this.ClientTypeData)
        });
      }
    
      changeStatus(CommonMasterDataId) {
        let status = this.ClientTypeData.filter(x => x.CommonMasterDataId == CommonMasterDataId)[0]["IsActive"];
        console.log(status, 'staus value')
        status = !status
        this._commonMasterDataService.updateCommonMasterDataStatus(CommonMasterDataId, status).subscribe(
          data => {
            this.getMasterData();
          }
        )
      }
      
    
      deleteKanbanStage(CommonMasterDataId:number) {
        let DeleteDialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
          data:CommonMasterDataId,
          height: 'auto',
          width: '600px',
          autoFocus: false
        });
        DeleteDialogRef.afterClosed().subscribe(id => {
          if(id != null ){

            this._commonMasterDataService.deleteCommonMasterData(id, 'Client Types').subscribe(
              data => {
console.log(this.ClientTypeData, 'this.ClientTypeData before get call')
                this.getMasterData();


              }
            )
          }
        });
    
      }
//Function to filter data
StatusFilter(value) {

    //here values are static 
    //0 for all
    //1 for Active
    //2 for Inactive

    if (value == 1) {
        this._commonMasterDataService.getCommonMasterData().subscribe(data => {
            this.ClientTypeData = data['Data'];
            this.ClientTypeData = this.ClientTypeData.filter(x => x.IsActive == true)
            console.log(this.ClientTypeData, 'true')
        });
    }
    else if (value == 2) {
        this._commonMasterDataService.getCommonMasterData().subscribe(data => {
            this.ClientTypeData = data['Data'];
            this.ClientTypeData = this.ClientTypeData.filter(x => x.IsActive == false)
            console.log(this.ClientTypeData, 'false')
        })
    }
    else {
        this.getMasterData()
    }
}


}
