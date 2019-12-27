import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCodesComponent } from '../job-codes/job-codes.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AssetCategoriesComponent } from '../asset-categories/asset-categories.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ClientTypeComponent } from '../client-type/client-type.component';
import { SurveyTypeComponent } from '../survey-type/survey-type.component';
import { LeadSourcesComponent } from '../lead-sources/lead-sources.component';
import { ExpenseCodesComponent } from '../expense-codes/expense-codes.component';
import { MunicipalitiesComponent } from '../municipalities/municipalities.component';
import { PotentialLevelsComponent } from '../potential-levels/potential-levels.component';
import { DelayreasonComponent } from '../master-lists/delayreason/delayreason.component';
import { ManageAssetsComponent } from '../asset_master/manage-assets.component';
import { ProjectTypesComponent } from '../project-types/project-types.component';
import { LeaveReasonsComponent } from '../leave-reasons/leave-reasons.component';
import { LookupComponent } from '../lookup/lookup.component';
import { SurveyPurposeComponent } from './survey-purpose/survey-purpose.component';
import { ConfigureQuestionnaireComponent } from './configure-questionnaire/configure-questionnaire.component';
import { AddsurveypurposedailogComponent } from './survey-purpose/addsurveypurposedailog/addsurveypurposedailog.component';
import { AddquestiondailogComponent } from './configure-questionnaire/addquestiondailog/addquestiondailog.component';
import { CommonMasterDataDialogComponent } from './common-master-data-dialog/common-master-data-dialog.component';
import { AssetMasterDataServiceService } from '../asset_master/asset-master-data-service.service';
import { DisplayExcelRecordsComponent } from './display-excel-records/display-excel-records.component';


export const routes = [
  { path: '', redirectTo: 'job-codes', pathMatch: 'full' },
  { path: 'job-codes', component: JobCodesComponent, data: { breadcrumb: 'Job Codes' } },
  { path: 'expense-codes', component: ExpenseCodesComponent, data: { breadcrumb: 'Expense Codes' } },

  { path: 'asset_categories', component: AssetCategoriesComponent, data: { breadcrumb: 'Asset Categories' } },
  { path: 'client-type', component: ClientTypeComponent, data: { breadcrumb: 'client Types' } },
  { path: 'project-types', component: ProjectTypesComponent, data: { breadcrumb: 'Project Types' } },
  { path: 'lead-source', component: LeadSourcesComponent, data: { breadcrumb: 'Lead Sources' } },
  { path: 'municipalities', component: MunicipalitiesComponent, data: { breadcrumb: 'Municipalities' } },
  { path: 'potential-levels', component: PotentialLevelsComponent, data: { breadcrumb: 'Potential Levels' } },
  { path: 'delay-reason', component: DelayreasonComponent, data: { breadcrumb: 'Delay Reason' } },
  { path: 'asset_master', component: ManageAssetsComponent, data: { breadcrumb: 'Asset Master' } },
  { path: 'leave_reasons', component: LeaveReasonsComponent, data: { breadcrumb: 'Leave Reasons' } },
  { path: 'lookup-options', component: LookupComponent, data: { breadcrumb: 'Lookup Options' } },
  { path: 'configure-questionnaire', component: ConfigureQuestionnaireComponent, data: { breadcrumb: 'Configure Questionnaire' } },
  { path: 'survey-purpose', component: SurveyPurposeComponent, data: { breadcrumb: 'Survey Purpose' } },
  { path: 'excel-records', component: DisplayExcelRecordsComponent, data: { breadcrumb: 'Survey Purpose' } },
]

@NgModule({
  providers: [AssetMasterDataServiceService],
  declarations: [ JobCodesComponent, ExpenseCodesComponent, 
    LookupComponent, AssetCategoriesComponent, LeaveReasonsComponent,
    MunicipalitiesComponent, PotentialLevelsComponent, DelayreasonComponent,
    ClientTypeComponent, SurveyTypeComponent, LeadSourcesComponent, ManageAssetsComponent, 
    ProjectTypesComponent, SurveyPurposeComponent, ConfigureQuestionnaireComponent, 
    AddsurveypurposedailogComponent, AddquestiondailogComponent, CommonMasterDataDialogComponent,
     DisplayExcelRecordsComponent],
  imports: [
    CommonModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [AddsurveypurposedailogComponent, AddquestiondailogComponent, CommonMasterDataDialogComponent]
})

export class MasterDataModule { }
