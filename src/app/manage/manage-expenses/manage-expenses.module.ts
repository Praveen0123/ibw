import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageExpensesPendingComponent } from './manage-expenses-pending/manage-expenses-pending.component';
import { ManageExpensesDeclinedComponent } from './manage-expenses-declined/manage-expenses-declined.component';
import { ManageExpensesApprovedComponent } from './manage-expenses-approved/manage-expenses-approved.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes:Routes = [
  { path: '', redirectTo: 'pending', pathMatch: 'full' },
  { path: 'pending', component: ManageExpensesPendingComponent, data: { breadcrumb: 'Expenses' } },
  { path: 'declined', component: ManageExpensesDeclinedComponent, data: { breadcrumb: 'Expenses' } },
  { path: 'approved', component: ManageExpensesApprovedComponent, data: { breadcrumb: 'Expenses' } }
];
@NgModule({
  declarations: [ManageExpensesPendingComponent, ManageExpensesDeclinedComponent, ManageExpensesApprovedComponent],
  imports: [
    CommonModule,SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ManageExpensesModule { }
