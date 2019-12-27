import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CalendarViewComponent } from './Unassigned/calendar-view.component';
import { GridViewComponent } from './Assigned/grid-view.component';
import { PopoverModule } from 'ngx-bootstrap';

// const routes: Routes = [
//   { path: '', redirectTo: 'unassigned', pathMatch: 'full' },
//   { path: 'assigned', component: GridViewComponent },
//   { path: 'unassigned', component: CalendarViewComponent },
// ]

@NgModule({
  declarations: [GridViewComponent, CalendarViewComponent],
  imports: [
    CommonModule, SharedModule,
    MglTimelineModule,
    OwlDateTimeModule,
    PopoverModule.forRoot(),
    OwlNativeDateTimeModule,ConfirmationPopoverModule
  ],
  entryComponents:[]
})
export class ScheduleAssetsModule { }
