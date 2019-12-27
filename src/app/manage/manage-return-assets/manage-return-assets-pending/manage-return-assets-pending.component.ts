import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { TimelineDialogComponent } from '../../projects/review/timeline-dialog/timeline-dialog.component';
import { ModalDirective } from '../../../../../node_modules/ngx-bootstrap';
import { AssetsScheduleDialogComponent } from 'src/app/scheduling/assets/schedule-assets/assets-schedule-dialog/assets-schedule-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-return-assets-pending',
  templateUrl: './manage-return-assets-pending.component.html',
  styleUrls: ['./manage-return-assets-pending.component.scss']
})
export class ManageReturnAssetsPendingComponent implements OnInit {
  userType: string;
  constructor(private dialog:MatDialog, public router: Router) { }
  Assets=[

  
  {id:1,issueDate:"2019-06-20",dueDate:"2019-06-22",returnedDate:"2019-06-22",remarks:'Expense for journey',isSelected:false,assignedTo:'Jhon Cena',returnedBy:'Jhon Cena',validatedby:'Chris Morris',amount:50,messages:1,isPending:true,isApproved:false,isDeclined:false,assetName:"Cosmolabe",assetCategory:"Vechile",assetReference:"586952",previouscondition:"Excellent",currentcondition:"Excellent"},
  {id:2,issueDate:"2019-06-25",dueDate:"2019-06-26",returnedDate:"2019-06-26",remarks:'Vehicle diesel',isSelected:false,assignedTo:'Robert Smith',returnedBy:'David Smith',validatedby:'Maria Rodriguez',amount:34,messages:2,isPending:true,isApproved:false,isDeclined:false,assetName:"Dioptra",assetCategory:"Total Station",assetReference:"369452",previouscondition:"Excellent",currentcondition:"Has Issues"},
  {id:3,issueDate:"2019-06-10",dueDate:"2019-06-12",returnedDate:"2019-06-12",remarks:'Miscellaneous',isSelected:false,assignedTo:'Maria Garcia',returnedBy:'Maria Garcia',validatedby:'Maria Hernandez',amount:15,messages:3,isPending:true,isApproved:false,isDeclined:false,assetName:"Tachymeter	",assetCategory:"Vechile",assetReference:"389462",previouscondition:"Excellent",currentcondition:"Excellent"},
  {id:4,issueDate:"2019-06-12",dueDate:"2019-06-14",returnedDate:"2019-06-14",remarks:'Tools purchased',isSelected:false,assignedTo:'Maria Martinez',returnedBy:'James Johnson',messages:2,isPending:true,validatedby:'Chris Morris',amount:55,isApproved:false,isDeclined:false,assetName:"Dioptra",assetCategory:"Total Station",assetReference:"698242",previouscondition:"Excellent",currentcondition:"Excellent"},
] 
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

  @ViewChild('childModal2') childModal2: ModalDirective;

  
  showChildModal2(): void {
    this.childModal2.show(); 
  }
 
  hideChildModal2(): void {
    this.childModal2.hide();
  }
  openScheduleDialogpopup(event) {
    // this.router.navigate(['/IBW/scheduling/assets/schedule-assets']);
    window.open('/#/IBW/scheduling/assets/schedule-assets', '_blank')
    // let dialogRef = this.dialog.open(AssetsScheduleDialogComponent, {
    //   data: event,
    //   height: 'auto',
    //   width: '600px',
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     if (!result.isEdit) {

    //     } else {
    //       //implement edit here
    //     }
    //   }
    // });
  }
}
