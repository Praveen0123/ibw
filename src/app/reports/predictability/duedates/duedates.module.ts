import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimeComponent } from './ontime/ontime.component';
import { OverdueComponent } from './overdue/overdue.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular-highcharts';

const routes: Routes = [
  { path: '', redirectTo: 'ontime', pathMatch: 'full' },
  { path: 'ontime', component: OntimeComponent, data: { breadcrumb: 'On Time' } },
  { path: 'overdue', component: OverdueComponent, data: { breadcrumb: 'OverDue' } },
]
@NgModule({
  declarations: [OntimeComponent, OverdueComponent],
  imports: [
    CommonModule,SharedModule, RouterModule.forChild(routes),NgxChartsModule,ChartModule
  ],
  entryComponents:[]
})
export class DuedatesModule { }
