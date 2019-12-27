import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  Selectedtab = 1;
  isInvoices: boolean = true;
  constructor() { }
  isUnbilled: boolean = false;
  isBilled: boolean = false;
  InvoiceType: any = 'new';



  ngOnInit() {
  }
  @ViewChild('addSowModal') addSowModal: ModalDirective;
  @ViewChild('assignEstimateModal') assignEstimateModal: ModalDirective;
  isNew: boolean = true;


  fnInvoiceType(value) {
    if (value == 'new') {
      this.isNew = true;
    }
    else {
      this.isNew = false;
    }
  }
  InvocesData2=[
    {invoiceNumber:"10001", invoiceName:"Port Area-Part1",site:"71 Mearns",sow:"Reference Plan",invoiceTotal: 12000,expenseTotal:2000,hoursTotal:6000 },
    {invoiceNumber:"10002", invoiceName:"Port Area-Part2",site:"20 Mearns",sow:"Reference Topographic",invoiceTotal: 15000,expenseTotal:3500,hoursTotal:8000 },
    {invoiceNumber:"10003", invoiceName:"Port Area-Part3",site:"60 Mearns",sow:"Reference SRPR",invoiceTotal: 20000,expenseTotal:4000,hoursTotal:10000 },
    {invoiceNumber:"10004", invoiceName:"Port Area-Part4",site:"55 Mearns",sow:"Reference Topographic",invoiceTotal: 22000,expenseTotal:5000,hoursTotal:21000 },
  ]

  fnUnbilled() {
    this.isUnbilled = true;
    this.isBilled = false;
    this.isInvoices = false;
  }

  fnInvoices() {
    this.isUnbilled = false;
    this.isBilled = false;
    this.isInvoices = true;
  }

  fnBilled() {
    this.isUnbilled = false;
    this.isBilled = true;
    this.isInvoices = false;
  }


  showEstimateModal() {
    this.assignEstimateModal.show();
  }

  hideEstimateModal() {
    this.assignEstimateModal.hide();
  }

  showChildModal(): void {
    this.addSowModal.show();
  }

  hideChildModal(): void {
    this.addSowModal.hide();
  }


  InvocesData = [
    { approvedBy: "Dwayne", itemType: "Expense", claimedBy: 'Arthur Cooper', amount: 10, claimedDate: '2019-06-25', approvedDate: '2019-06-29', description: 'CAD Drafting', task: 'Drafting', sow: 'Reference Plan', site: '71 Mearns / 249' },
    { approvedBy: "Roy", itemType: "Hours", claimedBy: 'Dan Gildon', amount: 200, claimedDate: '2019-06-28', approvedDate: '2019-06-29', description: 'Field Work', task: 'Field', sow: 'Topographic', site: '71 Mearns Ct 20' },
    { approvedBy: "Rebecca", itemType: "Expense", claimedBy: 'Andy Jones', amount: 25, claimedDate: '2019-06-15', approvedDate: '2019-06-20', description: 'To find legal boundaries', task: 'Field', sow: 'SRPR', site: '20 Mearns Ct' },
  ]
}
