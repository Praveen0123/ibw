import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  filterToggle: boolean = false;
  constructor() { }
  Vacations = [
    { name: "Isaac Walker", position: "Project Manager", subject: "Personal Leave", fromdate: "2019-07-26", todate: "2019-06-30" },
    { name: "Henry Wade", position: "HR Manager", subject: "Family trip", fromdate: "2019-08-01", todate: "2019-08-10" },
    { name: "Hilda Sweden", position: "CAD Supervisor", subject: "Long Weekend Plan", fromdate: "2019-07-06", todate: "2019-07-10" },
    { name: "Marco Wilson", position: "Field Assistant", subject: "Health Check-up", fromdate: "2019-06-20", todate: "2019-06-20" },
    { name: "Martin Zeller", position: "Financial Manager", subject: "Family trip", fromdate: "2019-07-10", todate: "2019-06-12" },
    { name: "Jacob White", position: "H&S Manager", subject: "Long Weekend Plan", fromdate: "2019-07-16", todate: "2019-06-18" },

  ];

  Users=["Isaac Walker", "Henry Wade","Hilda Sweden","Marco Wilson","Martin Zeller","Jacob White"]

  leaves = [
    { id: 1, isPending: false, isApproved: false, isDeclined: false, userName: "John Smith", type: "Vacation", fromDate: "2019-07-04", toDate: "2019-07-06", fromTime: "-", toTime: "-", availLeaves: "8", duration: "2 days", messages: "2", status: "Approved", PTOBal: "1" },
    { id: 2, isPending: false, isApproved: false, isDeclined: false, userName: "Robert Williams", type: "Late Attendance", fromDate: "2019-07-07", toDate: "2019-07-07", fromTime: "09:00", toTime: "11:00", availLeaves: "-", duration: "120 mins", messages: "1", status: "Pending", PTOBal: "-" },
    { id: 3, isPending: false, isApproved: false, isDeclined: false, userName: "Neil Sams", type: "P T O", fromDate: "2019-07-04", toDate: "2019-07-05", fromTime: "-", toTime: "-", availLeaves: "4", duration: "1 day", messages: "4", status: "Declined", PTOBal: "2" },
    { id: 1, isPending: false, isApproved: false, isDeclined: false, userName: "Harry", type: "Leave Early", fromDate: "2019-07-16", toDate: "2019-07-16", fromTime: "16: 30", toTime: "18:00", availLeaves: "-", duration: "90 mins", messages: "2", status: "Reviewed", PTOBal: "-" },
    { id: 2, isPending: false, isApproved: false, isDeclined: false, userName: "Mark", type: "Vacation", fromDate: "2019-07-04", toDate: "2019-07-07", fromTime: "-", toTime: "-", availLeaves: "2", duration: "3 days", messages: "1", status: "Pending", PTOBal: "0" },
    { id: 3, isPending: false, isApproved: false, isDeclined: false, userName: "Cena", type: "Leave and Return", fromDate: "2019-07-19", toDate: "2019-07-19", fromTime: "15:20", toTime: "17:30", availLeaves: "-", duration: "130 mins", messages: "4", status: "Reviewed", PTOBal: "-" },
  ]
  ngOnInit() {
  }

}
