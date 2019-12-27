import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithinbudgetComponent } from './withinbudget/withinbudget.component';
import { OverrunComponent } from './overrun/overrun.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular-highcharts';

const routes: Routes = [
  { path: '', redirectTo: 'withinbudget', pathMatch: 'full' },
  { path: 'withinbudget', component: WithinbudgetComponent, data: { breadcrumb: 'Within Budget' } },
  { path: 'overrun', component: OverrunComponent, data: { breadcrumb: 'OverRun' } },
]

@NgModule({
  declarations: [WithinbudgetComponent, OverrunComponent],
  imports: [
    CommonModule,SharedModule, RouterModule.forChild(routes),NgxChartsModule,ChartModule
  ]
})
export class VarianceModule { }
