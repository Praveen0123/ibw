import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuotesKanbanComponent } from './quotes-kanban/quotes-kanban.component';
import { ProjectsKanbanComponent } from './projects-kanban/projects-kanban.component';
import { SharedModule } from '../../shared/shared.module';
import { PrimeDragulaDirective } from './prime-dragula.directive';
import {DragulaModule} from "ng2-dragula";
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SitesKanbanComponent } from './sites-kanban/sites-kanban.component';
import { SowKanbanComponent } from './sow-kanban/sow-kanban.component';
import { TasksKanbanComponent } from './tasks-kanban/tasks-kanban.component';


const routes = [
  {path: '', redirectTo: 'quotes-kanban', pathMatch: 'full' },
  {path:'quotes-kanban',component:QuotesKanbanComponent, data: { breadcrumb: 'Configure Kanban' }},
  {path:'projects-kanban',component:ProjectsKanbanComponent, data: { breadcrumb: 'Configure Kanban' }},
  {path:'sites-kanban',component:SitesKanbanComponent, data: { breadcrumb: 'Configure Kanban' }},
  {path:'sow-kanban',component:SowKanbanComponent, data: { breadcrumb: 'Configure Kanban' }},
  {path:'tasks-kanban',component:TasksKanbanComponent, data: { breadcrumb: 'Configure Kanban' }},
];

@NgModule({
  declarations: [QuotesKanbanComponent,PrimeDragulaDirective,ProjectsKanbanComponent, SitesKanbanComponent, SowKanbanComponent, TasksKanbanComponent],
  imports: [
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    CommonModule,DragulaModule, RouterModule.forChild(routes),SharedModule,
  ],
  entryComponents:[]
})
 


export class ConfigureKanbanModule { }
