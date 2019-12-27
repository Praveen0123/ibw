import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../node_modules/ngx-bootstrap';
import { MatDialog } from '@angular/material';
import { ExpensesGridColDialogComponent } from './expense-grid-col-dialog/expense-grid-col-dialog.component';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  filterToggle:boolean = false;
  isSelected: boolean;
  columns: string;
  partyChief: string;
  fieldAssistant: string;
  validatedby: string;
  amount: number;
  isApproved: boolean;
  isDeclined: boolean;
  subject:string;
  role:string;
  tillDateAmount:number;
  isPending:boolean;
  checked: boolean;
  allowAssign: boolean =true;
  InvoiceType : any = 'new';
  isNew: boolean = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  funSelect(value){
    if(this.checked == true){
      console.log('gjgjg')
      this.allowAssign = false;
    }
    else{
      this.allowAssign = true;
    }
  }

  fnInvoiceType(value){
    if(value == 'new'){
      this.isNew = true;      
    }
    else{
      this.isNew = false;
    }
  }

  scrollActions(side) {
    var ele = document.getElementById('expenseTable');
    if(side == 'left')
    ele.scrollLeft += 190;
    else
    ele.scrollLeft -= 190;
  }
  
  @ViewChild('addSowModal') addSowModal: ModalDirective;
  @ViewChild('assignEstimateModal') assignEstimateModal: ModalDirective;

  showChildModal(): void {
    this.addSowModal.show();
  }
 
  hideChildModal(): void {
    this.addSowModal.hide();
  }

  showEstimateModal(){
    this.assignEstimateModal.show();
  }

  hideEstimateModal(){
    this.assignEstimateModal.hide();
  }


  JobCodes=["LPC1","LPC2","LPC3","EPC1","EPC2","EPC3","CPC1","CPC2","CPC3","OLS","EA","PA"]
  ExpenseTypes = ["Reimbursable","Non-reimbursable"]
  Sites=["71 Mearns / 249","71 Mearns Ct 20","20 Mearns Ct","Site 4"]
  SOWs =["Reference Plan","Topographic","SRPR"]
  Tasks=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]
  Actions=["Take Measurements","CAD Drafting","Initial Survey","Site Audit","Field Management"]
  ExpenseCodes=["Fuel Charges","Breakfast","Lunch","Sundry Expenses"]

  ExpensesData=[
    {claimedBy:'Arthur Cooper',jobTitle:'CAD Designer',expSub:'Miscellaneous',expCode:'Miscellaneous',expType:'Non-reimbursable',expAmount:10,expDate:'2019-06-25',claimedDate:'2019-06-29',action:'CAD Drafting',task:'Drafting',sow:'Reference Plan',site:'71 Mearns / 249',status:'Pending'},
    {claimedBy:'Dan Gildon',jobTitle:'Party Chief',expSub:'Registry office fee',expCode:'ROF',expType:'Reimbursable',expAmount:200,expDate:'2019-06-28',claimedDate:'2019-06-29',action:'Field Work',task:'Field',sow:'Topographic',site:'71 Mearns Ct 20',status:'Pending'},
    {claimedBy:'Andy Jones',jobTitle:'Field Assistant',expSub:'Travel Mileage',expCode:'Fuel Charges',expType:'Reimbursable',expAmount:25,expDate:'2019-06-15',claimedDate:'2019-06-20',action:'To find legal boundaries',task:'Field',sow:'SRPR',site:'20 Mearns Ct',status:'Approved'},
  ]

  funSelectAll(e){
    if(e == true){
      this.checked = true;
      this.allowAssign = false;

    }
    else{
      this.checked = false;
      this.allowAssign = true;

    }
  }

  public opengridColDialog(lead) {
    let dialogRef = this.dialog.open(ExpensesGridColDialogComponent, {
        data: lead,
        height: 'auto',
        width: '400px',
    });

    dialogRef.afterClosed().subscribe(lead => {
        if (lead) {
            // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
        }
    });
}

}
