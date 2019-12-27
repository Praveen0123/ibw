import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { SharedModule } from '../../../shared/shared.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ActivityAllComponent } from '../activity-all/activity-all.component';
import { ActivityNotesComponent } from '../activity-notes/activity-notes.component';

const routes=[
  { path: '', redirectTo: 'activity-notes', pathMatch: 'full' },
  { path: 'activity-all', component: ActivityAllComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'activity-notes', component: ActivityNotesComponent, data: { breadcrumb: 'Project Dashboard' } },
]


@NgModule({
  declarations: [ActivityNotesComponent,ActivityAllComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),MglTimelineModule,SharedModule,OwlDateTimeModule,OwlNativeDateTimeModule
  ]
})
export class ProjectActivityModule { }
