import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddLookupDialogComponent } from './add-lookup-dialog/add-lookup-dialog.component';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../shared/services/alert.service';
import { AdminService } from '../admin.service';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { GlobalMethods,Permissions } from 'src/app/shared/GlobalMethods';

export class Lookup{
  CodeMasterId:number;
  CodeMasterName:string;
  LookupId:number;
  LookupName:string
}
export class CodeMaster{
  CodeMasterId:number;
  CodeMasterName:string;
}
@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss'],encapsulation: ViewEncapsulation.None,
  providers: [AlertService]
})
export class LookupComponent implements OnInit {
  permissions: Permissions;
  tableListLookup:Array<Lookup> = new Array<Lookup>();
  codeMaster:Array<CodeMaster> = new Array<CodeMaster>();
  constructor(public dialog: MatDialog, private _globalMethods:GlobalMethods,private _adminService:AdminService) { }

  ngOnInit() {
    this.getLookupOption();
    this.permissions = this._globalMethods.checkPermissions('Manage master data','Admin');
  }
 
  
  public getLookupOption()
  {
    this._adminService.getLookupOptions().subscribe(data=>
      {
        if(data['Status'] == true){
            console.log(data['Data']);
            this.tableListLookup = data['Data']['LookupOptions'];
            if(data['Data'] != null){
            this.codeMaster = data['Data']['CodeMaster'].map(x=> ({CodeMasterId:x.CodeMasterId, CodeMasterName:x.CodeMasterName}))
            this.codeMaster = this.codeMaster.filter((thing, i, arr) => {
              return arr.indexOf(arr.find(t => t.CodeMasterId === thing.CodeMasterId)) === i;
            });
            console.log(this.codeMaster);
            }
        }
      },
      error=>{
        console.log(error);
      }
      );
  }
  public openLookupDialog(data) {
    let dialogRef = this.dialog.open(AddLookupDialogComponent, {
        data: {lookup:data!=null?data:new Lookup() ,codemaster:this.codeMaster},
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getLookupOption();
    });
  }

 
  deleteLookup(value: number) {
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      data: value,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(id => {
      if (id != null) {
        //var values = [{ userId: id }]
        console.log(id, 'delete lookup');
        this._adminService.deleteLookup(id).subscribe(
          data => {
            console.log(data);
            if (data['Status'] == true) {
              this.getLookupOption();
            }
          }
        )
      };

    })
  }
}
