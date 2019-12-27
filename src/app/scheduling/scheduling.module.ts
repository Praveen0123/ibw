import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AssetsComponent } from './assets/assets.component';
import { ActionCalendarComponent } from './action-calendar/action-calendar.component';
import { ScheduledialogueComponent } from './action-calendar/scheduledialogue/scheduledialogue.component';
import { TimelineLayoutComponent } from './timeline-layout/timeline-layout.component';
import { AddAssetReturnDateDialogComponent } from './assets/schedule-assets/Assigned/add-asset-return-date-dialog/add-asset-return-date-dialog.component';
import {TabViewModule} from 'primeng/tabview';
import { EventsdialogueComponent } from './action-calendar/eventsdailogue/eventsdialogue.component';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { ViewMoreBottomSheetComponent } from './action-calendar/viewMoreBottomSheet/viewMoreBottomSheet.component';
import { AssetAssignDialogComponent } from './asset-assign-dialog/asset-assign-dialog.component';
import { AgmCoreModule } from '@agm/core';
import { AuthGuard } from '../login/auth.guard';
import { AddPhoneNotesComponent } from './action-calendar/add-phone-notes/add-phone-notes.component';

const routes: Routes = [
  { path: '', redirectTo: 'timeline', pathMatch: 'full' },
  { path: 'assets', component: AssetsComponent, loadChildren: './assets/assets.module#AssetsModule', data: { breadcrumb: 'Assign Resources' } ,canActivateChild:[AuthGuard]},
  { path: 'action-calendar', component: ActionCalendarComponent, data: { breadcrumb: 'Action Scheduling' } ,canActivateChild:[AuthGuard]},
  { path: 'timeline', component: TimelineLayoutComponent,loadChildren:'./timeline-layout/timeline.module#TimelineModule',data: { breadcrumb: 'Timeline' } ,canActivateChild:[AuthGuard]},
   
]

@NgModule({
  declarations: [AssetsComponent,AddAssetReturnDateDialogComponent, AssetAssignDialogComponent, 
    ActionCalendarComponent, EventsdialogueComponent, ViewMoreBottomSheetComponent,
    TimelineLayoutComponent,
    AddPhoneNotesComponent],
  imports: [
    CommonModule,CalendarModule, SharedModule, RouterModule.forChild(routes),TabViewModule,
    FormsModule,AgmCoreModule
  ],
  entryComponents:[
AddAssetReturnDateDialogComponent, EventsdialogueComponent, ViewMoreBottomSheetComponent,AssetAssignDialogComponent,AddPhoneNotesComponent
  ]
})
export class SchedulingModule { }

 