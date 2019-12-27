import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivityNotesComponent } from '../activity-notes/activity-notes.component';
import { ActivityPreparationComponent } from '../activity-preparation/activity-preparation.component';
import { ActivitySubmissionComponent } from '../activity-submission/activity-submission.component';
import { ActivityResultComponent } from '../activity-result/activity-result.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { SharedModule } from '../../../shared/shared.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ActivityAllComponent } from '../activity-all/activity-all.component';


const routes=[
  { path: '', redirectTo: 'activity-notes', pathMatch: 'full' },
  { path: 'activity-all', component: ActivityAllComponent, data: { breadcrumb: 'Quotes Dashboard' } },
  { path: 'activity-notes', component: ActivityNotesComponent, data: { breadcrumb: 'Quotes Dashboard' } },
  { path: 'activity-preparation', component: ActivityPreparationComponent, data: { breadcrumb: 'Quotes Dashboard' } },
  { path: 'activity-submission', component: ActivitySubmissionComponent, data: { breadcrumb: 'Quotes Dashboard' } },
  { path: 'activity-result', component: ActivityResultComponent, data: { breadcrumb: 'Quotes Dashboard' } },
]



@NgModule({
  declarations: [ActivityNotesComponent,ActivityAllComponent,ActivityPreparationComponent,ActivitySubmissionComponent,
    ActivityResultComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),MglTimelineModule,SharedModule,OwlDateTimeModule,OwlNativeDateTimeModule
  ]
})
export class ActivityModule { }
