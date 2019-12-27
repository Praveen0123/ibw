import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './theme/pipes/pipes.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppSettings } from './app.settings';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { MessagesComponent } from './theme/components/messages/messages.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { ModalModule } from 'ngx-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PasswordDialogComponent } from './theme/components/user-menu/password-dialog/password-dialog.component';
import { ProfileDialogComponent } from './theme/components/user-menu/profile-dialog/profile-dialog.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component'
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ToasterModule } from 'angular2-toaster';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { AddNoteDialogComponent } from './shared/add-note-dialog/add-note-dialog.component';
import { DataTableModule } from 'angular2-datatable';
import { HelpVideoDialogComponent } from './shared/help-video-dialog/help-video-dialog.component';
import { ScheduledialogueComponent } from './scheduling/action-calendar/scheduledialogue/scheduledialogue.component';
import { ChartModule } from 'angular-highcharts';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmJsMarkerClustererModule, ClusterManager } from '@agm/js-marker-clusterer'
import { ReviewComponent } from './theme/components/review/review.component';
import { CreateComponent } from './create/create.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpInterceptorJWTService } from './services/http-interceptor-jwt.service';
import { HttpInterceptorLoaderService } from './services/http-interceptor-loader.service';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { EmailLinkExpiryComponent } from './login/email-link-expiry/email-link-expiry.component';
import { CookieService } from 'ngx-cookie-service';
import { TextMaskModule } from 'angular2-text-mask';
import { NopermissionComponent } from './shared/nopermission/nopermission.component';
import { GlobalMethods } from './shared/GlobalMethods';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule, 
    TextMaskModule,
    ReactiveFormsModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQDn2o5lkzBI4Sc09UUNiHPtNqlxQTYeA'
    }),
    PerfectScrollbarModule,
    ToasterModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule,
    PipesModule,
    ChartModule,
    TabViewModule,
    routing,
    ModalModule.forRoot(),
    HttpClientModule,
    MglTimelineModule,
    DragDropModule,
    HttpClientJsonpModule,
    TableModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    DataTableModule,
    AgmJsMarkerClustererModule,
    LayoutModule
    
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    ReviewComponent,
    UserMenuComponent,
    LoginComponent,ChangePasswordComponent,EmailLinkExpiryComponent,ForgotPasswordComponent,
    PasswordDialogComponent,
    ConfirmDialogComponent,
    ProfileDialogComponent,
    AddNoteDialogComponent, HelpVideoDialogComponent, ScheduledialogueComponent, CreateComponent,
    NopermissionComponent
    
  ],
  entryComponents: [
    VerticalMenuComponent,
    PasswordDialogComponent,
    ConfirmDialogComponent,
    ProfileDialogComponent,
    AddNoteDialogComponent,
    HelpVideoDialogComponent,
    ScheduledialogueComponent,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy},
    AppSettings,
    GoogleMapsAPIWrapper, ClusterManager, GlobalMethods,
  { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
  { provide: OverlayContainer, useClass: CustomOverlayContainer },
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorJWTService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorLoaderService, multi: true },
  
  { provide: MatDialogRef, useValue: {} },
  { provide: MAT_DIALOG_DATA, useValue: [] },
  CookieService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//ng module InMemoryWebApiModule.forFeature(Data, { delay: 500 })