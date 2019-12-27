import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DayviewComponent } from './dayview/dayview.component';
import { MonthviewComponent } from './monthview/monthview.component';
import { SharedModule } from '../../shared/shared.module';

export const routes:Routes = [
  { path: '', redirectTo: 'dayview', pathMatch: 'full' },
  { path: 'dayview', component: DayviewComponent, data: { breadcrumb: 'dayview' } },
  { path: 'monthview', component: MonthviewComponent, data: { breadcrumb: 'monthview' } },
];

@NgModule({
  declarations: [DayviewComponent, MonthviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule,
  ]
})
export class TimelineModule { }
