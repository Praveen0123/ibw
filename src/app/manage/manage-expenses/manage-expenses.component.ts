import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-expenses',
  templateUrl: './manage-expenses.component.html',
  styleUrls: ['./manage-expenses.component.scss']
})
export class ManageExpensesComponent implements OnInit {
  userType: string;

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
