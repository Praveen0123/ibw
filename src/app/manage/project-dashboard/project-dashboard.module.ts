import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { OverviewComponent } from './overview/overview.component';
import { SitesComponent } from './sites/sites.component';
import { SowComponent } from './sow/sow.component';
import { TasksComponent } from './tasks/tasks.component';
import {BudgetComponent } from './budget/budget.component';
import { ProjectActivityComponent } from 'src/app/manage/project-dashboard/project-activity/project-activity.component';
import { DocsComponent } from './docs/docs.component';
import { AlertsComponent } from './alerts/alerts.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ActionsComponent } from './actions/actions.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HoursComponent } from './hours/hours.component';
import { ExpensesGridColDialogComponent } from './expenses/expense-grid-col-dialog/expense-grid-col-dialog.component';
import { ManageSOWGridColDialogComponent } from './sow/review-grid-col-dialog/manage-sow-grid-col-dialog.component';


const routes = [
  
  { path: '', redirectTo: 'overveiw', pathMatch: 'full' },
  { path: 'activity', component: ProjectActivityComponent, loadChildren: 'src/app/manage/project-dashboard/project-activity/project-activity.module#ProjectActivityModule', data: { breadcrumb: 'Project Dashboard' } },
  { path: 'overveiw', component: OverviewComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'sites', component: SitesComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'sow', component: SowComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'tasks', component: TasksComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'actions', component: ActionsComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'expenses', component: ExpensesComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'hours', component: HoursComponent, data: { breadcrumb: 'Project Dashboard' } },

  { path: 'budget', component: BudgetComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'invoices', component: InvoicesComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'docs', component: DocsComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'alerts', component: AlertsComponent, data: { breadcrumb: 'Project Dashboard' } },

];

@NgModule({
  declarations: [SitesComponent, ProjectActivityComponent, OverviewComponent, SowComponent, 
    TasksComponent,  DocsComponent,BudgetComponent, AlertsComponent, InvoicesComponent, 
    ActionsComponent, ExpensesComponent, HoursComponent,ExpensesGridColDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,ModalModule.forRoot()
  ],
  entryComponents:[ExpensesGridColDialogComponent]
})
export class ProjectDashboardModule { }
