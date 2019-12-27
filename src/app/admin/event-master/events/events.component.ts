import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events = [
    { Date:"1-08-2019",time:"11:30 AM",user:"Dwayne Cummings",role:"Project manager",module:"Authentication",screen:"Login",event:"Read",Description:"User attempted to login to the application" },
    { Date:"3-08-2019",time:"9:40 AM",user:"Dwayne Cummings",role:"Project manager",module:"Landing Dashboard",screen:"Dashboard",event:"Read",Description:"Attempt to view dashboard - time & entry" },
    { Date:"6-08-2019",time:"2:00 PM",user:"Dwayne Cummings",role:"Project manager",module:"Create",screen:"Leave request",event:"Read",Description:"Attempt to make a leave request" },
    { Date:"10-08-2019",time:"4:45 PM",user:"Dwayne Cummings",role:"Project manager",module:"Manage",screen:"Clients",event:"Read",Description:"Attempt to view clients grid view" },
    { Date:"12-08-2019",time:"7:10 AM",user:"Dwayne Cummings",role:"Project manager",module:"Manage",screen:"Contacts",event:"Read",Description:"Attempt to view contact grid view" },
    { Date:"19-08-2019",time:"10:15 PM",user:"Dwayne Cummings",role:"Project manager",module:"Manage",screen:"Contacts",event:"Delete",Description:"Contact deleted successfully" },
    { Date:"20-08-2019",time:"12:00 AM",user:"Dwayne Cummings",role:"Project manager",module:"Manage",screen:"Quotes",event:"Read",Description:"Attempt to view quote grid" },
    { Date:"27-08-2019",time:"6:50 AM",user:"Dwayne Cummings",role:"Project manager",module:"Manage",screen:"Projects",event:"Read",Description:"Attempt to view projects" },
    { Date:"31-08-2019",time:"9:15 PM",user:"Dwayne Cummings",role:"Project manager",module:"Manage",screen:"Expenses",event:"Pending",Description:"Attempt to view pending expenses" },
    { Date:"5-09-2019",time:"4:55 PM",user:"Dwayne Cummings",role:"Project manager",module:"Manage",screen:"Return Assets",event:"Read",Description:"Attempt to view assets with status pending" },
    { Date:"17-09-2019",time:"1:15 PM",user:"Dwayne Cummings",role:"Project manager",module:"Scheduling",screen:"Action scheduling",event:"Read",Description:"Attempt to view grid view" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
