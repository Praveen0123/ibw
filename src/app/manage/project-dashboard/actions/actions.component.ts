import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  userType: string = "";
  htmlContent:any;
  constructor() { }
  filterToggle:boolean=false;
  ngOnInit() {
    var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
    if(sessionDetails.userType == 'user'){
      this.userType = 'user';
    }
    if(sessionDetails.userType == 'admin'){
      this.userType = 'admin';
    }
  }

  @ViewChild('addSowModal') addSowModal: ModalDirective;

  showChildModal(): void {
    this.addSowModal.show();
  }
 
  hideChildModal(): void {
    this.addSowModal.hide();
  }

JobCodes=["LPC1","LPC2","LPC3","EPC1","EPC2","EPC3","CPC1","CPC2","CPC3","OLS","EA","PA"]
ActionTypes = ["Quotes","Research","Field","Calcs","Drafting","Quality Control","Management","Admin"]
Sites=["71 Mearns / 249","71 Mearns Ct 20","20 Mearns Ct","Site 4"]
SOWs =["Reference Plan","Topographic","SRPR"]
Tasks=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]

ActionsData=[
    {action:'Progress Report for Field Work',jobCode:'LPC 1',actionType:'Management',siteName:'71 Mearns / 249',sowName:'SRPR',task:'Quote',planHours:16,dueDate:'2019-07-20',actiondetails:"Provided Action Details",status:'Requested'},
    {action:'Ops Internal Task',jobCode:'CPC 2',actionType:'Admin',siteName:'71 Mearns Ct 20',sowName:'Topographic',task:'Research',planHours:12,dueDate:'2019-06-10',actiondetails:"Provided Action Details",status:'Completed'},
    {action:'Site measurements',jobCode:'OLS',actionType:'Field',siteName:'20 Mearns Ct',sowName:'Reference Plan',task:'Field',planHours:18,dueDate:'2019-07-15',actiondetails:"Provided Action Details",status:'Assigned'},
    {action:'Surveyor search',jobCode:'GT 2',actionType:'Field',siteName:'20 Mearns Ct',sowName:'Reference Plan',task:'Field',planHours:16,dueDate:'2019-07-02',actiondetails:"Provided Action Details",status:'Progression'},
  ]



}
