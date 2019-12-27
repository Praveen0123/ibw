import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FileLocationdialogueComponent } from './file-locationdialogue/file-locationdialogue.component';

@Component({
  selector: 'app-physical-file-location',
  templateUrl: './physical-file-location.component.html',
  styleUrls: ['./physical-file-location.component.scss']
})
export class PhysicalFileLocationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  public OpenAddPotentialLevelDialog() {
    let dialogRef = this.dialog.open(FileLocationdialogueComponent, {
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
  DelayReasonList =[
    {filelocation:'Bowmanville', status:'Active'},
    {filelocation:'Belleville', status:'Active'},
    {filelocation:'Kingston ', status:'Active'},
  ]

}
