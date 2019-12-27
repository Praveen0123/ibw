import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddStepDialogComponent } from './add-step-dialog/add-step-dialog.component';
import { AlertService } from '../../shared/services/alert.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-configure-kanban',
  templateUrl: './configure-kanban.component.html',
  styleUrls: ['./configure-kanban.component.scss']
})
export class ConfigureKanbanComponent implements OnInit {

  constructor(public dialog: MatDialog,private alertService: AlertService, private router: Router ) { }

  ngOnInit() {
    console.log(this.router.url);
  }
  
 
}
export class ConfigureKanbanDataType {
  ConfigureKanbanId: number;
  KanbanStageName: string;
  KanbanTypeName:string;
  IsActive: boolean;
  UserId: number;
}