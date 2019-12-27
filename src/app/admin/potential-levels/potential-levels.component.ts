import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPotentialLevelDialogComponent } from './add-potential-level-dialog/add-potential-level-dialog.component';
import { MasterDataService } from '../MasterDataService/master-data.service';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';

@Component({
  selector: 'app-potential-levels',
  templateUrl: './potential-levels.component.html',
  styleUrls: ['./potential-levels.component.scss']
})
export class PotentialLevelsComponent implements OnInit {
  sessionDetails: any;

  constructor(public dialog: MatDialog, private _masterService: MasterDataService) { }

  color = 'red'

  public OpenAddPotentialLevelDialog(item) {
    let dialogRef = this.dialog.open(AddPotentialLevelDialogComponent, {
      data: item,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        this.getAllPotentialLevels();
    });
  }

  
  deletePotentialLevel(value: number) {
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      data: value,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(id => {
      if (id != null) {
        var values = [{ potentialLevelId: id, modifiedBy: this.sessionDetails['UserDetails']['int_user_id'] }]
        this._masterService.deletePotentialLevel(values[0]).subscribe(
          data => {
            console.log(data);
            if (data['Status'] == true) {
            this.getAllPotentialLevels();
            }
          }
        )
      };
    })
  }

  ngOnInit() {
    this.sessionDetails = JSON.parse(localStorage.getItem('userloginsession'));
    this.getAllPotentialLevels();
  }


  changeStatus(values) {
    values.status = !values.status;
    this._masterService.upsertPotentialLevel(values).subscribe(
      data => {
        console.log(data);
        this.getAllPotentialLevels();
      },
      error => {
        console.log(error);
      }
    )
  }
  PotentialLevelsList = [
    { value: 1, potentialLevel: 'Fast', status: 'Active' },
    { value: 2, potentialLevel: 'Moderate', status: 'Active' },
    { value: 3, potentialLevel: 'Slow', status: 'Active' },
    { value: 4, potentialLevel: 'Stagnant', status: 'Active' },
  ]

  getAllPotentialLevels() {
    this._masterService.getAllPotentialLevels().subscribe(
      data => {
        console.log(data);
        this.PotentialLevelsList = data['Data'];
      },
      error => {
        console.log(error);
      }
    )
  }
}