import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-configure-permissions',
  templateUrl: './configure-permissions.component.html',
  styleUrls: ['./configure-permissions.component.scss']
})
export class ConfigurePermissionsComponent implements OnInit {
  roleId: any;
  screenPermissions = [];

  constructor(private activeRoute: ActivatedRoute, private _permissionService: PermissionService) { }


  configurePermissions = [
    { screenName: "Manager clients", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: true, isApprovalAssigned: true },
    { screenName: "Manage contacts", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: true, isApprovalAssigned: false },
    { screenName: "Manage quotes", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: false },
    { screenName: "Manage projects", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: false, isDeletedAssigned: false, isApprovalAssigned: false },
    { screenName: "Manage expenses", read: true, write: true, delete: true, approvals: true, isReadAssigned: false, isWriteAssigned: false, isDeletedAssigned: false, isApprovalAssigned: false },
    { screenName: "Manage hours", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: false },
    { screenName: "Manage return of assets", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: false },
    { screenName: "Manage leave approvals", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: false },
    { screenName: "Schedule action calendar", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: false },
    { screenName: "Schedule assets", read: true, write: true, delete: false, approvals: false, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: true },
    { screenName: "View predictability", read: true, write: false, delete: false, approvals: false, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: true },
    { screenName: "view productivity", read: true, write: false, delete: false, approvals: false, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: true },
    { screenName: "View profitability", read: true, write: false, delete: false, approvals: false, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: true },
    { screenName: "View billing", read: true, write: false, delete: false, approvals: false, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: true },
    { screenName: "View work in Process", read: true, write: false, delete: false, approvals: false, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: true },
    { screenName: "View permissions", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: true, isApprovalAssigned: true },
    { screenName: "View users", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: true, isApprovalAssigned: true },
    { screenName: "view configure kanban", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: true, isApprovalAssigned: true },
    { screenName: "View master data", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: true, isApprovalAssigned: true },
    { screenName: "View availability", read: true, write: true, delete: true, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: true, isApprovalAssigned: true },
    { screenName: "Time & Entry", read: true, write: true, delete: false, approvals: true, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: true },
    { screenName: "Project Manager", read: true, write: false, delete: false, approvals: false, isReadAssigned: true, isWriteAssigned: true, isDeletedAssigned: false, isApprovalAssigned: true },
  ]

  ngOnInit() {
    this.getAllScreenPermissions()
  }

  getAllScreenPermissions() {
    this.activeRoute.params.subscribe(params => {
      this.roleId = atob(params['roleId'].toString());
      console.log(this.roleId);
    });
    this._permissionService.getScreenPermissions(this.roleId).subscribe(
      data => {
        console.log(data);
        this.screenPermissions = data['Data']
      },
      error => {
        console.log(error);
      }
    )
  }

  readPermission(event, id){
    if(event == false){
      this.screenPermissions.forEach(x=>{
        if(x.screenId == id){
          x.approveAll = false;
          x.deleteAll = false;
          x.writeAll = false;
        }
      })
    }
  }

  writePermission(event, id){
    if(event == true){
      this.screenPermissions.forEach(x=>{
        if(x.screenId == id){
          x.readAll = true;
        }
      })
    }
    else{
      this.screenPermissions.forEach(x=>{
        if(x.screenId == id){
          x.approveAll = false;
          x.deleteAll = false;
        }
      })
    }
  }
  deletePermission(event, id){
    if(event == true){
      this.screenPermissions.forEach(x=>{
        if(x.screenId == id){
          x.writeAll = true;
          x.readAll = true;
        }
      })
    }
    else{
      this.screenPermissions.forEach(x=>{
        if(x.screenId == id){
          x.approveAll = false;
        }
      })
    }
  }

  approvalPermission(event, id){
    if(event == true){
      this.screenPermissions.forEach(x=>{
        if(x.screenId == id){
          // console.log(x);
          if(x.isDeletePermission == true){
            x.deleteAll = true;
          }
          x.writeAll = true;
          x.readAll = true;
        }
      })
    }
  }

  updatePermissions(){
    console.log(this.screenPermissions,'ss');
    var value = [{'screenPermissionList': this.screenPermissions}]
    this._permissionService.postScreenPermissions(value[0]).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }


}
