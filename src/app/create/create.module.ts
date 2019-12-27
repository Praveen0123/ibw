import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ExpensesComponent } from 'src/app/create/expenses/expenses.component';
import { TimesheetsComponent } from 'src/app/create/timesheets/timesheets.component';
import { ScheduleDialogComponent } from 'src/app/create/schedule-dialog/schedule-dialog.component';
import { CalendarModule } from 'angular-calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ExpenseDialogComponent } from './expenses/expense-dialog/expense-dialog.component';
import { TimesheetDialogComponent } from './timesheets/timesheet-dialog/timesheet-dialog.component';
import { AddExpenseRowComponent } from './expenses/expense-dialog/add-expense-row/add-expense-row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddHoursRowComponent } from './timesheets/timesheet-dialog/add-hours-row/add-hours-row.component';
import { TimesheetsStatusModalComponent } from './timesheets/timesheets-status-modal/timesheets-status-modal.component';
import { ExpensesStatusModalComponent } from './expenses/expenses-status-modal/expenses-status-modal.component';

const rourtes = [
  {path:"",redirectTo:'timesheets',pathMatch:'full'},
  {path:"timesheets",component:TimesheetsComponent,data: { breadcrumb: 'Timesheets' }},
  {path:"expenses",component:ExpensesComponent,data: { breadcrumb: 'Expenses' }},
  
]

@NgModule({
  declarations: [ExpensesComponent,TimesheetsComponent,ScheduleDialogComponent, 
    ExpenseDialogComponent, TimesheetDialogComponent, AddExpenseRowComponent, AddHoursRowComponent, TimesheetsStatusModalComponent, ExpensesStatusModalComponent],
  imports: [CalendarModule,FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    CommonModule,RouterModule.forChild(rourtes),SharedModule
  ],
  entryComponents:[ExpensesStatusModalComponent,TimesheetsStatusModalComponent,AddHoursRowComponent,ExpenseDialogComponent,AddExpenseRowComponent,TimesheetDialogComponent,ScheduleDialogComponent]
})
export class CreateModule { }
