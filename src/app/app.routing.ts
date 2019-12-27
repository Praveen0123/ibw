import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from './login/auth.guard';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { EmailLinkExpiryComponent } from './login/email-link-expiry/email-link-expiry.component';
import { NopermissionComponent } from './shared/nopermission/nopermission.component';

export const routes: Routes = [
    {
        path:'IBW',
        component: LayoutComponent,  children: [
            { path: '', redirectTo: 'analytics', pathMatch: 'full'},
            { path: 'no-permission', component: NopermissionComponent, data: { breadcrumb: 'No permission' },  },
            { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { breadcrumb: 'Analytics' },canActivate:[AuthGuard]},
            { path: 'manage', loadChildren: './manage/manage.module#ManageModule',  data: { breadcrumb: 'Manage' },canActivate:[AuthGuard]},
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' },canActivate:[AuthGuard]},
            { path: 'scheduling', loadChildren: './scheduling/scheduling.module#SchedulingModule', data: { breadcrumb: 'Scheduling' },canActivate:[AuthGuard]},
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule',canActivate:[AuthGuard]},
            { path: 'create', component:CreateComponent, loadChildren:'./create/create.module#CreateModule',data:{breadcrumb:'Expenses & Timesheets'},canActivate:[AuthGuard]}
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
    { path: 'reset-password/:id', component: ChangePasswordComponent, data: { breadcrumb: 'Not found' },  },
    { path: 'set-password/:id', component: ChangePasswordComponent, data: { breadcrumb: 'Not found' },  },
    { path: 'emaillinkexpirycheck/:id', component: EmailLinkExpiryComponent, data: { breadcrumb: 'Not found' },  },
    { path: 'forgotpassword', component: ForgotPasswordComponent, data: { breadcrumb: 'Not found' },  },
   

    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' },  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
 preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
}); 