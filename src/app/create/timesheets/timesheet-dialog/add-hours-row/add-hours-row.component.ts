import { Component, OnInit } from '@angular/core';



export interface myinterface {
  remove(index: number);
}

@Component({
  selector: 'app-add-hours-row',
  templateUrl: './add-hours-row.component.html',
  styleUrls: ['./add-hours-row.component.scss']
})
export class AddHoursRowComponent implements OnInit {

 


  public index: number;
  public selfRef: AddHoursRowComponent;

  //interface for Parent-Child interaction
  public compInteraction: myinterface;

  constructor() {
  }
  projects = ["5-12564", "4-24642", "4-82324", "6-10235" ]
  JobCodes=["LPC1","LPC2","LPC3","EPC1","EPC2","EPC3","CPC1","CPC2","CPC3","OLS","EA","PA"]
  ExpenseTypes = ["Reimbursable","Non-reimbursable"]
  Sites=["71 Mearns / 249","71 Mearns Ct 20","20 Mearns Ct","Site 4"]
  SOWs =["Reference Plan","Topographic","SRPR"]
  Tasks=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]
  Actions=["Take Measurements","CAD Drafting","Initial Survey","Site Audit","Field Management"]
  ExpenseCodes=["Fuel Charges","Breakfast","Lunch","Sundry Expenses"]
  
  removeMe(index) {
    this.compInteraction.remove(index)
  }

  ngOnInit() {
  }

}