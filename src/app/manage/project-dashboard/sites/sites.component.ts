import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap';
import { MatDialog } from '@angular/material';
import { NewSiteDailogComponent } from 'src/app/shared/new-site-dailog/new-site-dailog.component';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
  modalRef: BsModalRef;
  userType: string = "";
  constructor(private modalService: BsModalService, public dialog: MatDialog) {}
 
  @ViewChild('addSiteModal') addSiteModal: ModalDirective;
 
  countries = ["Canada", "USA"]
  provinceOptions = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
  "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"];
cityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];
munipalityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];





  showChildModal(): void {
   // this.addSiteModal.show();
   this.openSiteDailog(null);
  }
 
  hideChildModal(): void {
    this.addSiteModal.hide();
  }


  public openSiteDailog(siteId) {
    let dialogRef = this.dialog.open(NewSiteDailogComponent, {
        data: 'New Site',
        height: 'auto',
        width: '600px',
  
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        if (oppurtunity) {
            // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
        }
    });
  }


  ngOnInit() {
    var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
    console.log(sessionDetails.userType,'fff');
    if(sessionDetails.userType == 'user'){
      this.userType = 'user';
    }
    if(sessionDetails.userType == 'admin'){
      this.userType = 'admin';
    }
  }
  SitesData =[
    {siteName:'71 Mearns / 249',sow:"4",city:'Toronto',municipality:'Toronto',province:'Ontario', status:true},
    {siteName:'71 Mearns Ct 20',sow:"3",city:'Ottawa',municipality:'Ottawa',province:'Ontario', status:false},
    {siteName:'20 Mearns Ct',sow:"2",city:'Mississauga',municipality:'Mississauga',province:'Ontario', status:true},
  ]
}
