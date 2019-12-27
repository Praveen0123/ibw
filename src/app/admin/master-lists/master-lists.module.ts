import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MunicipalitiesComponent } from '../municipalities/municipalities.component';
import { PotentialLevelsComponent } from '../potential-levels/potential-levels.component';
import { SharedModule } from '../../shared/shared.module';
import { DelayreasonComponent } from './delayreason/delayreason.component';
import { PhysicalFileLocationComponent } from './physical-file-location/physical-file-location.component';
import { FileLocationdialogueComponent } from './physical-file-location/file-locationdialogue/file-locationdialogue.component';


export const routes = [
  { path: '', redirectTo: 'municipalities', pathMatch: 'full' },
  { path: 'physical-file-location', component: PhysicalFileLocationComponent, data: { breadcrumb: 'File Location' } },

  

];


@NgModule({
  declarations: [ PhysicalFileLocationComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class MasterListsModule { }
