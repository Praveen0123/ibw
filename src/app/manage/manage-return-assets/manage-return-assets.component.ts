import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-return-assets',
  templateUrl: './manage-return-assets.component.html',
  styleUrls: ['./manage-return-assets.component.scss']
})
export class ManageReturnAssetsComponent implements OnInit {

  constructor() { }
  isPending: boolean = true;
  isReturned:boolean=true;
  
  userType: string
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
