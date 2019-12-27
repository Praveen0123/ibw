import { Component, OnInit } from '@angular/core';
import { AssetMasterDataServiceService } from '../../asset_master/asset-master-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-excel-records',
  templateUrl: './display-excel-records.component.html',
  styleUrls: ['./display-excel-records.component.scss']
})
export class DisplayExcelRecordsComponent implements OnInit {
ValidData: any;
IvalidData:any;

  constructor(private _assetMasterData: AssetMasterDataServiceService, private router:Router) { }

  ngOnInit() {
    this._assetMasterData.currentData.subscribe(data => {
      this.ValidData = data['Valid'];
      this.IvalidData = data['Invalid']

     console.log(this.ValidData,'this.ValidData at excel component')
     console.log(this.IvalidData,'this.IvalidData at excel component')
     
    })
  }
  errorModalToggle(){
    this.router.navigate(['/IBW/admin/master-data/asset_master']);
  }
  submitBulkUpload(){

  }
}
