import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ontime',
  templateUrl: './ontime.component.html',
  styleUrls: ['./ontime.component.scss']
})
export class OntimeComponent implements OnInit {
  selected = 4;
  constructor() { }
  onTime = [
    {action:"CAD Drafting",project:"5-12564",site:"71 Mearns",sow:"SoW-1",task:"Calcs & CAD",duedate:"2019-06-16",expecteddate:"2019-06-16"},
    {action:"Operations Assist",project:"4-24642",site:"20 Mearns Ct",sow:"SoW-2",task:"Administration",duedate:"2019-06-20",expecteddate:"2019-06-20"},
    {action:"Site Audit",project:"6-10235",site:"60 Mearns",sow:"SoW-3",task:"Fieldwork",duedate:"2019-06-22",expecteddate:"2019-06-22"},
    {action:"Field Management",project:"2-51152",site:"71 Mearns 249",sow:"SoW-4",task:"Management",duedate:"2019-06-30",expecteddate:"2019-06-30"},
    {action:"Surveyor Search",project:"7-14164",site:"55 Mearns Ct",sow:"SoW-5",task:"Disbursments",duedate:"2019-07-05",expecteddate:"2019-07-05"},
    {action:"CAD Corrections",project:"2-25986",site:"85 Mearns Ct",sow:"SoW-6",task:"Calcs & CAD",duedate:"2019-07-11",expecteddate:"2019-07-11"},
    {action:"Initial Survey",project:"4-82324",site:"71 Mearns Ct 20",sow:"SoW-7",task:"Fieldwork",duedate:"2019-07-18",expecteddate:"2019-07-18"},

  ];
  ngOnInit() {
  }

}
