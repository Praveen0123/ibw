import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-scheduledialogue',
  templateUrl: './scheduledialogue.component.html',
  styleUrls: ['./scheduledialogue.component.scss']
})
export class ScheduledialogueComponent implements OnInit {
  partychiefOptions = ["Robert Smith","John Hazalwood","Williamson","Fedrick White","Mark Daves"];
  fromtimehrOptions = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
  fromtimemmOptions = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23",
  "24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
  fieldOptions = ['Isaac Walker', 'Henry Wade', 'Martin Zeller', 'Mark Daves', 'Hilda Sweden', 'Jacob White'];
  public selectedMoment = new Date();

  Actions = [
    
    {partychief:"Robert Smith",action:"CAD Drafting",project:"5-12564",fromdate:"2019-07-12",fromtime:"10:00",todate:"2019-07-12",totime:"16:00"},
    {partychief:"Harry Murre",action:"Field Measurements",project:"2-12563",fromdate:"2019-07-15",fromtime:"11:00",todate:"2019-06-15",totime:"12:00"},
    {partychief:"David Smith",action:"Search for Surveyors",project:"5-13544",fromdate:"2019-07-16",fromtime:"12:00",todate:"2019-06-16",totime:"16:00"},
    {partychief:"Farook Jhon",action:"CAD Drafting",project:"1-14566",fromdate:"2019-07-12",fromtime:"10:00",todate:"2019-06-12",totime:"16:00"},
    {partychief:"Kim Jhan",action:"CAD Drafting",project:"4-12534",fromdate:"2019-07-12",fromtime:"10:00",todate:"2019-06-12",totime:"16:00"},
    {partychief:"Golith Kary",action:"CAD Drafting",project:"6-17564",fromdate:"2019-07-12",fromtime:"10:00",todate:"2019-06-12",totime:"16:00"},
    {partychief:"Jhon Cena",action:"CAD Drafting",project:"4-12566",fromdate:"2019-07-12",fromtime:"10:00",todate:"2019-06-12",totime:"16:00"},
    {partychief:"Mary K",action:"CAD Drafting",project:"7-12567",fromdate:"2019-07-12",fromtime:"10:00",todate:"2019-06-12",totime:"16:00"},
    {partychief:"Pointing Jack",action:"CAD Drafting",project:"9-12568",fromdate:"2019-07-12",fromtime:"10:00",todate:"2019-06-12",totime:"16:00"},

    // {actiontitle:"Operations Assist",task:"Administration",sow:"SoW-2",site:"20 Mearns Ct",project:"4-24642",projectmanager:"Arthur Cooper",datecreated:"2019-05-18"},
];


date6: Date;

overview:boolean=false;
assign:boolean=false;


public selectedLink: string = "overview";

setradio(e: string): void {
  this.selectedLink = e;

if(this.selectedLink =="overview"){
  this.overview=true;
this.assign=false;
}
else{
  this.overview=false;
this.assign=true;
}

}
isSelected(name: string): boolean {
  if (!this.selectedLink) { 
    return false;
  }
  return (this.selectedLink === name); 
}
  constructor(public dialogRef: MatDialogRef<ScheduledialogueComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

}
