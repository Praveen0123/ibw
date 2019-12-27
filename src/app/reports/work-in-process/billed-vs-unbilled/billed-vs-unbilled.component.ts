import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billed-vs-unbilled',
  templateUrl: './billed-vs-unbilled.component.html',
  styleUrls: ['./billed-vs-unbilled.component.scss']
})
export class BilledVsUnbilledComponent implements OnInit {
  filterToggle:boolean = false;
  constructor() { }
  actionscompleted=[
    {project:"5-12564",billed:"20",unbilled:"8",percent:"100"},
    {project:"4-24642",billed:"30",unbilled:"10",percent:"90"},
    {project:"6-10235",billed:"40",unbilled:"10",percent:"80"},
    {project:"2-51152",billed:"40",unbilled:"20",percent:"80"},
    {project:"7-14164",billed:"50",unbilled:"10",percent:"70"},
    {project:"2-25986",billed:"45",unbilled:"5",percent:"85"},
    {project:"4-82324",billed:"40",unbilled:"15",percent:"95"},
  
  ];
  ngOnInit() {
  }

}
