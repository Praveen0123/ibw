import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { LogsComponent } from './logs/logs.component';
import { EventMasterComponent } from './event-master.component';



export const routes:Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventsComponent, data: { breadcrumb: 'Event Master' } },
  { path: 'logs', component: LogsComponent, data: { breadcrumb: 'Event Master' } },
];

@NgModule({
  declarations: [EventsComponent, LogsComponent],
  imports: [
    CommonModule,SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EventMasterModule { }