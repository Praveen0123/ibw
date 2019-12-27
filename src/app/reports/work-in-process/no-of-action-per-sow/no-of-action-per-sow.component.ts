import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-of-action-per-sow',
  templateUrl: './no-of-action-per-sow.component.html',
  styleUrls: ['./no-of-action-per-sow.component.scss']
})
export class NoOfActionPerSowComponent implements OnInit {
  filterToggle:boolean = false;
  selected=1;
  constructor() { }
  profitability=[
    {sow:"Sow-1",action:"CAD Drafting",update:"0"},
    {sow:"Sow-1",action:"Operations Assist",update:"3"},
    {sow:"Sow-2",action:"Site Audit",update:"1"},
    {sow:"Sow-3",action:"Field Management",update:"4"},
    {sow:"Sow-3",action:"CAD Corrections",update:"2"},
    {sow:"Sow-4",action:"Field Management",update:"1"},
    {sow:"Sow-4",action:"Initial Survey",update:"3"},
    {sow:"Sow-4",action:"CAD Drafting",update:"4"},
  ];
  ngOnInit() {
  }


}
