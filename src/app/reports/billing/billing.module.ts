import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenueTrendComponent } from './revenue-trend/revenue-trend.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';

export const routes = [
  { path: '', redirectTo: "revenue-trend", pathMatch: 'full' },
  { path: 'revenue-trend', component: RevenueTrendComponent,
  loadChildren: './revenue-trend/revenue-trend.module#RevenueTrendModule'}
];
@NgModule({
  declarations: [
    RevenueTrendComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes), PerfectScrollbarModule, NgxChartsModule
  ],
  entryComponents: []
})
export class BillingModule { } 
