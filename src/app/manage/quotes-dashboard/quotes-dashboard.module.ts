import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites/sites.component';
import { RouterModule } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { OverviewComponent } from './overview/overview.component';
import { SowComponent } from './sow/sow.component';
import { TasksComponent } from './tasks/tasks.component';
import { BudgetComponent } from './budget/budget.component';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { TriStateCheckboxModule } from 'primeng/components/tristatecheckbox/tristatecheckbox';
import { ManageSOWGridColDialogComponent } from '../project-dashboard/sow/review-grid-col-dialog/manage-sow-grid-col-dialog.component';
import { ExpensesComponent } from 'src/app/manage/quotes-dashboard/expenses/expenses.component';
import { HoursComponent } from 'src/app/manage/quotes-dashboard/hours/hours.component';
import { AlertsComponent } from 'src/app/manage/quotes-dashboard/alerts/alerts.component';
import { InvoicesComponent } from 'src/app/manage/quotes-dashboard/invoices/invoices.component';
import { ExpensesGridColDialogComponent } from './expenses/expense-grid-col-dialog/expense-grid-col-dialog.component';



const routes = [
  
  { path: '', redirectTo: 'overveiw', pathMatch: 'full' },
  { path: 'activity', component: ActivityComponent, loadChildren: './activity/activity.module#ActivityModule', data: { breadcrumb: 'Quotes Dashboard' } },
  { path: 'overveiw', component: OverviewComponent, data: { breadcrumb: 'Quotes Dashboard' } },
  { path: 'sites', component: SitesComponent, data: { breadcrumb: 'Quotes Dashboard' } },
  { path: 'sow', component: SowComponent, data: { breadcrumb: 'Quotes Dashboard' } },
  { path: 'tasks', component: TasksComponent, data: { breadcrumb: 'Quotes Dashboard' } },
  { path: 'budget', component: BudgetComponent, data: { breadcrumb: 'Quotes Dashboard' } },

  { path: 'expenses', component: ExpensesComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'hours', component: HoursComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'alerts', component: AlertsComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'invoices', component: InvoicesComponent, data: { breadcrumb: 'Project Dashboard' } },

];


@NgModule({
  declarations: [ExpensesComponent,HoursComponent,AlertsComponent,InvoicesComponent, SitesComponent, ActivityComponent, OverviewComponent, SowComponent, 
    TasksComponent, BudgetComponent,ExpensesGridColDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,ModalModule.forRoot(),TriStateCheckboxModule
  ],
  entryComponents:[ExpensesGridColDialogComponent]
})
export class QuotesDashboardModule { }
