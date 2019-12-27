import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AddjobdialogueComponent } from './addjobdialogue/addjobdialogue.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AdminService } from '../admin.service';
import { DeleteConfirmDailogComponent } from '../../shared/delete-confirm-dailog/delete-confirm-dailog.component';



@Component({
    selector: 'app-job-codes',
    templateUrl: './job-codes.component.html',
    styleUrls: ['./job-codes.component.scss'],
    providers: [AdminService]
})

export class JobCodesComponent implements OnInit {

    jobCodesData = [];

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

    constructor(private _adminService: AdminService, public dialog: MatDialog,
        private ref: ChangeDetectorRef, private _snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.getJobCodes()
        console.log(this.jobCodesData, 'jobCodesData')
    }


    changeStatus(jobCodeId) {
        let status = this.jobCodesData.filter(x => x.JobCodeId == jobCodeId)[0]["IsActive"];
        console.log(status, 'staus value')
        status = !status
        this._adminService.updateJobCodeStatus(jobCodeId, status).subscribe(
            data => {
                this.getJobCodes();
            }
        )

    }
    deleteJobCode(JobCodeId) {

        let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
            data: JobCodeId,
            height: 'auto',
            width: '600px',
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(id => {
            if (id != null) {
                this._adminService.deleteJobCode(JobCodeId).subscribe(
                    data => {
                        this.getJobCodes();
                    }
                )
            }
        });
    }

    public getJobCodes() {
        this._adminService.getJobCodes().subscribe(data => {
            this.jobCodesData = [];
            if (data['Data'] != undefined || data['Data'].length > 0) {
                this.jobCodesData = data['Data'];
            }
            else {
                this.jobCodesData = [];
            }
        });
    }

    public addJobCode(jobCode: jobCodeDataType) {

        if (jobCode.ChargeoutRate > 0) {
            this._adminService.addJobCode(jobCode).subscribe(data => {
                this.getJobCodes();
                console.log(data, "jobcodes data");
            },
                error => {
                    console.log(error);
                }
            );
        }
        else {
            this._snackBar.open('Numeric values cannot be less than 1', '', { duration: 3000, panelClass: 'redSnackBar' })
        }
    }

    public openJobCodeDialog(jobCod) {
        let dialogRef = this.dialog.open(AddjobdialogueComponent, {
            data: jobCod,
            height: 'auto',
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(jobCode => {
            if (jobCode) {
                this.addJobCode(jobCode);
                console.log(jobCode, 'Add jobCode data')
                // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
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
            this._adminService.getJobCodes().subscribe(data => {

                if (data['Data'].length > 0) {
                    this.jobCodesData = data['Data'];
                    this.jobCodesData = this.jobCodesData.filter(x => x.IsActive == true)
                    console.log(this.jobCodesData, 'true')
                }
                else {
                    this.jobCodesData = []
                }

            });
        }
        else if (value == 2) {
            this._adminService.getJobCodes().subscribe(data => {
                if (data['Data'].length > 0) {
                    this.jobCodesData = data['Data'];
                    this.jobCodesData = this.jobCodesData.filter(x => x.IsActive == false)
                    console.log(this.jobCodesData, 'false')
                }
                else {
                    this.jobCodesData = []
                }

            })
        }
        else {
            this.getJobCodes()
        }
    }
}

export class jobCodeDataType {
    JobCodeId: number;
    JobCode: string;
    JobCodeTitle: string;
    ChargeoutRate: number;
    IsActive: boolean;
    IsDelete: boolean;
    UserId: number;
}
