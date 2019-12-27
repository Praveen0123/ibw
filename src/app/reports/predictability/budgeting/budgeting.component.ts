import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budgeting',
  templateUrl: './budgeting.component.html',
  styleUrls: ['./budgeting.component.scss']
})
export class BudgetingComponent implements OnInit {
  filterToggle:boolean=false;
  constructor() { }
  budgeting=[
    {jobcodes:"Admin Assistant",availability:"80",june:"60",july:"80",aug:"100",sep:"80",oct:"100",nov:"120",dec:"140",jan20:"180",feb20:"160",mar20:"120",apr20:"100",may20:"80",june20:"140",july20:"160"},
    {jobcodes:"CAD Supervisor",availability:"120",june:"140",july:"160",aug:"120",sep:"100",oct:"80",nov:"80",dec:"180",jan20:"180",feb20:"160",mar20:"120",apr20:"100",may20:"80",june20:"140",july20:"160"},
    {jobcodes:"Cals & Cad",availability:"100",june:"100",july:"120",aug:"140",sep:"100",oct:"100",nov:"80",dec:"240",jan20:"180",feb20:"160",mar20:"120",apr20:"100",may20:"80",june20:"140",july20:"160"},
    {jobcodes:"Field Assistant",availability:"150",june:"160",july:"120",aug:"100",sep:"140",oct:"120",nov:"100",dec:"140",jan20:"180",feb20:"160",mar20:"120",apr20:"100",may20:"80",june20:"140",july20:"160"},
    {jobcodes:"GIS Manager",availability:"120",june:"120",july:"100",aug:"120",sep:"80",oct:"80",nov:"80",dec:"180",jan20:"180",feb20:"160",mar20:"120",apr20:"100",may20:"80",june20:"140",july20:"160"},
    {jobcodes:"IT Technician",availability:"160",june:"140",july:"120",aug:"100",sep:"120",oct:"100",nov:"100",dec:"180",jan20:"180",feb20:"160",mar20:"120",apr20:"100",may20:"80",june20:"140",july20:"160"},
  ];
  
  ngOnInit() {
  }
  scrollActions(side) {
    var ele = document.getElementById('budgeting');
    if(side == 'left')
    ele.scrollLeft += 190;
    else
    ele.scrollLeft -= 190;
}
}
