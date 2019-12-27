import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AlertService } from '../../shared/services/alert.service';
import { RoleDialogComponent } from './role-dialog/role-dialog.component';
import { AssignedUsersListModalComponent } from './assigned-users-list-modal/assigned-users-list-modal.component';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  userRoles = [];
  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  deleteParam: any;
  constructor(public dialog: MatDialog, private _adminService: AdminService, private _fb: FormBuilder) {
  }

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;


  roles: object[] = [
    { role_id: 1, role_name: 'Project Managers', permissions: '55/67', users: 5, status: true },
    { role_id: 2, role_name: 'Time & Expense', permissions: '40/67', users: 3, status: true },
    { role_id: 3, role_name: 'Research', permissions: '50/67', users: 4, status: true },
    { role_id: 4, role_name: 'Finance', permissions: '45/67', users: 2, status: true },
    { role_id: 5, role_name: 'Operations', permissions: '39/67', users: 6, status: true },
    { role_id: 5, role_name: 'Admin', permissions: '48/67', users: 1, status: true },
    { role_id: 6, role_name: 'Stakeholders', permissions: '0/67', users: 4, status: true },
  ]

  //For delete confirmation modal
  deleteModalToggle(value) {
    if (value == null) {
      this.deleteModal.hide();
    }
    else {
      this.deleteParam = "";
      this.deleteParam = value;
      this.deleteModal.show();
    }
  }

  public getAllUserRoles() {
    this._adminService.getAllUserRolesWithCount().subscribe(
      data => {
        this.userRoles = data['Data'];
        this.userRoles.forEach(x=>
          x.roleMasterEncryptedID = btoa(x['roleMasterId'].toString()))
          console.log(this.userRoles);
      },
      error => {
        console.log(error);
      }
    )
  }

  public deleteUserRole() {
    this._adminService.deleteRole(this.deleteParam).subscribe(
      data => {
        console.log(data);
        this.getAllUserRoles();
        this.deleteModal.hide();
      },
      error => {
        console.log(error);
      }
    )
  }

  public openAddPermissionDialog(values) {
    let dialogRef = this.dialog.open(RoleDialogComponent, {
      data: values,
      height: 'auto',
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getAllUserRoles();
    });
  }

  OpenAssignedUsersModal(assignedUsers) {
    console.log(assignedUsers);
    let dialogRef = this.dialog.open(AssignedUsersListModalComponent, {
      data: assignedUsers,
      height: 'auto',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(data => {
      this.getAllUserRoles();
    });
  }

  changeStatus(values) {
    values.status = !values.status;
    this._adminService.upsertPermissionRole(values).subscribe(
      data => {
        console.log(data);
        this.getAllUserRoles();
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.getAllUserRoles();
  }

}
