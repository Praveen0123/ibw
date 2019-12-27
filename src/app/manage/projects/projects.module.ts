import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsLayoutComponent } from './projects-layout/projects-layout.component';
import { ProjectsKanbanViewComponent } from './projects-kanban-view/projects-kanban-view.component';
import { ReviewGridColDialogComponent } from './review/review-grid-col-dialog/review-grid-col-dialog.component';
import { TextEditorDialogComponent } from './review/text-editor-dialog/text-editor-dialog.component';
import { ProjectgridviewComponent } from './projectgridview/projectgridview.component';
import { ProjectMapsComponent } from './project-maps/project-maps.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { NgxEditorModule } from 'ngx-editor';
import { KanbanLayoutComponent } from './kanban-layout/kanban-layout.component';
import { SowKanbanViewComponent } from './SOW-kanban-view/sow-kanban-view.component';
import { TasksKanbanViewComponent } from './tasks-kanban-view/tasks-kanban-view.component';
import { SitesKanbanViewComponent } from './sites-kanban-view/sites-kanban-view.component';
import { DragDropModule } from 'primeng/primeng';
import { ProjectGridColDialogComponent } from './projectgridview/review-grid-col-dialog/review-grid-col-dialog.component';

export const routes: Routes=[
  { path: '', component: ProjectsLayoutComponent, data: { breadcrumb: 'Projects' } , children:[

    {path: '', redirectTo: 'grid-view', pathMatch: 'full'},
  { path: 'grid-view/:id', component:ProjectgridviewComponent , data: { breadcrumb: 'Grid' } },
  { path: 'grid-view', component:ProjectgridviewComponent , data: { breadcrumb: 'Grid' } },
  //{ path: 'review', component:ReviewTimeComponent , data: { breadcrumb: 'Review' } },
  { path: 'map-view', component:ProjectMapsComponent , data: { breadcrumb: 'Map View' } },
 
   {path: 'kanban-view', component:KanbanLayoutComponent , data: { breadcrumb: 'Projects' }, children:[
    {path: '', redirectTo: 'project', pathMatch: 'full'},
    { path: 'project', component: ProjectsKanbanViewComponent, data: { breadcrumb: 'Projects' }},
    { path: 'site', component: SitesKanbanViewComponent, data: { breadcrumb: 'Projects' }},
    { path: 'sow', component: SowKanbanViewComponent, data: { breadcrumb: "Projects" }},
    { path: 'task', component: TasksKanbanViewComponent, data: { breadcrumb: 'Projects' }},

  ]},
  ]},
  // {path:'review',component:ReviewComponent,data:{breadcrumb:'Projects Review'}},

  // { path: 'timeline', component: TimelinenewComponent, data: { breadcrumb: 'Project Dashboard' } },
 
]


@NgModule({
  declarations: [ProjectsLayoutComponent, ProjectsKanbanViewComponent,
     TextEditorDialogComponent,
    ProjectgridviewComponent, ProjectMapsComponent, KanbanLayoutComponent,
    SitesKanbanViewComponent, SowKanbanViewComponent, TasksKanbanViewComponent,
    ProjectGridColDialogComponent
  ],
  imports: [
    CommonModule,NgxEditorModule,
    AgmCoreModule,
    RouterModule.forChild(routes),
    DragDropModule,
    SharedModule
  ],
  providers:[],
  entryComponents:[ProjectGridColDialogComponent, TextEditorDialogComponent]
})
export class ProjectsModule { }
