import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayRevenueComponent } from './day-revenue/day-revenue.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { WeekRevenueComponent } from './week-revenue/week-revenue.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartModule } from 'angular-highcharts';

export const routes: Routes = [
  { path: '', redirectTo: "day-view", pathMatch: 'full' },
  { path: 'day-view', component: DayRevenueComponent },
  { path: 'week-view', component: WeekRevenueComponent },
  { path: 'month-view', component: MonthViewComponent },
];

@NgModule({
  declarations: [DayRevenueComponent, WeekRevenueComponent, MonthViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxChartsModule, PerfectScrollbarModule,ChartModule
  ],
  entryComponents: []
})
export class RevenueTrendModule { }
