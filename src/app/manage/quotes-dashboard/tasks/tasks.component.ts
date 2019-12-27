import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

export interface tasks{
  estimate:number;
  planHours:number;
  actions:number;
  taskName:string;
  status:boolean;
  siteName:string;
}
const quotetask: tasks[]=[
  {estimate:800,planHours:16,actions:2,taskName:'Quote',status:true,siteName:'71 Mearns Ct 20'},
  {estimate:1000,planHours:20,actions:1,taskName:'Research',siteName:'71 Mearns Ct 20', status:false},
  {estimate:600,planHours:12,actions:3,taskName:'Field',siteName:'20 Mearns Ct', status:true},
  {estimate:1200,planHours:24,actions:4,taskName:'Calculations',siteName:'20 Mearns Ct', status:true},
  {estimate:1000,planHours:20,actions:3,taskName:'Drafting',siteName:'20 Mearns Ct', status:true},
  {estimate:600,planHours:12,actions:4,taskName:'QC',siteName:'20 Mearns Ct', status:true},
  {estimate:600,planHours:12,actions:2,taskName:'Management',siteName:'20 Mearns Ct', status:true},
  {estimate:800,planHours:16,actions:4,taskName:'Admin',siteName:'20 Mearns Ct', status:true},
];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  
  constructor() { }
  @ViewChild('addSowModal') addSowModal: ModalDirective;
  TasksData =quotetask;



  showChildModal(): void {
    this.addSowModal.show();
  }
 
  hideChildModal(): void {
    this.addSowModal.hide();
  }

  ngOnInit() {
  }
}
