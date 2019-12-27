import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { AdminService } from '../../admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator, internationalPhoneNumber } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
  providers: [AlertService]
})
export class UserDialogComponent implements OnInit {
  UserForm: FormGroup;
  allProjectManagers = [];
  public phoneNumberMask = ['+','1', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  isEditForm: boolean;
  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alertService: AlertService,
    private _adminService: AdminService,
    private _fb: FormBuilder) {
    //Add User Form
    this.UserForm = this._fb.group({
      'userId': null,
      'userName': [null, Validators.compose([Validators.required])],
      'aliasName': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'phoneNumber': [null, Validators.compose([Validators.required, internationalPhoneNumber])],
      // 'permissionRoleId': [null, Validators.compose([Validators.required])],
      'employmentTypeId': [null, Validators.compose([Validators.required])],
      'reportingManagerId': [null],
      'jobCodes': [null, Validators.compose([Validators.required])],
      'eligibleVacationDays': [null, Validators.compose([Validators.required])],
      'openingLeaveBalance': [null, Validators.compose([Validators.required])],
      'createdBy': [null],
      'modifiedBy': [null]
    });
  }
  PermissionLevels = ["Project Managers", "Time & Expense", "Research", "Finance", "Operations", "Admin", "Stakeholders"]
  JobCodes = [];
  employeeTypes = [];
  userRoles = [];

  ngOnInit() {
    this.getAllUserRoles();
    this.getAllJobCodes();
    this.getAllEmployeeTypes();
    this.getAllProjectManagersList();
    if(this.data != null){
      this.isEditForm = true;
    }
    else{
      this.isEditForm = false;
    }
  }

  onlyNumbers(event) {
    var k;
    k=event.charCode;
    return ((k > 47 && k < 58));
  }

  fnEditUser(data) {
    this.UserForm.reset();
    console.log(this.allProjectManagers, 'Filtered Users')
    this.UserForm.controls['userId'].setValue(data.userId);
    this.UserForm.controls['userName'].setValue(data.userName);
    this.UserForm.controls['aliasName'].setValue(data.aliasName);
    this.UserForm.controls['email'].setValue(data.email);
    this.UserForm.controls['phoneNumber'].setValue(data.phoneNumber);
    // this.UserForm.controls['permissionRoleId'].setValue(data.PermissionRoles['roleMasterId']);
    this.UserForm.controls['jobCodes'].setValue(data.jobCodeSet.map(obj => obj.jobCodeId));
    this.UserForm.controls['employmentTypeId'].setValue(data.employmentTypeId);
    this.UserForm.controls['reportingManagerId'].setValue(data.reportingManagerId);
    this.UserForm.controls['eligibleVacationDays'].setValue(data.eligibleVacationDays);
    this.UserForm.controls['openingLeaveBalance'].setValue(data.openingLeaveBalance);
  }

  close(): void {
    this.dialogRef.close();
  }

  getAllProjectManagersList() {
    this._adminService.getAllProjectManagers().subscribe(
      data => {
        console.log(data);
        this.allProjectManagers = data['Data'];
        if (this.data != null) {
          this.allProjectManagers = this.allProjectManagers.filter(x => x.userId != this.data.userId);
          console.log(this.allProjectManagers, 'Filtered ss')
          this.fnEditUser(this.data);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  onlyAlphabets(event) {
    var k=event.charCode;
    return (((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32)));
  }
  
  onSubmitUserForm(formValues) {
    console.log(formValues)
    
    if(this.UserForm.valid){
      this._adminService.userUpsert(formValues).subscribe(
        data => {
          console.log(data, 'Users Upsert Data');
          if(data['Status'] == true){
            this.dialogRef.close();
          }
        }
      )
    }
    else{
      this.UserForm.controls.userName.markAsTouched();
      this.UserForm.controls.aliasName.markAsTouched();
      this.UserForm.controls.email.markAsTouched();
      this.UserForm.controls.phoneNumber.markAsTouched();
      // this.UserForm.controls.permissionRoleId.markAsTouched();
      this.UserForm.controls.jobCodes.markAsTouched();
      this.UserForm.controls.employmentTypeId.markAsTouched();
      this.UserForm.controls.eligibleVacationDays.markAsTouched();
      this.UserForm.controls.openingLeaveBalance.markAsTouched();
    }
  }

  saveUser() {
    this.dialogRef.close();
  }


  getAllUserRoles() {
    this._adminService.getAllUserRoles().subscribe(
      data => {
        this.userRoles = data['Data'];
      },
      error => {
        console.log(error);
      }
    )
  }

  getAllJobCodes() {
    this._adminService.getAllJobCodes().subscribe(
      data => {
        this.JobCodes = data['Data'];
      },
      error => {
        console.log(error);
      }
    )
  }

  getAllEmployeeTypes() {
    this._adminService.getAllEmployeeTypes().subscribe(
      data => {
        console.log(data, 'aa');
        this.employeeTypes = data['Data'];
      }
    )
  }

}
