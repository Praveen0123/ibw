import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withinbudget',
  templateUrl: './withinbudget.component.html',
  styleUrls: ['./withinbudget.component.scss']
})
export class WithinbudgetComponent implements OnInit {
  selected = 4;
  constructor() { }
  onTime = [
    {action:"CAD Drafting",project:"5-12564",site:"71 Mearns",sow:"SoW-1",task:"Calcs & CAD",planhours:"16",actualhours:"18",expectedhours:"18",percentcomplete:"75"},
    {action:"Operations Assist",project:"4-24642",site:"20 Mearns Ct",sow:"SoW-2",task:"Administration",planhours:"8",actualhours:"10",expectedhours:"10",percentcomplete:"80"},
    {action:"Site Audit",project:"6-10235",site:"60 Mearns",sow:"SoW-3",task:"Fieldwork",planhours:"24",actualhours:"28",expectedhours:"24",percentcomplete:"90"},
    {action:"Field Management",project:"2-51152",site:"71 Mearns 249",sow:"SoW-4",task:"Management",planhours:"16",actualhours:"18",expectedhours:"16",percentcomplete:"100"},
    {action:"Surveyor Search",project:"7-14164",site:"55 Mearns Ct",sow:"SoW-5",task:"Disbursments",planhours:"8",actualhours:"10",expectedhours:"12",percentcomplete:"95"},
    {action:"CAD Corrections",project:"2-25986",site:"85 Mearns Ct",sow:"SoW-6",task:"Calcs & CAD",planhours:"4",actualhours:"8",expectedhours:"10",percentcomplete:"85"},
    {action:"Initial Survey",project:"4-82324",site:"71 Mearns Ct 20",sow:"SoW-7",task:"Fieldwork",planhours:"4",actualhours:"8",expectedhours:"8",percentcomplete:"90"},

  ];
  ngOnInit() {
  }

}
