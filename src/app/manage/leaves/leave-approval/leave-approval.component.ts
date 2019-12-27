import { Component, OnInit } from '@angular/core';
import { LeaveRequestDailogComponent } from 'src/app/shared/leave-request-dailog/leave-request-dailog.component';
import { MatDialog } from '@angular/material';
import { TimelineDialogComponent } from '../../projects/review/timeline-dialog/timeline-dialog.component';

@Component({
  selector: 'app-leave-approval',
  templateUrl: './leave-approval.component.html',
  styleUrls: ['./leave-approval.component.scss']
})
export class LeaveApprovalComponent implements OnInit {
  isActivity:boolean = false;
  isPending: boolean;
  isDeclined: boolean;
  isApproved: boolean;

activity(){
  this.isActivity = true;
  this.isPending= false;
  this.isDeclined= false;
  this.isApproved= false;
}

pending(){
  this.isActivity = false;
  this.isPending= true;
  this.isDeclined= false;
  this.isApproved= false;
}

approved(){
  this.isActivity = false;
  this.isPending= false;
  this.isDeclined= false;
  this.isApproved= true;
}
  isItApproved: any = [];
  isItReturned : any = [];

  isApprovedSelect(val,id) {
    console.log(val)
    if(val == true){
      this.isItReturned[id]=false ;
    }
  }
  isReturnedSelect(val, id){
    if(val == true){
      this.isItApproved[id]=false;
    }
  }

declined(){
  this.isActivity = false;
  this.isPending= false;
  this.isDeclined= true;
  this.isApproved= false;
}

