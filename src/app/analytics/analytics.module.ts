import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { RouterModule } from '@angular/router';
//import { AlertsTmComponent } from './taskmanager/alerts-tm/alerts-tm.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AuthGuard } from '../login/auth.guard';
//import { ReportsComponent } from './reports/reports.component';
export const routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',component:DashboardComponent, loadChildren: './dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' },canActivateChild:[AuthGuard] },
 // { path: 'reports', component: TaskmanagerComponent, data: { breadcrumb: 'Reports' } },
  //{ path: 'calender', component: ReportsComponent, data: { breadcrumb: 'Calendar' } },
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),SharedModule, ChartModule
  ],
  declarations: [DashboardComponent
  ]
})
export class AnalyticsModule { }
