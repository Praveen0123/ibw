import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ScheduleAssetsComponent } from './schedule-assets/schedule-assets.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PopoverModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

const routes :Routes = [
  { path: '', redirectTo: 'schedule-assets', pathMatch: 'full' },
  // { path: 'manage-assets', component: ManageAssetsComponent, data: { breadcrumb: 'Assets' } },
  { path: 'schedule-assets', component: ScheduleAssetsComponent, data: { breadcrumb: 'Manage Assets' } },

]
@NgModule({
  declarations: [ScheduleAssetsComponent
    ],
  imports: [
    CommonModule, RouterModule.forChild(routes),SharedModule,ConfirmationPopoverModule, PopoverModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  entryComponents:[
    
  ]
})
export class AssetsModule { }
