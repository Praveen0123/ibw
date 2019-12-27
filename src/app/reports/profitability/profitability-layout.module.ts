import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfitabilityByTypeComponent } from './profitability-by-type/profitability-by-type.component';
import { ProfitabilityByProjectmanagerComponent } from './profitability-by-projectmanager/profitability-by-projectmanager.component';
import { ProfitabilityByAccountsmanagerComponent } from './profitability-by-accountsmanager/profitability-by-accountsmanager.component';
import { TrendOverTimeComponent } from './trend-over-time/trend-over-time.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular-highcharts'; 
import { ProfitabilityGridviewComponent } from './profitability-gridview/profitability-gridview.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'profitability-by-type', pathMatch: 'full' },
//   // { path: 'profitability-gridview', component: ProfitabilityGridviewComponent, data: { breadcrumb: 'Profitability' } },
//   { path: 'profitability-by-type', component: ProfitabilityByTypeComponent, data: { breadcrumb: 'Profitability' } },
//   { path: 'profitability-by-projectmanager', component: ProfitabilityByProjectmanagerComponent, data: { breadcrumb: 'Profitability' } },
//   { path: 'profitability-by-accountsmanager', component: ProfitabilityByAccountsmanagerComponent, data: { breadcrumb: 'Profitability' } },
//   { path: 'trend-over-time', component: TrendOverTimeComponent, data: { breadcrumb: 'Profitability' } }
// ]
@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,SharedModule,ChartModule
  ]
})
export class ProfitabilityLayoutModule { }
