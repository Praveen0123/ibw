import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap';
import { NewSiteDailogComponent } from 'src/app/shared/new-site-dailog/new-site-dailog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
  modalRef: BsModalRef;
  selected=1;
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
  }
  SitesData =[
    {siteName:'71 Mearns / 249',city:'Toronto',municipality:'Toronto',province:'Ontario', status:true},
    {siteName:'71 Mearns Ct 20',city:'Ottawa',municipality:'Ottawa',province:'Ontario', status:false},
    {siteName:'20 Mearns Ct',city:'Mississauga',municipality:'Mississauga',province:'Ontario', status:true},
  ]
}
