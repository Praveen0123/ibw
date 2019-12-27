import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.scss']
})
export class RoleDialogComponent implements OnInit {
  roleUpsertForm: FormGroup;
  isEdit: boolean;

  constructor(public dialogRef: MatDialogRef<RoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alertService: AlertService,
    private _adminService: AdminService,
    private _fb: FormBuilder) {
    this.roleUpsertForm = this._fb.group({
      'roleMasterId': [null],
      'roleMasterName': [null, Validators.compose([Validators.required])],
      'status': [null]
    });
    if (this.data != null) {
      this.fnEditRole(this.data);
      this.isEdit = true;
    }
    else{
      this.isEdit = false
    }
  }

  ngOnInit() {

  }

  fnEditRole(data) {
    this.roleUpsertForm.reset();
    this.roleUpsertForm.controls['roleMasterId'].setValue(data.roleMasterId);
    this.roleUpsertForm.controls['roleMasterName'].setValue(data.roleMasterName);
    this.roleUpsertForm.controls['status'].setValue(data.status);
  }

  onSubmitRoleForm(values) {
    if(this.roleUpsertForm.valid){
      this._adminService.upsertPermissionRole(values).subscribe(
        data => {
          console.log(data);
          if(data['Status'] == true){
            this.dialogRef.close();
          }
        },
        error => {
          console.log(error);
        }
      )
    }
    else{
      this.roleUpsertForm.controls.roleMasterName.markAsTouched();
    }

  }

  close(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
