import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ManageService } from './manage.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { Data } from '../fake backend/data.backend.data';
import { NgDatepickerModule } from 'ng2-datepicker';
import { CalendarModule } from 'angular-calendar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragDropModule } from 'primeng/dragdrop';
import { AgmCoreModule } from '@agm/core';
import { ClientsComponent } from './clients/clients.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDialogComponent } from './contacts/contacts-dialog/contacts-dialog.component';
import { QuotesDialogComponent } from './quotes/quotes-dialog/quotes-dialog.component';
import { QuotesComponent } from './quotes/quotes.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { QuoteUpdateDialogComponent } from './quotes/quote-update-dialog/quote-update-dialog.component';
import { ClientsGridColDialogComponent } from './clients/clients-grid-col-dialog/clients-grid-col-dialog.component';
import { QuotesGridColDialogComponent } from './quotes/quotes-grid-col-dialog/quotes-grid-col-dialog.component';
import { ContactsGridColDialogComponent } from './contacts/contacts-grid-col-dialog/contacts-grid-col-dialog.component';
import { QuotesDashboardComponent } from './quotes-dashboard/quotes-dashboard.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { NotesdialogComponent } from './quotes-dashboard/activity-notes/notesdialog/notesdialog.component';
import { LeavesComponent } from './leaves/leaves.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { TimesheetsComponent } from './timesheets/timesheets.component';
import { ManageReturnAssetsComponent } from './manage-return-assets/manage-return-assets.component';
import { AttendanceExceptions } from './attendance-exceptions/attendance.component';
import { SetupBudgetBreakupComponent } from './quotes-dashboard/setup-budget-breakup/setup-budget-breakup.component';
import { PayRollComponent } from './pay-roll/pay-roll.component';
import { ReviewGridColDialogComponent } from './projects/review/review-grid-col-dialog/review-grid-col-dialog.component';
import { ReviewComponent } from './projects/review/review.component';
import { AuthGuard } from '../login/auth.guard';


export const routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent, loadChildren: './clients/clients.module#ClientsModule', data: { breadcrumb: 'Clients' },canActivateChild:[AuthGuard] },
  { path: 'contacts', component: ContactsComponent, data: { breadcrumb: 'Contacts' },canActivateChild:[AuthGuard] },
  { path: 'quotes', component: QuotesComponent, loadChildren: './quotes/quotes.module#QuotesModule', data: { breadcrumb: 'Quotes' },canActivateChild:[AuthGuard] },
  { path: 'quotes-dashboard', component: QuotesDashboardComponent, loadChildren: './quotes-dashboard/quotes-dashboard.module#QuotesDashboardModule', data: { breadcrumb: 'Quotes Dashboard' } },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule', data: { breadcrumb: 'Projects' } ,canActivateChild:[AuthGuard] },
  { path: 'project-dashboard', component: ProjectDashboardComponent, loadChildren: './project-dashboard/project-dashboard.module#ProjectDashboardModule', data: { breadcrumb: 'Project Dashboard' } },
  { path: 'leaves',  loadChildren: './leaves/leave-approval.module#LeaveApprovalModule', data: { breadcrumb: 'Leave Approvals' }  ,canActivateChild:[AuthGuard]},
  { path: 'attendance-exceptions',  component: AttendanceExceptions, data: { breadcrumb: 'Attendance Exceptions' } },
  { path: 'under_construction', component:UnderConstructionComponent,data: { breadcrumb: 'Under Construction' } },

  { path: 'payroll', loadChildren: './pay-roll/payroll/payroll.module#PayrollModule', component: PayRollComponent, data: { breadcrumb: 'Payroll' }  ,canActivateChild:[AuthGuard]},

  
  {path:'return-assets',loadChildren: './manage-return-assets/manage-return-assets.module#ManageReturnAssetsModule',component:ManageReturnAssetsComponent,data:{breadcrumb:'Return Assets'} ,canActivateChild:[AuthGuard]},
  { path: 'setup-budget', component: SetupBudgetBreakupComponent, data: { breadcrumb: 'Setup Budget' } },
  { path: 'review', component: ReviewComponent, data: { breadcrumb: 'Time & Expense Review' }  },

];

@NgModule({
  imports: [
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    MglTimelineModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ConfirmationPopoverModule,
    CommonModule, NgDatepickerModule, NgMultiSelectDropDownModule.forRoot(),
    InMemoryWebApiModule.forFeature(Data, { delay: 500 }),
    ModalModule, SharedModule, HttpClientModule, AgmCoreModule, NgxPaginationModule, CalendarModule,
    RouterModule.forChild(routes)
  ],

  declarations: [TimesheetsComponent,ContactsDialogComponent,ProjectDashboardComponent, QuoteUpdateDialogComponent, QuotesDashboardComponent,
    ContactsComponent,QuotesComponent,NotesdialogComponent,ClientsComponent, ContactsGridColDialogComponent, 
      ClientsGridColDialogComponent, QuotesGridColDialogComponent, GoogleMapsComponent, 
       UnderConstructionComponent, ManageReturnAssetsComponent,
      LeavesComponent,AttendanceExceptions,SetupBudgetBreakupComponent,PayRollComponent, ReviewGridColDialogComponent,ReviewComponent
    ],
  // providers: [ManageService],

  entryComponents: [
    ContactsDialogComponent, 
    QuoteUpdateDialogComponent, ClientsGridColDialogComponent,
    QuotesGridColDialogComponent, ContactsGridColDialogComponent,NotesdialogComponent,
    ReviewGridColDialogComponent
  ]
})
export class ManageModule { }
