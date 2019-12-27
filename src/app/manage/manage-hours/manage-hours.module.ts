import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ManageHoursApprovedComponent } from './manage-hours-approved/manage-hours-approved.component';
import { ManageHoursPendingComponent } from './manage-hours-pending/manage-hours-pending.component';
import { ManageHoursDeclinedComponent } from './manage-hours-declined/manage-hours-declined.component';
import { ManageHoursActivityComponent } from './manage-hours-activity/manage-hours-activity.component';
import { HoursDialogComponent } from 'src/app/hours-dialog/hours-dialog.component';

const routes:Routes = [
  { path: '', redirectTo: 'pending', pathMatch: 'full' },
  { path: 'pending',  component:ManageHoursPendingComponent,data: { breadcrumb: 'Hours' } },
  { path: 'declined', component:ManageHoursDeclinedComponent,data: { breadcrumb: 'Hours' } },
  { path: 'approved', component:ManageHoursApprovedComponent,data: { breadcrumb: 'Hours' } },
  { path: 'activity', component:ManageHoursActivityComponent,data: { breadcrumb: 'Hours' } },
];

@NgModule({
  declarations: [ManageHoursPendingComponent,ManageHoursDeclinedComponent,
    ManageHoursApprovedComponent, ManageHoursActivityComponent,
    HoursDialogComponent
  ],
  imports: [
    CommonModule,SharedModule,
    RouterModule.forChild(routes)
  ],
   entryComponents:[HoursDialogComponent]
})
export class ManageHoursModule { }
