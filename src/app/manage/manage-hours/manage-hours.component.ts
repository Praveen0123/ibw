import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-hours',
  templateUrl: './manage-hours.component.html',
  styleUrls: ['./manage-hours.component.scss']
})
export class ManageHoursComponent implements OnInit {
  userType: string;
  selected = 1;
  constructor() { }
  isPending: boolean = true;

  filterToggle: boolean = false;
  ngOnInit() {
    var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
    if(sessionDetails.userType == 'user'){
      this.userType = 'user';
    }
    if(sessionDetails.userType == 'admin'){
      this.userType = 'admin';
    }
  }

}
