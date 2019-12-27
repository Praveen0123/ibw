import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budgeting',
  templateUrl: './budgeting.component.html',
  styleUrls: ['./budgeting.component.scss']
})
export class BudgetingComponent implements OnInit {
  selected = 4;
  filterToggle:boolean=false;
  constructor() { }
  budgeting=[
    {action:"Operations Assist",project:"4-24642",site:"20 Mearns Ct",sow:"SoW-2",task:"Administration",percent:"70",budget:"$100.00",actualdate:"$150.00",expecteddate:"$50.00"},
    {action:"Initial Survey",project:"4-82324",site:"71 Mearns Ct 20",sow:"SoW-7",task:"Fieldwork",percent:"88",budget:"$200.00",actualdate:"$180.00",expecteddate:"$20.00"},
    {action:"CAD Corrections",project:"2-25986",site:"85 Mearns Ct",sow:"SoW-6",task:"Calcs & CAD",percent:"75",budget:"$180.00",actualdate:"$150.00",expecteddate:"$30.00"},
    {action:"Surveyor Search",project:"7-14164",site:"55 Mearns Ct",sow:"SoW-5",task:"Disbursments",percent:"92",budget:"$150.00",actualdate:"$210.00",expecteddate:"$60.00"},
    {action:"CAD Drafting",project:"5-12564",site:"71 Mearns",sow:"SoW-1",task:"Calcs & CAD",percent:"90",budget:"$300.00",actualdate:"$280.00",expecteddate:"$20.00"},
    {action:"Field Management",project:"2-51152",site:"71 Mearns 249",sow:"SoW-4",task:"Management",percent:"100",budget:"$200.00",actualdate:"$130.00",expecteddate:"$70.00"},
   
  ];
  ngOnInit() {
  }

}
