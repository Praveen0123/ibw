import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense-dailog',
  templateUrl: './add-expense-dailog.component.html',
  styleUrls: ['./add-expense-dailog.component.scss']
})
export class AddExpenseDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddExpenseDailogComponent>, public router : Router) { }
  projects = ["5-12564", "4-24642", "4-82324", "6-10235" ]
  JobCodes=["LPC1","LPC2","LPC3","EPC1","EPC2","EPC3","CPC1","CPC2","CPC3","OLS","EA","PA"]
  ExpenseTypes = ["Reimbursable","Non-reimbursable"]
  Sites=["71 Mearns / 249","71 Mearns Ct 20","20 Mearns Ct","Site 4"]
  SOWs =["Reference Plan","Topographic","SRPR"]
  Tasks=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]
  Actions=["Take Measurements","CAD Drafting","Initial Survey","Site Audit","Field Management"]
  ExpenseCodes=["Fuel Charges","Breakfast","Lunch","Sundry Expenses"]

  ngOnInit() {
  }


  
  close(): void {
    this.dialogRef.close();
  }

  saveInfo() {
    this.dialogRef.close();
    this.router.navigate(['/IBW/manage/project-dashboard/expenses'])
  }

}
