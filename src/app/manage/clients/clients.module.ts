import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ClientsComponent } from './clients.component';
import { ClientsDialogComponent } from './clients-dialog/clients-dialog.component';
import {DataTableModule} from "angular2-datatable";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ClientsGridColDialogComponent } from './clients-grid-col-dialog/clients-grid-col-dialog.component';
import { TextMaskModule } from "angular2-text-mask";
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule, ClusterManager } from "@agm/js-marker-clusterer";

export const routes = [
  { path: '', redirectTo: 'gridview', pathMatch: 'full' },
  { path: 'gridview', component: GridViewComponent, data: { breadcrumb: 'Grid View' } },
  { path: 'mapview', component: MapViewComponent, data: { breadcrumb: 'Map View' } },
];


@NgModule({
  declarations: [GridViewComponent, MapViewComponent, GoogleMapsComponent],
  imports: [
    AgmJsMarkerClustererModule,
    FormsModule,
    DataTableModule,
    CommonModule,
    AgmCoreModule,
    ConfirmationPopoverModule,
    RouterModule.forChild(routes), ModalModule, SharedModule, HttpClientModule, TextMaskModule
  ],
  providers: [ClusterManager],
  exports: [RouterModule,MatCheckboxModule],
  entryComponents: []
})
export class ClientsModule { }
