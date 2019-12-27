import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveApprovalComponent } from './leave-approval/leave-approval.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeavesActivityComponent } from './leaves-activity/leaves-activity.component';

export const routes = [
  { path: '', redirectTo: 'leave-activity', pathMatch: 'full' },
  { path: 'leave-approval', component: LeaveApprovalComponent, data: { breadcrumb: 'Leave Approvals' }},
  { path: 'leave-activity', component: LeavesActivityComponent, data: { breadcrumb: 'Leave Activity' }},
 
];


@NgModule({
  declarations: [LeaveApprovalComponent, LeavesActivityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LeaveApprovalModule { }
