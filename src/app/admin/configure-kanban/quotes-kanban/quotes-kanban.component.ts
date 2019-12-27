import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { AddStepDialogComponent } from '../add-step-dialog/add-step-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { AdminService } from '../../admin.service';
import { PageEvent } from '@angular/material';
import { DragulaService } from 'ng2-dragula';
import { fileURLToPath } from 'url';
import { ConfigureKanbanService } from '../configure-kanban.service';
import { ConfigureKanbanDataType } from 'src/app/admin/configure-kanban/configure-kanban.component';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';

export class EditableTableColumn {
  header: string;
  field: string;
  type: 'text' | 'checkbox';
  required?: boolean;
  defaultValue?= '';
}
type RowValue = any;


@Component({
  selector: 'app-quotes-kanban',
  templateUrl: './quotes-kanban.component.html',
  styleUrls: ['./quotes-kanban.component.scss'],
  providers: [ConfigureKanbanService]
})
export class QuotesKanbanComponent implements OnInit {
  public steps: any;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '5');
  public currentPage = 0;
  public totalSize = 0;
  pageEvent: PageEvent;
  public page: any;
  canCreate: any;
  canUpdate: any;
  canDelete: any;
  showEmpty: boolean = true;

  kanbanStepsData = [];

  ngOnInit() {
    this.getKanbanSteps(1);
    this.getKanbanStages();
    // let userdata = JSON.parse(localStorage.getItem('sg_user_info')).user_permissions[10];
    // this.canCreate = parseInt(userdata.permission_type.split('')[0]);
    // this.canUpdate = parseInt(userdata.permission_type.split('')[2]);
    // this.canDelete = parseInt(userdata.permission_type.split('')[3]);
  }
  public openAddStepDialog(step) {
    console.log(step, 'data for modal')
    let dialogRef = this.dialog.open(AddStepDialogComponent, {
      data: step,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data, 'step data')
      if (data) {
        data.KanbanTypeName = "quotes"
        this.addKanbanStage(data)
      }
    });
  }

  public addStepDialog(step) {
    let dialogRef = this.dialog.open(AddStepDialogComponent, {
      data: {step:step},
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data === 'save')
        this.getKanbanSteps(1);
    });
  }

  public addKanbanStage(KanbanStage: ConfigureKanbanDataType) {
    this._configureKanabnSerive.AddKanbanStage(KanbanStage).subscribe(data => {
      this.getKanbanStages();
      console.log(data, "Kanban step data");
    },
      error => {
        console.log(error);
      }
    );
  }

  public getKanbanStages() {
    this._configureKanabnSerive.getKanbanStages().subscribe(data => {
      if(data['Data'] != null && data['Data'].length > 0){
        this.kanbanStepsData = data['Data'].filter(x => x.KanbanTypeName == "quotes");
      }
      console.log(this.kanbanStepsData)
    });
  }

  changeStatus(ConfigureKanbanId) {
    let status = this.kanbanStepsData.filter(x => x.ConfigureKanbanId == ConfigureKanbanId)[0]["IsActive"];
    console.log(status, 'staus value')
    status = !status
    this._configureKanabnSerive.updateKanbanStageStatus(ConfigureKanbanId, status).subscribe(
      data => {
        this.getKanbanStages();
      }
    )
  }
  deleteKanbanStage(ConfigureKanbanId:number) {
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      data:ConfigureKanbanId,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(id => {
      if(id != null){
        this._configureKanabnSerive.deleteKanbanStage(id).subscribe(
          data2 => {
            this.getKanbanStages();
          }
        )
      }
    });

  }





  getKanbanSteps(type) {
    let filterObj = {};
    filterObj['page'] = this.currentPage;
    filterObj['per_page'] = this.pageSize;
    filterObj['step_type'] = type;

    

  }


  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(private changeDetectorRefs: ChangeDetectorRef,
    private dragulaService: DragulaService,
    public dialog: MatDialog, public dilogref: MatDialogRef<AddStepDialogComponent>, private alertService: AlertService,
    private adminService: AdminService, private _configureKanabnSerive: ConfigureKanbanService) {

    this.dragulaService.destroy('OPPSTEPS');

    this.dragulaService.createGroup("OPPSTEPS", {
      revertOnSpill: true,
    });

    this.dragulaService.dropModel("OPPSTEPS").subscribe(args => {
      if (this.steps) {
        let finalResult = args.targetModel;
        let allPositions = args.targetModel.map(value => value.step_order);
        allPositions = allPositions.sort(function (a, b) { return a - b });
        for (let i = 0; i < finalResult.length; i++) {
          finalResult[i]['step_order'] = allPositions[i];
        }
        // this.adminService.updateKanbanPosition(finalResult).then(data => {
        //   if(data.success) {
        //     //this.alertService.createAlert("Kanban updated successfully" , 1);
        //     //this.getKanbanSteps(1);
        //   }
        //   else {
        //     this.alertService.createAlert(data.message , 0);
        //   }
        //});
      }
    });

  }

  ngOnDestroy() {
    this.dragulaService.destroy('OPPSTEPS');
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.getKanbanSteps(1);
  }

  updateStep(step_id, changedValue, type) {
    let detail = { "step_id": step_id };
    if (type === 'status') {
      detail['step_status'] = changedValue;
    } else {
      detail['is_deleted'] = changedValue;
    }
    // this.adminService.updateStep(detail).then(data => {
    //   if(data.success) {
    //     let message = "";
    //     if(type == 'status')
    //       message = changedValue ? "activated" : "inactivated";
    //     else
    //       message = "deleted";
    //     this.alertService.createAlert("Kanban "+ message +" successfully" , 1);
    //     this.getKanbanSteps(1);
    //   }
    //   else {
    //     this.alertService.createAlert(data.message , 0);
    //   }
    // });
  }

}