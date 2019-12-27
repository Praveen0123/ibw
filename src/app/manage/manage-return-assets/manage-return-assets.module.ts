import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../../../node_modules/@angular/router';
import { ManageReturnAssetsPendingComponent } from './manage-return-assets-pending/manage-return-assets-pending.component';
import { ManageReturnAssetsDeclinedComponent } from './manage-return-assets-declined/manage-return-assets-declined.component';
import { ManageReturnAssetsApprovedComponent } from './manage-return-assets-approved/manage-return-assets-approved.component';
import { SharedModule } from '../../shared/shared.module';
import { ManageReturnAssetsReturnedComponent } from './manage-return-assets-returned/manage-return-assets-returned.component';
import { ManageReturnAssetsActivityComponent } from './manage-return-assets-activity/manage-return-assets-activity.component';


const routes:Routes = [
  { path: '', redirectTo: 'pending', pathMatch: 'full' },
  { path: 'pending', component: ManageReturnAssetsPendingComponent, data: { breadcrumb: 'Return Assets' } },
  { path: 'returned', component:ManageReturnAssetsReturnedComponent , data: { breadcrumb: 'Return Assets' } },
  { path: 'activity', component: ManageReturnAssetsActivityComponent, data: { breadcrumb: 'Return Assets' } }
];

@NgModule({
  declarations: [ManageReturnAssetsPendingComponent,ManageReturnAssetsDeclinedComponent,ManageReturnAssetsApprovedComponent, ManageReturnAssetsReturnedComponent, ManageReturnAssetsActivityComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class ManageReturnAssetsModule { }
