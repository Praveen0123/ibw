import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-budget-breakup',
  templateUrl: './setup-budget-breakup.component.html',
  styleUrls: ['./setup-budget-breakup.component.scss']
})
export class SetupBudgetBreakupComponent implements OnInit {
  jobCodeValue: number;
  jobCodeValue1: number;
  jobCodeValue2: number;
  quantity: number;
  quantity1: number;
  quantity2: number;

  totals: number = this.quantity * this.jobCodeValue;
  totals1: number = this.quantity1 * this.jobCodeValue1;
  totals2: number = this.quantity2 * this.jobCodeValue2;

  constructor() { }

  ngOnInit() {
    this.changeJobCode(50);
    this.changeJobCode1(55);
    this.changeJobCode2(65);
   
  }

  getValue(value){
    this.totals = value * this.jobCodeValue;
    // this.totals1 = this.quantity1 * this.jobCodeValue1;
    // this.totals2 = this.quantity2 * this.jobCodeValue2;
  }

  jobcode = [
    { jobcode: "LPC1", rate: 55, status: true },
    { jobcode: "LPC2 Keeper", rate: 75, status: true },
    { jobcode: "EPC1", rate: 82, status: true },
    { jobcode: "EPC2", rate: 65, status: true },
    { jobcode: "CPC1", rate: 70, status: true },
    { jobcode: "CPC2", rate: 90, status: false },
    { jobcode: "OLS", rate: 50, status: true }

  ];

  defaultSelected = 50;
  defaultSelected1 = 55;
  defaultSelected2 = 65;

  changeJobCode(value) {
    this.jobCodeValue = value;
  }

  changeJobCode1(value) {
    this.jobCodeValue1 = value;
  }

  changeJobCode2(value) {
    this.jobCodeValue2 = value;
  }


}
