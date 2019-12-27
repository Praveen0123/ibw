import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { VarianceComponent } from './variance/variance.component';
import { BudgetingComponent } from './budgeting/budgeting.component';

const routes: Routes = [
  { path: '', redirectTo: 'variance', pathMatch: 'full' },
  { path: 'variance', component: VarianceComponent, loadChildren: './variance/variance.module#VarianceModule', data: { breadcrumb: 'Productivity' } },
  { path: 'budgeting', component: BudgetingComponent, data: { breadcrumb: 'Productivity' } },
   
]
@NgModule({
  declarations: [VarianceComponent,BudgetingComponent],
  imports: [
    CommonModule,SharedModule, RouterModule.forChild(routes),
  ],
  entryComponents:[]
})
export class ProductivityModule { }
