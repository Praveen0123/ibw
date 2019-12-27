import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { ConfigureKanbanDataType } from '../configure-kanban.component';

@Component({
  selector: 'app-add-step-dialog',
  templateUrl: './add-step-dialog.component.html',
  styleUrls: ['./add-step-dialog.component.scss'],
  providers: [AlertService]
})
export class AddStepDialogComponent implements OnInit {
  kanbanStageForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddStepDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public step: ConfigureKanbanDataType, public fb: FormBuilder, private alertService: AlertService) {



    this.kanbanStageForm = this.fb.group({
      'ConfigureKanbanId': null,
      'KanbanStageName': [null, Validators.compose([Validators.required])],
      'KanbanTypeName': '',
      'UserId': '1',
      'IsActive': null
    })
  }

  ngOnInit() {
    if (this.step) {
      this.kanbanStageForm.setValue(this.step);
    }
    else {
      this.step = new ConfigureKanbanDataType();
    }
  }

  submitKanbanStage(formValues) {
    if (this.kanbanStageForm.valid) {
      this.dialogRef.close(formValues);
    }
    else {
      this.kanbanStageForm.controls['KanbanStageName'].markAsTouched();
    }
  }
  close(): void {
    this.dialogRef.close();
  }

  // saveStep() {
  //   this.alertService.createAlert('Successfully Saved.', 1);
  //   this.dialogRef.close();
  // }

}
