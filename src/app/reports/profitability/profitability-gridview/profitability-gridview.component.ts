import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profitability-gridview',
  templateUrl: './profitability-gridview.component.html',
  styleUrls: ['./profitability-gridview.component.scss']
})
export class ProfitabilityGridviewComponent implements OnInit {
  filterToggle:boolean = false;
  constructor() { }
  profitability=[
    {project:"4-24642",type:"Legal",projectmanager:"Dave",accountsmanager:"Dwayne",invoiced:5000,effort :2500,expenses:1000},
    {project:"4-82324",type:"Engineering",projectmanager:"Dwayne",accountsmanager:"Dave",invoiced:5800,effort:3200,expenses:800},
    {project:"2-25986",type:"Construction",projectmanager:"Dave",accountsmanager:"Dave",invoiced:6000,effort:3800,expenses:1200},
    {project:"7-14164",type:"Planning",projectmanager:"Dwayne",accountsmanager:"Dwayne",invoiced:6500,effort:3000,expenses:1500},
    {project:"5-12564",type:"Surveyor",projectmanager:"Dave",accountsmanager:"Dave",invoiced:5500,effort:3500,expenses:800},
    {project:"2-51152",type:"Legal",projectmanager:"Dwayne",accountsmanager:"Dwayne",invoiced:4800,effort:2800,expenses:900},
    {project:"3-68592",type:"Construction",projectmanager:"Dave",accountsmanager:"Dave",invoiced:6000,effort:3900,expenses:1300},
   
   
  ];
  ngOnInit() {
  }

}
