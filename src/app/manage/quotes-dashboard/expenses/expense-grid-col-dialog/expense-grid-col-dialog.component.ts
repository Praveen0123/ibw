import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-expense-grid-col-dialog',
  templateUrl: './expense-grid-col-dialog.component.html',
  styleUrls: ['./expense-grid-col-dialog.component.scss']
})
export class ExpensesGridColDialogComponent implements OnInit {
  gridColumnsArray: string[];

  constructor(public dialogRef: MatDialogRef<ExpensesGridColDialogComponent>) { }


  close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.gridColumnsArray = ['Claimed By', 'Job Title','Expense Subject','Expense Code','Expense Type', 'Expense Amount',
    'Expense Date','Claimed Date','Action', 'Task','SOW', 'Status','Manage']
  }



}
