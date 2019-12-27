import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule ,Routes} from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { KanbanComponent } from './kanban/kanban.component';
import { QuotesDialogComponent } from './quotes-dialog/quotes-dialog.component';
import { DragDropModule } from 'primeng/dragdrop';
import { QuotesComponent } from './quotes.component';
import { ClientsDialogComponent } from '../clients/clients-dialog/clients-dialog.component';

export const routes = [
    { path: '', redirectTo: 'gridview', pathMatch: 'full' },
    { path: 'gridview/:quoteId', component: GridViewComponent, data: { breadcrumb: 'Grid View' } },
    { path: 'gridview', component: GridViewComponent, data: { breadcrumb: 'Grid View' } },
    { path: 'mapview', component: MapViewComponent,data: { breadcrumb: 'Map View' } },
    {path:'kanabanview', component:KanbanComponent,data:{breadcrumb:'Grid View'}},
  ];


@NgModule({
    declarations: [GridViewComponent,
      MapViewComponent,GoogleMapsComponent,  KanbanComponent  //QuotesDialogComponent
    ],
    imports: [
      FormsModule,
      DragDropModule,
      CommonModule,
      AgmCoreModule,
      RouterModule.forChild(routes), ModalModule, SharedModule, HttpClientModule, ConfirmationPopoverModule,
    ],
    providers: [],
    exports: [RouterModule],
    entryComponents: []
  })
  export class QuotesModule { }
  