import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { DiskSpaceComponent } from './disk-space/disk-space.component';
import { TodoComponent } from './todo/todo.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleeMapsComponent } from './googlee-maps/googlee-maps.component';
import { AgmCoreModule, GoogleMapsAPIWrapper, InfoWindowManager, MarkerManager } from '@agm/core';
import { PieComponent } from './pie/pie.component';
import { PieeComponent } from './piee/piee.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TimeEntryUserComponent } from './time-entry-user/time-entry-user.component';
import { MatCardModule} from '@angular/material';
import { ProjectManagerUserComponent } from './project-manager-user/project-manager-user.component';
import { ChartModule } from 'angular-highcharts';
import { ClusterManager, AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { RequestAssetDialogComponent } from './time-entry-user/request-asset-dialog/request-asset-dialog.component';
import { AuthGuard } from 'src/app/login/auth.guard';

export const routes: Routes = [
{ path: '', redirectTo: 'time-entry-user', pathMatch: 'full' },
{ path: 'time-entry-user', component: TimeEntryUserComponent, data: { breadcrumb: 'Time & Entry User' }, },
{ path: 'project-manager-user', component: ProjectManagerUserComponent, data: { breadcrumb: 'Project Manager User' } },
];

@NgModule({
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    NgxChartsModule,
    PerfectScrollbarModule,
    SharedModule,
    ChartModule,
    AgmCoreModule,AgmJsMarkerClustererModule
  ],
  providers: [
    GoogleMapsAPIWrapper,ClusterManager,InfoWindowManager,MarkerManager
  ],
  declarations: [
    InfoCardsComponent,
    DiskSpaceComponent,
    TodoComponent,
    AnalyticsComponent,
    GoogleMapsComponent,
    GoogleeMapsComponent,
    PieComponent,
    PieeComponent,
    TimeEntryUserComponent,
    ProjectManagerUserComponent,
    RequestAssetDialogComponent
  ],entryComponents:[RequestAssetDialogComponent]
})
export class DashboardModule { }
