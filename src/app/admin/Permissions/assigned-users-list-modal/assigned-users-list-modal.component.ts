import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { RoleDialogComponent } from '../role-dialog/role-dialog.component';
import { AlertService } from '../../../shared/services/alert.service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-assigned-users-list-modal',
  templateUrl: './assigned-users-list-modal.component.html',
  styleUrls: ['./assigned-users-list-modal.component.scss']
})
export class AssignedUsersListModalComponent implements OnInit {
  allUsers = [];
  finalSelectedUsersList = [];

  constructor(public dialogRef: MatDialogRef<RoleDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any[],
    private _adminService: AdminService) { }

  ngOnInit() {
    this.getAllUsers();
    console.log(this.data);
  }


  autoSelectPermissions(val, id) {
    console.log(id, val);
    console.log(this.finalSelectedUsersList);
    if (val == false) {
      this.finalSelectedUsersList = this.finalSelectedUsersList.filter(x => x != id);
    }
    else {
      this.finalSelectedUsersList.push(id);
    }
    console.log(this.finalSelectedUsersList);
  }

  selectedUsers = [];

  getAllUsers() {
    const user = JSON.parse(localStorage.getItem('userloginsession'));
    this._adminService.getAllUsers().subscribe(
      data => {
        this.allUsers = data['Data'];
        this.allUsers = this.allUsers.filter(x => x.userId != user['int_user_id']);
        this.data['usersList'].forEach(x => {
          this.selectedUsers[x] = true;
        });
        this.finalSelectedUsersList = this.data['usersList'];
      },

      error => {
        console.log(error);
      }
    )
  }


  saveAll() {
    var values = [];
    // values['roleMasterId'] = this.data['roleMasterId'];
    // values['usersList'] = this.finalSelectedUsersList;
    values = [{ 'roleMasterId': this.data['roleMasterId'], 'usersList': this.finalSelectedUsersList }]
    console.log(values)

    this._adminService.usersOfRoleUpsert(values[0]).subscribe(
      data => {
        console.log(data);
        if (data['Status'] == true) {
          this.dialogRef.close();
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  close(): void {
    this.dialogRef.close();
  }

}
