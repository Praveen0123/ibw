import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AnnouncementsDialogComponent } from './announcements-dialog/announcements-dialog.component';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcements=[
    {subject:"Privacy Policy",message:"We have updated our privacy policy.Please read latest documentation",
    status:"Published",publishedDate:"2019-06-14",toolTip:"Republish",notificationType:"Text,Email"},
    {subject:"New Project Award",message:"Congratulations and compliments to all of us for putting great efforts in Highway 407 project award.", 
    status:"Draft",publishedDate:"-",toolTip:"Publish",notificationType:"Text,Email,Push Notification"}
  ];
  constructor(public dialog:MatDialog) { }
  public AddAnnouncementsDialog() {
    let dialogRef = this.dialog.open(AnnouncementsDialogComponent, {
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

}
