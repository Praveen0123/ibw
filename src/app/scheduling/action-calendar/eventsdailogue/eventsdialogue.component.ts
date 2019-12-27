import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-eventsdialogue',
  templateUrl: './eventsdialogue.component.html',
  styleUrls: ['./eventsdialogue.component.scss']
})
export class EventsdialogueComponent implements OnInit {
  partychiefOptions = ["Robert Smith","John Hazalwood","Williamson","Fedrick White","Mark Daves"];
  fromtimehrOptions = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
  fromtimemmOptions = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23",
  "24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
  fieldOptions = ['Isaac Walker', 'Henry Wade', 'Martin Zeller', 'Mark Daves', 'Hilda Sweden', 'Jacob White'];

  Actions = [
    
    {partychief:"Robert Smith",action:"CAD Drafting",project:"5-12564",fromdate:"2019-06-12",fromtime:"10:00",todate:"2019-06-12",totime:"16:00"},
    // {actiontitle:"Operations Assist",task:"Administration",sow:"SoW-2",site:"20 Mearns Ct",project:"4-24642",projectmanager:"Arthur Cooper",datecreated:"2019-05-18"},
];
// field = [
//   {field:"Isaac Walker",action:"CAD Drafting",project:"5-12564",fromdate:"2019-06-12",fromtime:"10:00",todate:"2019-06-12",totime:"16:00"},
//   {field:"",action:"CAD Drafting",project:"5-12564",fromdate:"2019-06-12",fromtime:"10:00",todate:"2019-06-12",totime:"16:00"},
//   // {actiontitle:"Operations Assist",task:"Administration",sow:"SoW-2",site:"20 Mearns Ct",project:"4-24642",projectmanager:"Arthur Cooper",datecreated:"2019-05-18"},
// ];

  constructor(public dialogRef: MatDialogRef<EventsdialogueComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

}
