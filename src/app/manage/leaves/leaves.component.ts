import { Component, OnInit } from '@angular/core';
import { LeaveRequestDailogComponent } from 'src/app/shared/leave-request-dailog/leave-request-dailog.component';
import { MatDialog } from '@angular/material';
import { TimelineDialogComponent } from '../projects/review/timeline-dialog/timeline-dialog.component';
import { isPending } from 'q';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss']
})
export class LeavesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
