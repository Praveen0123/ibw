import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
  PanelModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataListModule,
  SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, ProgressBarModule, ConfirmDialogModule,
  TooltipModule, AutoCompleteModule
} from 'primeng/primeng';
import { ModalModule } from 'ngx-bootstrap';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatBadgeModule,
  MatBottomSheetModule
} from '@angular/material';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuotesDialogComponent } from '../manage/quotes/quotes-dialog/quotes-dialog.component';
import { CalendarModule } from 'primeng/calendar';
import { ClientsDialogComponent } from '../manage/clients/clients-dialog/clients-dialog.component';
import { AddProjectDialogComponent } from '../manage/projects/add-project-dialog/add-project-dialog.component';
import { NewSowDailogComponent } from './new-sow-dailog/new-sow-dailog.component';
import { NewSiteDailogComponent } from './new-site-dailog/new-site-dailog.component';
import { NewActionDailogComponent } from './new-action-dailog/new-action-dailog.component';
import { AddHoursDailogComponent } from './add-hours-dailog/add-hours-dailog.component';
import { AddExpenseDailogComponent } from './add-expense-dailog/add-expense-dailog.component';
import { LeaveRequestDailogComponent } from './leave-request-dailog/leave-request-dailog.component';
import { TimelineDialogComponent } from '../manage/projects/review/timeline-dialog/timeline-dialog.component';
import { AssetsScheduleDialogComponent } from '../scheduling/assets/schedule-assets/assets-schedule-dialog/assets-schedule-dialog.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {TreeModule} from 'primeng/tree';
import {FileUploadModule} from 'primeng/fileupload';
import { TimepickerModule } from 'ngx-bootstrap';
import { MapViewDailogComponent } from './map-view-dailog/map-view-dailog.component';
import { AgmCoreModule } from '@agm/core';
import { NgxEditorModule } from 'ngx-editor';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { ManageSOWGridColDialogComponent } from '../manage/project-dashboard/sow/review-grid-col-dialog/manage-sow-grid-col-dialog.component';
import { NopermissionComponent } from './nopermission/nopermission.component';
import { DeleteConfirmDailogComponent } from './delete-confirm-dailog/delete-confirm-dailog.component';
import {ColorPickerModule} from 'primeng/colorpicker';
@NgModule({
  imports: [
    FormsModule, ModalModule.forRoot(),
    NgxEditorModule ,
    CalendarModule,
    AgmCoreModule,
    CommonModule,
    TreeModule,
    DragDropModule,
    FlexLayoutModule,
    ColorPickerModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    MatBadgeModule,
    MatAutocompleteModule,
    TimepickerModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    FileUploadModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    InputTextModule, GalleriaModule, MenubarModule,
    CheckboxModule, DialogModule, MessagesModule, GrowlModule,
    PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule,
    SelectButtonModule, DataListModule,
    SplitButtonModule, ButtonModule, DropdownModule, AccordionModule,
    ProgressBarModule, ConfirmDialogModule, AutoCompleteModule,
    TooltipModule,
    Ng4GeoautocompleteModule

  ],
  exports: [
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    CalendarModule,
    FlexLayoutModule,
    Ng4GeoautocompleteModule,
    MatAutocompleteModule,
    MatButtonModule,
    DragDropModule,
    TreeModule,
    ColorPickerModule,
    MatButtonToggleModule,
    BsDatepickerModule,
    MatCardModule,
    NgxEditorModule ,
    MatCheckboxModule,
    FileUploadModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatBottomSheetModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatBadgeModule,
    BsDatepickerModule,
    MatTooltipModule,
    MatStepperModule, InputTextModule, GalleriaModule, MenubarModule, AutoCompleteModule,
    CheckboxModule, DialogModule, MessagesModule, GrowlModule,
    PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule,
    SelectButtonModule, DataListModule,
    SplitButtonModule, ButtonModule, DropdownModule, AccordionModule,
    ProgressBarModule, ConfirmDialogModule,
    TooltipModule, jqxKanbanComponent
  ],
  declarations: [jqxKanbanComponent,MapViewDailogComponent, ManageSOWGridColDialogComponent,TimelineDialogComponent, AddProjectDialogComponent, QuotesDialogComponent, ClientsDialogComponent, NewSowDailogComponent, NewSiteDailogComponent, NewActionDailogComponent, AddHoursDailogComponent, AddExpenseDailogComponent, LeaveRequestDailogComponent, AssetsScheduleDialogComponent, DeleteConfirmDailogComponent],
  entryComponents: [TimelineDialogComponent, DeleteConfirmDailogComponent,ManageSOWGridColDialogComponent,MapViewDailogComponent,AddProjectDialogComponent, QuotesDialogComponent, ClientsDialogComponent, NewSiteDailogComponent, NewSowDailogComponent, NewActionDailogComponent, AddHoursDailogComponent, AddExpenseDailogComponent, LeaveRequestDailogComponent, AssetsScheduleDialogComponent]
})
export class SharedModule { }
