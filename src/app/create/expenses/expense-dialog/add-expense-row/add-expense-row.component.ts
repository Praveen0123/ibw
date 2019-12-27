import { Component, OnInit } from '@angular/core';



export interface myinterface {
  remove(index: number);
}


@Component({
  selector: 'app-add-expense-row',
  templateUrl: './add-expense-row.component.html',
  styleUrls: ['./add-expense-row.component.scss']
})
export class AddExpenseRowComponent implements OnInit {

  public index: number;
  public selfRef: AddExpenseRowComponent;

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
  ExpenseCodes=["Mileage","Breakfast","Lunch","Sundry Expenses"]

  removeMe(index) {
    this.compInteraction.remove(index)
  }

  ExpenseCode_nonMileage: string = "";
  ExpenseCode_Mileage: string = "hide";


  ExpenseCodeChange(code) {
    if (code == "Mileage") {
      this.ExpenseCode_nonMileage = "hide"
      this.ExpenseCode_Mileage = ""
    } else {
      this.ExpenseCode_nonMileage = ""
      this.ExpenseCode_Mileage = "hide"
    }
  }


  ngOnInit() {
  }

}
