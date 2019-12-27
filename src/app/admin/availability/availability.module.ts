import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekdaysComponent } from './weekdays/weekdays.component';
import { RouterModule, Routes } from '@angular/router';
import { HolidaysComponent } from './holidays/holidays.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LeaveComponent } from './leave/leave.component';


export const routes:Routes = [
  { path: '', redirectTo: 'holidays', pathMatch: 'full' },
  // { path: 'weekdays', component: WeekdaysComponent, data: { breadcrumb: 'Weekdays' } },
  { path: 'holidays', component: HolidaysComponent, data: { breadcrumb: 'Holidays' } },
  { path: 'leave', component: LeaveComponent, data: { breadcrumb: 'Vacations' } },


];

@NgModule({
  declarations: [WeekdaysComponent, HolidaysComponent, LeaveComponent],
  imports: [
    CommonModule,SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AvailabilityModule { }
