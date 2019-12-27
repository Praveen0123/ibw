import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { DragulaService } from 'ng2-dragula';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AddLookupDialogComponent } from './lookup/add-lookup-dialog/add-lookup-dialog.component';
import { ConfigureKanbanComponent } from './configure-kanban/configure-kanban.component';
import { AlertService } from '../shared/services/alert.service';
import { AddjobdialogueComponent } from './job-codes/addjobdialogue/addjobdialogue.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { MasterListsComponent } from './master-lists/master-lists.component';
import { SettingsComponent } from './settings/settings.component';
import { AvailabilityComponent } from './availability/availability.component';
import { AddClientTypeDialogComponent } from './client-type/add-client-type-dialog/add-client-type-dialog.component';
import { AddSurveyTypeModalComponent } from './survey-type/add-survey-type-modal/add-survey-type-modal.component';
import { AddLeadSourceDialogComponent } from './lead-sources/add-lead-source-dialog/add-lead-source-dialog.component';
import { AddAssetCategoryDialogComponent } from './asset-categories/add-asset-category-dialog/add-asset-category-dialog.component';
import { AddExpenseCodeDialogComponent } from './expense-codes/add-expense-code-dialog/add-expense-code-dialog.component';
import { AddMunicipalitiesDialogComponent } from './municipalities/add-municipalities-dialog/add-municipalities-dialog.component';
import { AddPotentialLevelDialogComponent } from './potential-levels/add-potential-level-dialog/add-potential-level-dialog.component';
import { AnnouncementsDialogComponent } from './announcements/announcements-dialog/announcements-dialog.component';
import { AddStepDialogComponent } from './configure-kanban/add-step-dialog/add-step-dialog.component';
import { DelaydialogueComponent } from './master-lists/delayreason/delaydialogue/delaydialogue.component';

import { FileLocationdialogueComponent } from './master-lists/physical-file-location/file-locationdialogue/file-locationdialogue.component';
import { ManagegridcoldialogComponent } from './asset_master/managegridcoldialog/managegridcoldialog.component';
import { AddAssetDialogComponent } from './asset_master/add-asset-dialog/add-asset-dialog.component';
import { AddProjectTypesDialogComponent } from './project-types/add-project-types-dialog/add-project-types-dialog.component';
import { AddLeaveReasonDialogComponent } from './leave-reasons/add-leave-reason-dialog/add-leave-reason-dialog.component';
import { RolesComponent } from './Permissions/roles.component';
import { ConfigurePermissionsComponent } from './Permissions/configure-permissions/configure-permissions.component';
import { RoleDialogComponent } from './Permissions/role-dialog/role-dialog.component';
import { AssignedUsersListModalComponent } from './Permissions/assigned-users-list-modal/assigned-users-list-modal.component';
import { DownloadExcelService } from '../download-excel.service';
import { AuthGuard } from '../login/auth.guard';
import { EventMasterComponent } from './event-master/event-master.component';
import { MasterDataService } from './master-data.service';
// import { ManageAssetsComponent } from './asset_master/manage-assets.component';

export const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: './users/users.module#UsersModule', data: { breadcrumb: 'Users' } ,canActivateChild:[AuthGuard]},
  { path: 'permissions', component: RolesComponent, data: { breadcrumb: 'Permissions' },canActivateChild:[AuthGuard] },
  { path: 'configure_kanban', component: ConfigureKanbanComponent, loadChildren: './configure-kanban/configure-kanban.module#ConfigureKanbanModule', data: { breadcrumb: 'Configure Kanban' },canActivateChild:[AuthGuard] },
  { path: 'announcements', component: AnnouncementsComponent, data: { breadcrumb: 'Announcements' } },
  { path: 'master-data', component: MasterDataComponent, loadChildren: './master-data/master-data.module#MasterDataModule', data: { breadcrumb: 'Master Data' },canActivateChild:[AuthGuard] },
  { path: 'master-lists', component: MasterListsComponent, loadChildren: './master-lists/master-lists.module#MasterListsModule', data: { breadcrumb: 'Master List' } },
  // { path: 'settings', component: SettingsComponent, loadChildren: './settings/settings.module#SettingsModule', data: { breadcrumb: 'Settings' } ,canActivateChild:[AuthGuard]},
  { path: 'settings', component: SettingsComponent, data: { breadcrumb: 'Settings' } ,canActivateChild:[AuthGuard]},
  { path: 'availability', component: AvailabilityComponent, loadChildren: './availability/availability.module#AvailabilityModule', data: { breadcrumb: 'Important Dates' } ,canActivateChild:[AuthGuard]},
  { path: 'configue-kanban', component: ConfigureKanbanComponent, loadChildren: './configure-kanban/configure-kanban.module#ConfigureKanbanModule', data: { breadcrumb: 'Configure-Kanban' },canActivateChild:[AuthGuard] },
  { path: 'configure-permissions/:roleId', component: ConfigurePermissionsComponent, data: { breadcrumb: 'Configure Permissions' }  },
  { path: 'event-master', component: EventMasterComponent,loadChildren: './event-master/event-master.module#EventMasterModule', data: { breadcrumb: 'Event Master' } }
];

@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, TableModule,
  ],

  providers: [DragulaService, AlertService,MasterDataService, DownloadExcelService],

  declarations: [AssignedUsersListModalComponent,ConfigurePermissionsComponent,AddStepDialogComponent,AddLeaveReasonDialogComponent ,
    AnnouncementsDialogComponent,
    AddLookupDialogComponent,
    RolesComponent,
    ConfigureKanbanComponent,
    AnnouncementsComponent,
    RoleDialogComponent,
    AddjobdialogueComponent, 
    MasterDataComponent, MasterListsComponent, 
   SettingsComponent,AddClientTypeDialogComponent, 
   AvailabilityComponent,AddSurveyTypeModalComponent,
   FileLocationdialogueComponent,
   EventMasterComponent,
   
    AddLeadSourceDialogComponent,
    AddAssetCategoryDialogComponent,
    AddExpenseCodeDialogComponent,
    AddMunicipalitiesDialogComponent,
    AddPotentialLevelDialogComponent,
    DelaydialogueComponent,
    AnnouncementsDialogComponent,
    ManagegridcoldialogComponent,
    AddAssetDialogComponent,
    AddProjectTypesDialogComponent,
    ],

  entryComponents: [AssignedUsersListModalComponent,AddLeaveReasonDialogComponent,AddStepDialogComponent, AnnouncementsDialogComponent,
    AddLookupDialogComponent, AddAssetCategoryDialogComponent, AddExpenseCodeDialogComponent,
    AddjobdialogueComponent, AddMunicipalitiesDialogComponent,
    AddClientTypeDialogComponent,
    RoleDialogComponent,
    AddSurveyTypeModalComponent,AddLeadSourceDialogComponent,AddPotentialLevelDialogComponent,DelaydialogueComponent,FileLocationdialogueComponent,
    ManagegridcoldialogComponent,AddAssetDialogComponent,AddProjectTypesDialogComponent
  ]
})
export class AdminModule { }
