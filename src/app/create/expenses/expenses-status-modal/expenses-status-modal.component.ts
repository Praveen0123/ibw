import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-expenses-status-modal',
  templateUrl: './expenses-status-modal.component.html',
  styleUrls: ['./expenses-status-modal.component.scss']
})
export class ExpensesStatusModalComponent implements OnInit {

  constructor(public dialogref:MatDialogRef<ExpensesStatusModalComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogref.close();
  }
  Expenses=[
    {projectNumber:'5-5127',site:'71 Mearns',sow:'Reference Plan',task:'Quote',action:'Ops Internal Task',expenseAmount:65,status:'Approved'},
    {projectNumber:'5-5127',site:'20 Mearns',sow:'Topographic',task:'Field',action:'Site measurements',expenseAmount:75,status:'Approved'},
    {projectNumber:'8-5125',site:'60 Mearns',sow:'SRPR',task:'Quote',action:'CAD Drafting',expenseAmount:55,status:'Pending'},
    {projectNumber:'8-5125',site:'85 Mearns',sow:'SRPR',task:'Field',action:'Site measurements',expenseAmount:80,status:'Declined'}
  ]
}
