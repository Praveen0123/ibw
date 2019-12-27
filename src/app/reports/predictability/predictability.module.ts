import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuedatesComponent } from './duedates/duedates.component';
import { BudgetingComponent } from './budgeting/budgeting.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular-highcharts';

const routes: Routes = [
  { path: '', redirectTo: 'duedates', pathMatch: 'full' },
  { path: 'duedates', component: DuedatesComponent, loadChildren: './duedates/duedates.module#DuedatesModule', data: { breadcrumb: 'Predictability' } },
  { path: 'budgeting', component: BudgetingComponent, data: { breadcrumb: 'Predictability' } },
   
]
@NgModule({
  declarations: [DuedatesComponent, BudgetingComponent],
  imports: [
    CommonModule,SharedModule, RouterModule.forChild(routes),ChartModule,
  ],
  entryComponents:[]
})
export class PredictabilityModule { }
