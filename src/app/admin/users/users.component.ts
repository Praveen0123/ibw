import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AlertService } from '../../shared/services/alert.service';
import { LeaveDetailsDialogComponent } from './Leave_Details/leave-details-dialog.component';
import { AdminService } from '../admin.service';
import { ModalDirective } from 'ngx-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { TableHeaderCheckbox } from 'primeng/table';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UsersService, AlertService]
})
export class UsersComponent implements OnInit {
    PermissionLevels = ["Project Managers", "Time & Expense", "Research", "Finance", "Operations", "Admin", "Stakeholders"]
    @ViewChild('deleteModal') public deleteModal: ModalDirective;
    deleteParam: string;
    tableList: any;
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;
    filterToggle: boolean;

    public searchText: string;
    public page: any;
    public settings: Settings;
    reportingManagers: any[];
    userRoles = [];
    filterForm: FormGroup;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        public usersService: UsersService, private alertService: AlertService,
        private _adminService: AdminService, private _fb: FormBuilder, public _downloadExcelService : DownloadExcelService) {
        this.settings = this.appSettings.settings;

        //Add User Form
        this.filterForm = this._fb.group({
            'permissionLevel': [null],
            'status': [null],
            'args': [null]
        });
    }

    hasWrite: boolean =false;
    hasDelete: boolean = false;

    ngOnInit() {
       this.checkPermissions();
        this.getAllUsers();
        this.getAllUserRoles();
    }

    checkPermissions()
    {
        var sessionData = JSON.parse(localStorage.getItem('userloginsession'));
        console.log(sessionData,'ssss');
        if(sessionData != null){
            if(sessionData['Roles'] != null){
                if(sessionData['Roles'].filter(x=> x == 'Super Admin').length > 0){
                    this.hasWrite = true;
                    this.hasDelete = true;
                }
                else{
                    if(sessionData['UserRights'].length > 0){
                        if(sessionData['UserRights'].filter(x=>x.vc_module == 'Admin' && x.vc_screen_name == 'Manage users' && x.rightName=='Write').length > 0){
                            this.hasWrite = true;
                            console.log('fff')
                        }
                        if(sessionData['UserRights'].filter(x=>x.vc_module == 'Admin' && x.vc_screen_name == 'Manage users' && x.rightName=='Delete').length > 0){
                            this.hasDelete = true;
                        }
                    }
                }
            }
        }
        console.log(this.hasDelete);
        console.log(this.hasWrite);
    }

    // //For delete confirmation modal
    // deleteModalToggle(value) {
    //     if (value == null) {
    //         this.deleteModal.hide();
    //     }
    //     else {
    //         this.deleteParam = "";
    //         this.deleteParam = value;
    //         this.deleteModal.show();
    //     }
    // }

    // deleteUser() {
    //     var values = [{ userId: this.deleteParam }]
    //     this._adminService.deleteUser(values[0]).subscribe(
    //         data => {
    //             console.log(data);
    //             if (data['Status'] == true) {
    //                 this.deleteModal.hide();
    //                 this.getAllUsers();
    //             }
    //             else {
    //                 this.deleteModal.hide();
    //             }
    //         },
    //         error => {
    //             console.log(error);
    //         }
    //     )
    // }

    
  deleteUser(value:number) {
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      data:value,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(id => {
      if(id != null){
     var values = [{ userId: id }]
        this._adminService.deleteUser(values[0]).subscribe(
            data => {
                console.log(data);
                if (data['Status'] == true) {
                    this.getAllUsers();
                }
      }
        )};

  })}

    //Status Update
    changeStatus(values) {
        console.log(values)
        values.status = !values.status;
        // values.modifiedBy = sessionUser.user_id;
        this._adminService.userStatus(values).subscribe(
            data => {
                this.getAllUsers();
                console.log(data)
            },
            error => {
                console.log(error);
                if (error.status == 401) {

                }
            }
        )
    }

    tableHead = [
        { columnName: "User Name", actualName: "userName" },
        { columnName: "Email", actualName: "email" },
        { columnName: "Phone", actualName: "phoneNumber" },
        // { columnName: "Permission Level", actualName: "permissionLevelName" },
        { columnName: "Job Code (s)", actualName: "jobShortCode" },
        { columnName: "Leave History", actualName: "leaveHistory" }
    ]

    public getAllUsers() {
    const user = JSON.parse(localStorage.getItem('userloginsession'));
        this._adminService.getAllUsers().subscribe(
            data => {
                console.log(data, 'users list');
                this.tableList = data['Data'];
                this.tableList = this.tableList.filter(x=>x.userId != 1 && x.userId != user['int_user_id']);
                console.log(this.tableList);
            },
            error => {
                console.log(error);
            }
        )
    }


    public openUserDialog(item) {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: item,
            height: 'auto',
            width: '640px'
        });
        dialogRef.afterClosed().subscribe(data => {
            console.log('Closed')
            this.getAllUsers();
        });
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


    //For Filter in tables
    filterBy(values) {
        var mainFilteredData = [];
        this._adminService.getAllUsers().subscribe(
            data => {
                mainFilteredData = data['Data'];
                if (values['status'] != null || values['permissionLevel'] != null || values['args'] != null) {
                    if (values['permissionLevel'] != null) {
                        mainFilteredData = mainFilteredData.filter(x =>
                            x.PermissionRoles['roleMasterId'] == values['permissionLevel']
                        );
                        console.log(mainFilteredData)
                    }
                    if (values['status'] == true || values['status'] == false) {
                        mainFilteredData = mainFilteredData.filter(x => x.status == values['status']);
                        console.log(mainFilteredData);
                    }

                    if (values['args'] != null || values['args'] != "") {
                        mainFilteredData = mainFilteredData.filter(function (item) {
                            return JSON.stringify(item).toLowerCase().includes(values['args']);
                        });
                    }
                }
                // if(values['status'] == null && values['permissionLevel'] == null && values['args'] == null){
                // }
                else {
                    mainFilteredData = this.tableList;
                    console.log(this.tableList);
                    console.log(mainFilteredData);
                }
                this.tableList = mainFilteredData;
                //this._downloadExcelService.exportAsExcelFile(mainFilteredData,'Download CSV')
            },
            error => {
                console.log(error);
            })
    }
    excelData : any[]
    exportAsExcel(){
        console.log(this.tableList,'Whole Data');
        this.excelData = [];
        this.tableList.forEach(element => {
                var jobShortCode = element['jobShortCode'].toString();
            this.excelData.push({
                'User Name': element['userName'], 'Email': element['email'], 'Phone': element['phoneNumber'],
                'Permission Level': element['permissionLevelName'], 'Job Code (s)' : jobShortCode,
                'Status' : element['status'] ? 'Active' : 'Inactive'
            })
        });
        console.log(this.excelData)
        this._downloadExcelService.exportAsExcelFile(this.excelData,'Download CSV')
    }

    resetFilter() {
        this.getAllUsers();
        this.filterForm.reset();

    }
    public viewLeaveDetails(id) {
        let dialogRef = this.dialog.open(LeaveDetailsDialogComponent, {
            data: id,
            height: 'auto',
            width: '550px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }



    saveStatus() {
        //this.alertService.createAlert('Successfully saved.', 1);
    }

}