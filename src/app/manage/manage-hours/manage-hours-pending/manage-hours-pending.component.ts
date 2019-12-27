import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { TimelineDialogComponent } from '../../projects/review/timeline-dialog/timeline-dialog.component';
import { ModalDirective } from '../../../../../node_modules/ngx-bootstrap';
import { HoursDialogComponent } from '../../../hours-dialog/hours-dialog.component';

@Component({
  selector: 'app-manage-hours-pending',
  templateUrl: './manage-hours-pending.component.html',
  styleUrls: ['./manage-hours-pending.component.scss']
})
export class ManageHoursPendingComponent implements OnInit {
//   Hours=[
//   {hours:4,tillDateAmount:250,subject:'Expense for journey',role:'Field Assistant',isSelected:false,columns:'City Homes / 4-24642 / 71 Mearns \  249 / Development / Prepare and maintain sketches',partyChief:'Jhon Cena',fieldAssistant:'Tim Root',validatedby:'Chris Morris',amount:50,messages:1,isPending:true,isApproved:false,isDeclined:false},
//   {hours:6,tillDateAmount:300,subject:'Vehicle diesel',role:'Field Assistant',isSelected:false,columns:'Delpark / 4-82324 / 71 Mearns Ct 20 / Development / Verify the accuracy of survey data',partyChief:'Robert Smith',fieldAssistant:'David Smith',validatedby:'Maria Rodriguez',amount:34,messages:2,isPending:true,isApproved:false,isDeclined:false},
//   {hours:8,tillDateAmount:275,subject:'Miscellaneous',role:'Quote Admin',isSelected:false,columns:'Hydro One / 6-10235 / 20 Mearns Ct / Development / To establish legal boundaries for properties',partyChief:'Maria Garcia',fieldAssistant:'Mary Smith',validatedby:'Maria Hernandez',amount:15,messages:3,isPending:true,isApproved:false,isDeclined:false},
//   {hours:4,tillDateAmount:200,subject:'Tools purchased',role:'Party Chief',isSelected:false,columns:'City Pickering / 2-51152 / Site 4 / Development / Supervise preparation of all data, charts, plots, maps, records, and documents ',partyChief:'Maria Martinez',fieldAssistant:'James Johnson',messages:2,isPending:true,validatedby:'Chris Morris',amount:55,isApproved:false,isDeclined:false},
// ] 


Hours = [
  {hours:40, id: 1, tillDateAmount: 250, subject: 'Expense for journey', role: 'Field Assistant', isSelected: false, client: 'City Homes', Project: '4-24642', site: '71 Mearns', sow: 'Development ', task: 'Quote', columns: 'City Homes / 4-24642 / 71 Mearns \  249 / Development / Prepare and maintain sketches', partyChief: 'Jhon Cena', fieldAssistant: 'Tim Root', validatedby: 'Chris Morris', amount: 50, messages: 1, isPending: true, isApproved: false, isDeclined: false },
  {hours:38, id: 2, tillDateAmount: 300, subject: 'Vehicle diesel', role: 'Field Assistant', isSelected: false, client: 'Delpark ', Project: '4-82324', site: '71 Mearns Ct 20', sow: 'Development ', task: 'Research', columns: 'Delpark / 4-82324 / 71 Mearns Ct 20 / Development / Verify the accuracy of survey data', partyChief: 'Robert Smith', fieldAssistant: 'David Smith', validatedby: 'Maria Rodriguez', amount: 34, messages: 2, isPending: true, isApproved: false, isDeclined: false },
  {hours:62, id: 3, tillDateAmount: 275, subject: 'Miscellaneous', role: 'Quote Admin', isSelected: false, client: 'Hydro One', Project: '6-10235', site: '20 Mearns', sow: 'Development ', task: 'Field', columns: 'Hydro One / 6-10235 / 20 Mearns Ct / Development / To establish legal boundaries for properties', partyChief: 'Maria Garcia', fieldAssistant: 'Mary Smith', validatedby: 'Maria Hernandez', amount: 15, messages: 3, isPending: true, isApproved: false, isDeclined: false },
  {hours:59, id: 4, tillDateAmount: 200, subject: 'Tools purchased', role: 'Party Chief', isSelected: false, client: 'City Pickering', Project: '2-51152', site: 'Site 4', sow: 'Development ', task: 'Drafting', columns: 'City Pickering / 2-51152 / Site 4 / Development / Supervise preparation of all data, charts, plots, maps, records, and documents ', partyChief: 'Maria Martinez', fieldAssistant: 'James Johnson', messages: 2, isPending: true, validatedby: 'Chris Morris', amount: 55, isApproved: false, isDeclined: false },
] 

  userType: string;
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
    if(sessionDetails.userType == 'user'){
      this.userType = 'user';
    }
    if(sessionDetails.userType == 'admin'){
      this.userType = 'admin';
    }
  }
  openMessagesDiolog(lead) {
    let dialogRef = this.dialog.open(TimelineDialogComponent, {
        data: lead,
        height: 'auto',
        width: '750px',
    });
  }
  openHoursDiolog(hour){
    let dialogRef = this.dialog.open(HoursDialogComponent,{
      data:hour,
      height:'auto',
      width:'450px',
    })
  }
  @ViewChild('childModal2') childModal2: ModalDirective;

  
  showChildModal2(): void {
    this.childModal2.show(); 
  }
 
  hideChildModal2(): void {
    this.childModal2.hide();
  }
}
