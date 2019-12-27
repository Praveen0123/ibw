import { Component, OnInit, Input, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { MenuService } from '../menu.service';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { QuotesDialogComponent } from '../../../../manage/quotes/quotes-dialog/quotes-dialog.component';
import { AddProjectDialogComponent } from '../../../../manage/projects/add-project-dialog/add-project-dialog.component';
import { NewSiteDailogComponent } from 'src/app/shared/new-site-dailog/new-site-dailog.component';
import { NewSowDailogComponent } from 'src/app/shared/new-sow-dailog/new-sow-dailog.component';
import { NewActionDailogComponent } from 'src/app/shared/new-action-dailog/new-action-dailog.component';
import { AddHoursDailogComponent } from 'src/app/shared/add-hours-dailog/add-hours-dailog.component';
import { AddExpenseDailogComponent } from 'src/app/shared/add-expense-dailog/add-expense-dailog.component';
import { LeaveRequestDailogComponent } from 'src/app/shared/leave-request-dailog/leave-request-dailog.component';


@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MenuService ]
})
export class HorizontalMenuComponent implements OnInit {
  @Input('menuParentId') menuParentId;
  public menuItems:Array<any>;
  public settings: Settings;
  public currentYear: String;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  menuId: any;

  constructor(public appSettings:AppSettings, public menuService:MenuService, public dialog : MatDialog,public router:Router,private cdref: ChangeDetectorRef) { 
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.currentYear = ''+ (new Date()).getFullYear();
    this.menuItems = this.menuService.getHorizontalMenuItems();
    if(this.menuItems !=  null)
    this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(this.settings.fixedHeader){
          let mainContent = document.getElementById('main-content');
          if(mainContent){
            mainContent.scrollTop = 0;
          }
        }
        else{
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
      }                
    });
  } 

  checkMenuLink(menuId){
    if(menuId == 29){
      this.openoppurtunityDialog(null);
    }
    else if(menuId == 30){
      this.openleadDialog(null);
    }
    // else if(menuId == 31){
    //   this.openSiteDailog(null);
    // }
    // else if(menuId == 32){
    //   this.openSowDailog(null);
    // }
    // else if(menuId == 33){
    //   this.openActionDailog(null);
    // }
    // else if(menuId == 34){
    //   this.openHoursDailog(null);
    // }
    // else if(menuId == 35){
    //   this.openExpenseDailog(null);
    // }
    else if(menuId == 34){
      this.openLeaveRequestDailog(null);
    }
  }

  public openoppurtunityDialog(oppurtunity) {
    let dialogRef = this.dialog.open(AddProjectDialogComponent, {
        data: 'New Project',
        height: 'auto',
        width: '1000px',

    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        if (oppurtunity) {
            // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
        }
    });
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
public openHoursDailog(siteId) {
  let dialogRef = this.dialog.open(AddHoursDailogComponent, {
      data: 'Add Hours',
      height: 'auto',
      width: '600px',

  });
  dialogRef.afterClosed().subscribe(oppurtunity => {
      if (oppurtunity) {
          // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
      }
  });
}

public openExpenseDailog(siteId) {
  let dialogRef = this.dialog.open(AddExpenseDailogComponent, {
      data: 'Add Expense',
      height: 'auto',
      width: '600px',

  });
  dialogRef.afterClosed().subscribe(oppurtunity => {
      if (oppurtunity) {
          // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
      }
  });
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

public openSowDailog(sowId) {
  let dialogRef = this.dialog.open(NewSowDailogComponent, {
      data: 'New SOW',
      height: 'auto',
      width: '500px',

  });
  dialogRef.afterClosed().subscribe(oppurtunity => {
      if (oppurtunity) {
          // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
      }
  });
}

public openActionDailog(sowId) {
  let dialogRef = this.dialog.open(NewActionDailogComponent, {
      data: 'New Action',
      height: 'auto',
      width: '600px',

  });
  dialogRef.afterClosed().subscribe(oppurtunity => {
      if (oppurtunity) {
          // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
      }
  });
}

public openleadDialog(lead) {
  let dialogRef = this.dialog.open(QuotesDialogComponent, {
      data: 'New RFQ',
      height: 'auto',
      width: '1050px',
  });

  dialogRef.afterClosed().subscribe(lead => {
      if (lead) {
          // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
      }
  });
}

}