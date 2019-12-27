import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddExpenseCodeDialogComponent } from './add-expense-code-dialog/add-expense-code-dialog.component';
import { AdminService } from '../admin.service';
import { DeleteConfirmDailogComponent } from '../../shared/delete-confirm-dailog/delete-confirm-dailog.component';

@Component({
    selector: 'app-expense-codes',
    templateUrl: './expense-codes.component.html',
    styleUrls: ['./expense-codes.component.scss']
})
export class ExpenseCodesComponent implements OnInit {

    constructor(public dialog: MatDialog, private _adminService: AdminService) { }
    expenseCodesData = [];

    expenseUnits = [];
    expenseLimitTypes = [];


    ngOnInit() {
        this.getExpenseCodes()

        console.log(this.expenseCodesData, 'expenseCodesData')
    }


    Expensecodes = [
        { unit: '$ / km', limitAmount: '-', expenseCode: "Milage", type: 'None', rate: "$0.25", status: true },
        { unit: '$ / day', limitAmount: '$14.00', expenseCode: "Breakfast", type: 'Daily', rate: "-", status: true },
        { unit: '$ / day', limitAmount: '$14.90', expenseCode: "Lunch", type: 'Daily', rate: "-", status: true },
        { unit: 'Open', limitAmount: '-', expenseCode: "Sundry Expenses", type: 'None', rate: "-", status: true },
        { unit: '$ / year', limitAmount: '$100.00', expenseCode: "Safety Shoes", type: 'Yearly', rate: "-", status: true },
    ];


    //Function to change specific expense code status
    changeStatus(expenseCodeId) {
        let status = this.expenseCodesData.filter(x => x.ExpenseCodeId == expenseCodeId)[0]["IsActive"];
        console.log(status, 'staus value')
        status = !status
        this._adminService.updateExpenseCodeStatus(expenseCodeId, status).subscribe(
            data => {
                this.getExpenseCodes();
            }
        )

    }

    //Function to delete specific expense code
    deleteExpenseCode(ExpenseCodeId) {

        let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
            data: ExpenseCodeId,
            height: 'auto',
            width: '600px',
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(id => {
            if (id != null) {
                this._adminService.deleteExpenseCode(ExpenseCodeId).subscribe(
                    data => {
                        this.getExpenseCodes();
                    }
                )
            }
        });
    }

    //Function to get all the expense codes
    public getExpenseCodes() {
        this._adminService.getExpenseCodes().subscribe(data => {
            this.expenseCodesData = [];
            if (data['Data'] != undefined || data['Data'].length > 0) {
                this.expenseCodesData = data['Data'];
            }
            else {
                this.expenseCodesData = [];
            }

            console.log(data['Data'], 'Data')
        });
    }

    //Function to add or update expense code
    public addJobCode(expenseCode: expenseCodeDataType) {
        this._adminService.addExpenseCode(expenseCode).subscribe(data => {
            this.getExpenseCodes();
            console.log(data, "expensecodes data");
        },
            error => {
                console.log(error);
            }
        );

    }

    //Function to open expense modal in add and update modes
    public OpenAddExpenseCodeDialog(expenseCode) {

        this._adminService.getLookupOptions().subscribe(data => {
            console.log(data, 'lookups')
            if (data['Data'].length != undefined && data['Data'].length > 0) {
                this.expenseUnits = data['Data'].filter(x => x.CodeMasterName == 'Expense Units')
                this.expenseLimitTypes = data['Data'].filter(x => x.CodeMasterName == 'Expense Limit Types')
            }


            let dialogRef = this.dialog.open(AddExpenseCodeDialogComponent, {
                data: { expenseCode: expenseCode, expenseUnits: this.expenseUnits, expenseLimitTypes: this.expenseLimitTypes },
                height: 'auto',
                width: '600px',
            });
            dialogRef.afterClosed().subscribe(expenseCode => {
                if (expenseCode) {
                    this.addJobCode(expenseCode);
                    console.log(expenseCode, 'Add expenseCode data')
                }
            });
        })
    }

    //Function to filter data
    StatusFilter(value) {

        //here values are static 
        //0 for all
        //1 for Active
        //2 for Inactive

        if (value == 1) {
            this._adminService.getJobCodes().subscribe(data => {
                if (data['Data'].length > 0) {
                    this.expenseCodesData = data['Data'];
                    this.expenseCodesData = this.expenseCodesData.filter(x => x.IsActive == true)
                    console.log(this.expenseCodesData, 'true')
                }
                else {
                    this.expenseCodesData = [];
                }

            });
        }
        else if (value == 2) {
            this._adminService.getJobCodes().subscribe(data => {
                if (data['Data'].length > 0) {
                    this.expenseCodesData = data['Data'];
                    this.expenseCodesData = this.expenseCodesData.filter(x => x.IsActive == false)
                    console.log(this.expenseCodesData, 'false')
                }
                else {
                    this.expenseCodesData = [];
                }
            })
        }
        else {
            this.getExpenseCodes()
        }
    }




}


export class expenseCodeDataType {
    ExpenseCodeId: number;
    ExpenseCode: string;
    ExpenseLimitType: string;
    ExpenseUnit: string;
    ExpenseUnitId: number;
    ExpenseLimitTypeId: number;
    ExpenseLimitAmount: number;
    Rate: number;
    IsActive: boolean;
    IsDelete: boolean;
    UserId: number;
}
