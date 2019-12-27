import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billed-unbilled-expenses',
  templateUrl: './billed-unbilled-expenses.component.html',
  styleUrls: ['./billed-unbilled-expenses.component.scss']
})
export class BilledUnbilledExpensesComponent implements OnInit {
  filterToggle:boolean = false;
  constructor() { }
  actionscompleted=[
    {project:"5-12564",billed:"3000",unbilled:"200",percent:"95"},
    {project:"4-24642",billed:"3200",unbilled:"500",percent:"100"},
    {project:"6-10235",billed:"2800",unbilled:"1000",percent:"80"},
    {project:"2-51152",billed:"3000",unbilled:"200",percent:"95"},
    {project:"7-14164",billed:"3500",unbilled:"400",percent:"70"},
    {project:"2-25986",billed:"3400",unbilled:"500",percent:"100"},
    {project:"4-82324",billed:"2900",unbilled:"1000",percent:"95"},
  
  ];
  ngOnInit() {
  }

}
