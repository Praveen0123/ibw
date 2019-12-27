import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayRollComponent } from '../pay-roll.component';
import { ManageHoursComponent } from '../../manage-hours/manage-hours.component';
import { ManageExpensesComponent } from '../../manage-expenses/manage-expenses.component';
import { RouterModule } from '../../../../../node_modules/@angular/router';
import { SharedModule } from '../../../shared/shared.module';




export const routes = [
  { path: '', redirectTo: 'timesheets', pathMatch: 'full' },
  { path: 'timesheets', loadChildren: '../../manage-hours/manage-hours.module#ManageHoursModule', component: ManageHoursComponent, data: { breadcrumb: 'Payroll' } },
  { path: 'expenses', loadChildren: '../../manage-expenses/manage-expenses.module#ManageExpensesModule', component: ManageExpensesComponent, data: { breadcrumb: 'Expenses' } },
];

@NgModule({
  declarations: [ManageExpensesComponent,ManageHoursComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})


export class PayrollModule {



}
