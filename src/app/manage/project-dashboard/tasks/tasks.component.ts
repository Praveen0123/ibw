import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {


  @ViewChild('addSowModal') addSowModal: ModalDirective;
  taskInfo: boolean = false;
  sowInfo : any = false;
  sowName: any;
  taskName: any;
  noData: any;
  noTaskData: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  BudgetData =[
    {site:'71 Mearns Ct',sow:'SRPR',task:'Quote',   action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Research',action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Field',   action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Calculations',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Drafting',    action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'QC',          action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Management',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Admin',     action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Quote',     action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Research',    action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Field',       action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Calculations',action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Drafting',   action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'QC',         action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Management', action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Admin',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'SRPR',task:'Quote',   action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'SRPR',task:'Research',action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'City Homes',sow:'SRPR',task:'Field',   action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'City Homes',sow:'SRPR',task:'Calculations',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'SRPR',task:'Drafting',    action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'City Homes',sow:'SRPR',task:'QC',          action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'City Homes',sow:'SRPR',task:'Management',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'SRPR',task:'Admin',     action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Quote',     action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Research',    action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Field',       action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Calculations',action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Drafting',   action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'QC',         action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Management', action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Admin',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
  
  ]

  newBudgetData =[
    {tasks:8, actualHours:"100", planHours:"110" , budget:"7200", sow:'SRPR', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {tasks:8, actualHours:"125", planHours:"115" , budget:"7600", sow:'Reference Plan', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {tasks:8, actualHours:"105", planHours:"102" , budget:"7100", sow:'Topographic', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {tasks:9, actualHours:"110", planHours:"105" , budget:"7120", sow:'SRPR', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {tasks:10, actualHours:"130",planHours:"120" , budget:"7560", sow:'Reference Plan', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {tasks:8, actualHours:"120", planHours:"111" , budget:"7420", sow:'SRPR', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {tasks:9, actualHours:"128", planHours:"125" , budget:"7200", sow:'Reference Plan', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {tasks:9, actualHours:"120", planHours:"118" , budget:"7800", sow:'Topographic', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800}
  ]

  taskData=[
    {actions:"0", action:'Ops Internal Task',planHour:4,budgetHour:"12", actualHours:"15", jobCode:'LPC 1',rPh:65,estimate:180,status:true, taskName:'Quote'},
    {actions:"5", action:'Site measurements',planHour:2,budgetHour:"14", actualHours:"11", jobCode:'CPC 2',rPh:65,estimate:180,status:true, taskName:'Research'},
    {actions:"2", action:'Surveyor search',planHour:4,budgetHour:"13", actualHours:"11", jobCode:'OLS',rPh:65,estimate:180,status:true, taskName:'Field'},
    {actions:"3", action:'CAD Drafting',planHour:5,budgetHour:"13", actualHours:"11", jobCode:'LPC 2',rPh:65,estimate:180,status:true, taskName:'Drafting'},
    {actions:"4", action:'Site measurements',planHour:2,budgetHour:"12", actualHours:"10", jobCode:'OLS',rPh:65,estimate:180,status:true, taskName:'QC'},
    {actions:"2", action:'CAD Drafting',planHour:2,budgetHour:"11", actualHours:"13", jobCode:'LPC 4',rPh:65,estimate:180,status:true, taskName:'Management'},
    {actions:"0", action:'Surveyor search',planHour:3,budgetHour:"15", actualHours:"17", jobCode:'OLS',rPh:65,estimate:180,status:true, taskName:'Admin'},
  ]
@ViewChild('addTaskModal') addTaskModal: ModalDirective;
@ViewChild('addActionModal') addActionModal: ModalDirective;


  showAddTaskModal(): void {
    this.addTaskModal.show();
  }
 
  hideAddTaskModal(): void {
    this.addTaskModal.hide();
  }


  showAddActionModal(): void {
    this.addActionModal.show();
  }
 
  hideAddActionModal(): void {
    this.addActionModal.hide();
  }
 
  getTaskData(sowName){
  console.log('dddd')
  this.sowInfo = false;
  this.noData = true;
  this.noTaskData = false;
  this.taskInfo =false;
  setTimeout(() => {
    this.sowName = sowName;
    this.sowInfo = true;
  }, 100);

  }

  getAcTaskData(taskName){
    console.log('dddd')
    this.taskInfo = false;
    this.noTaskData = true;
    setTimeout(() => {
      this.taskName = taskName;
      this.taskInfo = true;
    }, 100);
  
  }
  JobCodes=["LPC1","LPC2","LPC3","EPC1","EPC2","EPC3","CPC1","CPC2","CPC3","OLS","EA","PA"]
  onTabClose(e) {
    console.log('closed')
    this.sowInfo = false;
    this.noData = false;
    this.taskInfo =false;
}

}