  projects = [
    {clientName:"City Homes",clienttype:"CITYHM",manager:"Dwayne",survey:"3/5",projectname:"5-12564" ,phone:"(416) 920-5100",acivities:"48/80",deliverables:"6/10",actions:"8/10",review:"6/10",schedule:"7",overview:"5",billing:"8",docs:"92",completion:"60%",status:"Active",datecreated:"04/02/2019",duedate:"05/11/2019",statuss:"Fast",active:"Yes",projecttype:"Legal",startdate:"04/26/2019",completiondate:"05/23/2019"},
    {clientName:"Delpark Homes",clienttype:"DELHOME",manager:"Dave",survey:"3/6",projectname:"4-24642" ,phone:"(616) 426-6523",acivities:"48/96",deliverables:"6/12",actions:"6/10",review:"7/10",schedule:"3",overview:"6",billing:"4",docs:"110",completion:"50%",status:"Active",datecreated:"04/10/2019",duedate:"05/14/2019",statuss:"Moderate",active:"No",projecttype:"Engineering",startdate:"04/20/2019",completiondate:"05/27/2019"},
    {clientName:"Hydro One",clienttype:"HYDRO",manager:"Dwayne",survey:"2/3",projectname:"4-82324" ,phone:"(325) 980-0051",acivities:"32/48",deliverables:"4/6",actions:"8/10",review:"1/10",schedule:"9",overview:"2",billing:"6",docs:"50",completion:"66%",status:"Active",datecreated:"04/12/2019",duedate:"05/16/2019",statuss:"Slow",active:"Yes",projecttype:"Construction",startdate:"05/02/2019",completiondate:"05/25/2019"},
    {clientName:"Sandbank Homes",clienttype:"SANDHOME",manager:"Dave",survey:"2/2",projectname:"6-10235" ,phone:"(563) 856-3589",acivities:"32/32",deliverables:"4/4",actions:"3/10",review:"8/10",schedule:"2",overview:"3",billing:"8",docs:"42",completion:"100%",status:"Active",datecreated:"04/18/2019",duedate:"05/20/2019",statuss:"Stagnant",active:"Yes",projecttype:"Internal",startdate:"05/11/2019",completiondate:"05/26/2019"},
    {clientName:"Valleymede Homes",clienttype:"VALLEY ",manager:"Dwayne",survey:"4/5",projectname:"2-51152" ,phone:"(456) 694-1254",acivities:"64/80",deliverables:"8/10",actions:"5/10",review:"2/10",schedule:"4",overview:"7",billing:"9",docs:"96",completion:"80%",status:"Active",datecreated:"04/21/2019",duedate:"05/21/2019",statuss:"Fast",active:"No",projecttype:"Legal",startdate:"04/18/2019",completiondate:"05/24/2019"},
    {clientName:"AECOM",clienttype:"AECOM",survey:"3/6",manager:"Dave",projectname:"7-14164" ,phone:"(312) 785-5522",acivities:"48/96",deliverables:"6/12",actions:"2/10",review:"9/10",schedule:"1/10",overview:"5",billing:"1",docs:"110",completion:"50%",status:"Active",datecreated:"04/29/2019",duedate:"05/25/2019",statuss:"Slow",active:"Yes",projecttype:"Construction",startdate:"05/01/2019",completiondate:"05/23/2019"},
];

leaves=[
{reasons:"Illness or Injury",id:1,isPending:false,isApproved:false,isDeclined:false,userName:"John Smith", leaveType: "Full Day", fromDate: "2019-07-04", toDate : "2019-07-04", fromTime:"--", toTime:"--", availLeaves: "8", duration: "2 Days",messages:"2", status: "Approved", PTOBal:"1"},
{reasons:"Vacation",id:2,isPending:false,isApproved:false,isDeclined:false,userName:"Robert Williams", leaveType: "Multiple Days", fromDate: "2019-07-04", toDate : "2019-07-07", fromTime:"--", toTime:"--", availLeaves: "2", duration: "3 Days", messages:"1",status: "Pending", PTOBal:"0"},
{reasons:"Illness or Injury",id:3,isPending:false,isApproved:false,isDeclined:false,userName:"Neil Sams", leaveType: "P T O", fromDate: "2019-07-04", toDate : "2019-07-05",  fromTime:"--", toTime:"--", availLeaves: "4", duration: "4 Days",messages:"1", status: "Declined",PTOBal:"2"},
{reasons:"Weather or Transportation Issues",id:4,isPending:false,isApproved:false,isDeclined:false,userName:"Harry", leaveType: "Late Attendance", fromDate: "2019-07-04", toDate : "2019-07-05", fromTime:"09:00", toTime:"11:00",  availLeaves: "--", duration: "120 Min",messages:"--", status: "Pending",PTOBal:"--"},
{reasons:"Appointment",id:5,isPending:false,isApproved:false,isDeclined:false,userName:"Peter", leaveType: "Early Departure", fromDate: "2019-07-04", toDate : "2019-07-05",  fromTime:"15:00", toTime:"18:00",availLeaves: "--", duration: "180 Min",messages:"--", status: "Pending",PTOBal:"--"},
{reasons:"Appointment",id:6,isPending:false,isApproved:false,isDeclined:false,userName:"Allen", leaveType: "Leave and Return", fromDate: "2019-07-04", toDate : "2019-07-05", fromTime:"15:00", toTime:"17:00", availLeaves: "--", duration: "120 Min",messages:"--", status: "Pending",PTOBal:"--"},
{reasons:"Illness or Injury",id:7,isPending:false,isApproved:false,isDeclined:false,userName:"Chris Morris", leaveType: "Working Remotely", fromDate: "2019-07-22", toDate : "2019-07-22", fromTime:"--", toTime:"--", availLeaves: "--", duration: "1 day",messages:"--", status: "Pending",PTOBal:"--"},
]

scrollActions(side) {
  var ele = document.getElementById('leaves');
  if(side == 'left')
  ele.scrollLeft += 190;
  else
  ele.scrollLeft -= 190;
}





filterToggle:boolean=false;

public openMessages(siteId) {
  let dialogRef = this.dialog.open(TimelineDialogComponent, {
      data: 'Messages',
      height: 'auto',
      width: '600px',

  });
  dialogRef.afterClosed().subscribe(oppurtunity => {
      if (oppurtunity) {
          // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
      }
  });
}

  paramId: any;
  userType: string = "";

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
    var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
    if(sessionDetails.userType == 'user'){
      this.userType = 'user';
    }
    if(sessionDetails.userType == 'admin'){
      this.userType = 'admin';
    }

    this.pending()

  }

  
public openLeaveRequestDailog(siteId) {
  let dialogRef = this.dialog.open(LeaveRequestDailogComponent, {
      data: 'Leave Request',
      height: 'auto',
      width: '600px',

  });
  dialogRef.afterClosed().subscribe(oppurtunity => {
      if (oppurtunity) {
          // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
      }
  });
}
}
