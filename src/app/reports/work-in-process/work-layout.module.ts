import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ActionPerTypeComponent } from './action-per-type/action-per-type.component';
import { ActionsCompletedPerProjectComponent } from './actions-completed-per-project/actions-completed-per-project.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ActionsHoursByTypeComponent } from './actions-hours-by-type/actions-hours-by-type.component';
import { BilledVsUnbilledComponent } from './billed-vs-unbilled/billed-vs-unbilled.component';
import { BilledUnbilledExpensesComponent } from './billed-unbilled-expenses/billed-unbilled-expenses.component';
import { NoOfActionPerSowComponent } from './no-of-action-per-sow/no-of-action-per-sow.component';
import { ChartModule } from 'angular-highcharts';

const routes: Routes = [
  { path: '', redirectTo: 'action-per-type', pathMatch: 'full' },
  { path: 'action-per-type', component: ActionPerTypeComponent, data: { breadcrumb: 'Work in Process' } },
  { path: 'actions-hours-by-type', component: ActionsHoursByTypeComponent, data: { breadcrumb: 'Work in Process' } },
  { path: 'actions-completed-per-project', component: ActionsCompletedPerProjectComponent, data: { breadcrumb: 'Work in Process' } },
  { path: 'billed-vs-unbilled', component: BilledVsUnbilledComponent, data: { breadcrumb: 'Work in Process' } },
  { path: 'billed-unbilled-expenses', component: BilledUnbilledExpensesComponent, data: { breadcrumb: 'Work in Process' } },
  { path: 'no-of-action-per-sow', component: NoOfActionPerSowComponent, data: { breadcrumb: 'Work in Process' } },

]
@NgModule({
  declarations: [ActionPerTypeComponent, ActionsCompletedPerProjectComponent, ActionsHoursByTypeComponent, BilledVsUnbilledComponent, BilledUnbilledExpensesComponent, NoOfActionPerSowComponent],
  imports: [
    CommonModule,SharedModule, RouterModule.forChild(routes),NgxChartsModule,ChartModule
  ]
})
export class WorkLayoutModule { }
