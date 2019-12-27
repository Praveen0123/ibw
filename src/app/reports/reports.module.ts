import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictabilityComponent } from './predictability/predictability.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PredictabilityModule } from './predictability/predictability.module';
import { ProductivityComponent } from './productivity/productivity.component';
import { BillingComponent } from './billing/billing.component';
import { RevenueTrendComponent } from './billing/revenue-trend/revenue-trend.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RevenueProjectionComponent } from './billing/revenue-projection/revenue-projection.component';
import { RevenuePerRegionComponent } from './billing/revenue-per-region/revenue-per-region.component';
import { RevenuePerWorktypeComponent } from './billing/revenue-per-worktype/revenue-per-worktype.component';
import { RevenuePerdayPerroleComponent } from './billing/revenue-perday-perrole/revenue-perday-perrole.component';
import { BillingByJobcodesComponent } from './billing/billing-by-jobcodes/billing-by-jobcodes.component';
import { ProfitabilityComponent } from './profitability/profitability.component';
import { ProfitabilityGridviewComponent } from './profitability/profitability-gridview/profitability-gridview.component';
import { ProfitabilityByTypeComponent } from './profitability/profitability-by-type/profitability-by-type.component';
import { ProfitabilityByAccountsmanagerComponent } from './profitability/profitability-by-accountsmanager/profitability-by-accountsmanager.component';
import { ProfitabilityByProjectmanagerComponent } from './profitability/profitability-by-projectmanager/profitability-by-projectmanager.component';
import { TrendOverTimeComponent } from './profitability/trend-over-time/trend-over-time.component';
import { WorkInProcessComponent } from './work-in-process/work-in-process.component';
import { ChartModule } from 'angular-highcharts';
import { LeaveReportsComponent } from './leave-reports/leave-reports.component';
import { AuthGuard } from '../login/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'predictability', pathMatch: 'full' },
  { path: 'predictability', component: PredictabilityComponent, loadChildren: './predictability/predictability.module#PredictabilityModule', data: { breadcrumb: 'Predictability' } ,canActivateChild:[AuthGuard]},
  { path: 'productivity', component: ProductivityComponent, loadChildren: './productivity/productivity.module#ProductivityModule', data: { breadcrumb: 'Productivity' } ,canActivateChild:[AuthGuard]},
  { path: 'profitability', component: ProfitabilityComponent,  data: { breadcrumb: 'Profitability' },canActivateChild:[AuthGuard]},
  { path: 'billing', component: BillingComponent, loadChildren: './billing/billing.module#BillingModule', data: { breadcrumb: 'Billing' } ,canActivateChild:[AuthGuard]},
  { path: 'work-in-process', component: WorkInProcessComponent, loadChildren: './work-in-process/work-layout.module#WorkLayoutModule', data: { breadcrumb: 'Work in Process' } ,canActivateChild:[AuthGuard]},
  { path: 'leave', component: LeaveReportsComponent,  data: { breadcrumb: 'Leave Reports' } ,canActivateChild:[AuthGuard]},

]
@NgModule({
  declarations: [BillingComponent, PredictabilityComponent, ProductivityComponent,
    RevenueProjectionComponent, RevenuePerRegionComponent,
    RevenuePerWorktypeComponent, RevenuePerdayPerroleComponent, BillingByJobcodesComponent, ProfitabilityComponent, WorkInProcessComponent,
    ProfitabilityByAccountsmanagerComponent,ProfitabilityByProjectmanagerComponent,ProfitabilityByTypeComponent,TrendOverTimeComponent,ProfitabilityGridviewComponent, LeaveReportsComponent
  ],
  imports: [NgxChartsModule, ChartModule,
    CommonModule, SharedModule, RouterModule.forChild(routes),
  ],
  entryComponents: []
})
export class ReportsModule { }
