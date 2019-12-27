import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-completed-per-project',
  templateUrl: './actions-completed-per-project.component.html',
  styleUrls: ['./actions-completed-per-project.component.scss']
})
export class ActionsCompletedPerProjectComponent implements OnInit {
  filterToggle:boolean = false;
  constructor() { }
  actionscompleted=[
    {project:"4-24642",action:"CAD Drafting",status:"Completed"},
    {project:"4-24642",action:"Field Management",status:"Completed"},
    {project:"4-24642",action:"CAD Corrections",status:"Completed"},
    {project:"5-12564",action:"Initial Survey",status:"Completed"},
    {project:"5-12564",action:"Site Audit",status:"Completed"},
    {project:"2-51152",action:"Field Management",status:"Completed"},
    {project:"2-51152",action:"Operations Assist",status:"Completed"},
    {project:"2-51152",action:"Surveyor Search",status:"Completed"},

  ];
  
  ngOnInit() {
  }
  
}
