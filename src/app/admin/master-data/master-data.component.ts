import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.scss']
})
export class MasterDataComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  isGridView:any;
  deleteUser(elementValues){
    }
    name:any;
  ngOnInit() {
  }

  tableList: Object[] = [
    { intLookupId: 2,code: 'User Type', options:'Admin, Staff,Role Owner, Bd'}
  ];

}


export class CommonMasterData{
  CommonMasterDataId:number;
  CommonMasterDataName:string;
  CommonMasterDataCategory:string;
  IsActive:boolean;
  UserId:number
}
