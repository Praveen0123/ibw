import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs = [
    { Date:"1-08-2019",time:" 11:30 AM",user:"Dwayne Cummings",role:"Project manager",url:"/Authentication/Login",error:"System.FormatException"},
    { Date:"3-08-2019",time:" 9:40 AM",user:"Dwayne Cummings",role:"Project manager",url:"/Landing Dashboard/Dashboard",error:"System.Web.HttpException"},
    { Date:"6-08-2019",time:" 2:00 PM",user:"Dwayne Cummings",role:"Project manager",url:"/Create/Leave request",error:"System.Web.HttpException"},
    { Date:"10-08-2019",time:" 4:45 PM",user:"Dwayne Cummings",role:"Project manager",url:"/Manage/Clients",error:"System.Web.HttpException"},
    { Date:"12-08-2019",time:" 7:10 AM",user:"Dwayne Cummings",role:"Project manager",url:"/Manage/Contacts",error:"System.FormatException"},
    { Date:"19-08-2019",time:" 10:15 PM",user:"Dwayne Cummings",role:"Project manager",url:"/Manage/Contacts",error:"System.FormatException"},
    { Date:"20-08-2019",time:" 12:00 AM",user:"Dwayne Cummings",role:"Project manager",url:"/Manage/Quotes",error:"System.Web.HttpException"},
    { Date:"27-08-2019",time:" 6:50 AM",user:"Dwayne Cummings",role:"Project manager",url:"/Manage/Projects",error:"System.Web.HttpException"},
    { Date:"31-08-2019",time:" 9:15 PM",user:"Dwayne Cummings",role:"Project manager",url:"/Manage/Expenses",error:"System.Web.HttpException"},
    { Date:"5-09-2019",time:" 4:55 PM",user:"Dwayne Cummings",role:"Project manager",url:"/Manage/Return Assets",error:"System.FormatException"},
    { Date:"17-09-2019",time:" 1:15 PM",user:"Dwayne Cummings",role:"Project manager",url:"/Scheduling/Action scheduling",error:"System.Web.HttpException"}
  ];

  constructor() { }

  ngOnInit() {
  }

}