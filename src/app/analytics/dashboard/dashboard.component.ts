import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // day: boolean =false;
  result: any = null;
  rangeTypes = [
    { id: 0, value: "Day" },
    { id: 1, value: "Week" }];
  myControl = new FormControl();
  options: string[] = ["Port Area Initiative", "Basement Flooding", "Dome Scanning", "Culvert Topographic", "Bridge Topographic","Town House Foundation"];
  filteredOptions: Observable<string[]>;
  public settings: Settings;
  public filterToggle : boolean;
  userType: string ="";
  constructor(public appSettings:AppSettings){
    this.settings = this.appSettings.settings; 
    
  }



  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  ngOnInit() {

    this.filterToggle = false;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
    if(sessionDetails.userType == 'user'){
      this.userType = 'user';
    }
    if(sessionDetails.userType == 'admin'){
      this.userType = 'admin';
    }

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  
// myform: FormGroup;
projectOptions = ["Port Area Initiative", "Basement Flooding", "Dome Scanning", "Culvert Topographic", "Bridge Topographic","Town House Foundation"];
projectOptionSelected: any;
onprojectptionsSelected(event) {
}
siteOptions = ["MISS201905123", "MISS202684235", "MISS202612598", "MISS202758926"];
siteOptionSelected: any;
onsiteOptionsSelected(event) {
}
regionOptions = ["Cordillera", "Prairies", "North", "Canadian Shield", "St. Lawrence River","Atlantic","Great Lakes"];
regionOptionSelected: any;
onregionOptionsSelected(event) {
}
cityOptions = ["Vancouver", "Ottawa", "Regina", "Toronto", "Charlottetown", "Edmonton ", "Fredericton "];
cityOptionSelected: any;
oncityOptionsSelected(event) {
}
roleOptions = ['Project Manager', 'Production Team', 'Project Admin', 'Administration', 'Field Staff', 'CAD Staff', 'Finance'];
roleOptionSelected: any;

onroleOptionsSelected(event) {
}
staffOptions = ["Dwayne", "Dave", "Emily", "Joe", "Kate", "Scott", "Ryan", "Chris", "Justin", "Ken", "Dan", "Tony", "Stephanie", "Laurie"];
staffOptionSelected: any;

onstaffOptionsSelected(event) {
}
projectstageOptions = ["Initiated", "Completed", "InProcess", "Pending"];
projectstageOptionSelected: any;

onprojectstageOptionsSelected(event) {
}
billingstatusOptions = ["Paid", "Overdue", "Pending"];
billingstatusOptionSelected: any;

onbillingstatusOptionsSelected(event) {
}
archivalstatusOptions = ["Date"];
archivalstatusOptionSelected: any;

onarchivalstatusOptionsSelected(event) {
}

}
