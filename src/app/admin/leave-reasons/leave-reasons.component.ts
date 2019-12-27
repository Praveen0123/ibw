import { Component, OnInit } from '@angular/core';
import { AddLeaveReasonDialogComponent } from './add-leave-reason-dialog/add-leave-reason-dialog.component';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { DeleteConfirmDailogComponent } from '../../shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { MasterDataService } from '../master-data.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-leave-reasons',
  templateUrl: './leave-reasons.component.html',
  styleUrls: ['./leave-reasons.component.scss']
})
export class LeaveReasonsComponent implements OnInit {
  typeOfAbsenceList = [];

  constructor(private dialog: MatDialog, private _adminService: AdminService, private _masterDataService: MasterDataService) {

    this.getLeaveReasons()
  }

  ngOnInit() {
  }
  LeaveReasonsData = []

  //Function to open leave reason modal in add and update modes
  public OpenAddLeaveReasonDialog(LeaveReason) {
    this._adminService.getLookupOptions().subscribe(data => {
      if (data['Data'] != null) {
        if (data['Data'].length > 0) {
          this.typeOfAbsenceList = data['Data'].filter(x => x.CodeMasterName == "Obsence Types");
        }
      }
      let dialogRef = this.dialog.open(AddLeaveReasonDialogComponent, {
        data: { LeaveReason: LeaveReason, typeOfAbsenceList: this.typeOfAbsenceList },
        height: 'auto',
        width: '600px',
      });
      dialogRef.afterClosed().subscribe(LeaveReason => {
        if (LeaveReason) {
          this.addLeaveReason(LeaveReason);
          console.log(LeaveReason, 'Add LeaveReason data')
        }
      });
    })
  }

  //Function to add or update Leave Reason
  public addLeaveReason(LeaveReason: leaveReasonDataType) {
    this._masterDataService.addLeaveReason(LeaveReason).subscribe(data => {
      console.log(data, "configQuestions data");
      this.getLeaveReasons()
    },
      error => {
        console.log(error);
      }
    );
  }

  //Function to get all the LeaveReasons
  public getLeaveReasons() {
    this._masterDataService.getLeaveReasons().subscribe(data => {
      this.LeaveReasonsData = [];
      if (data['Data'] != undefined) {
        this.LeaveReasonsData = data['Data'];
      }
      console.log(data['Data'], 'Data')
    });
  }

  //Function to delete specific leave reason
  deleteLeaveReason(LeaveReasonId) {

    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      data: LeaveReasonId,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(id => {
      if (id != null) {
        this._masterDataService.deleteLeaveReason(id).subscribe(
          data => {
            this.getLeaveReasons();
          }
        )
      }
    });
  }
}

export class leaveReasonDataType {
  LeaveReasonId: number;
  LeaveReason: string;
  TypeOfAbsence: string;
  TypeOfAbsenceId: number;
  IsActive: boolean;
  UserId: number;
}