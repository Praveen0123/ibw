import { Component, OnInit } from '@angular/core';
import { NotesdialogComponent } from './notesdialog/notesdialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-activity-notes',
  templateUrl: './activity-notes.component.html',
  styleUrls: ['./activity-notes.component.scss']
})
export class ActivityNotesComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
  roles:object[] =[
    {category:"Quotes",description:"Description for Quotes",datetime:"2019-06-29, 08:00 AM"},
    {category:"Research",description:"Description for Research",datetime:"2019-06-29, 08:00 AM"},
    {category:"Field",description:"Description for Field",datetime:"2019-06-29, 08:00 AM"},
    {category:"Cals",description:"Description for Cals",datetime:"2019-06-29, 08:00 AM"},
    {category:"Drafting",description:"Description for Drafting",datetime:"2019-06-29, 08:00 AM"},
  ]
  
  public openUserDialog(id) {
    let dialogRef = this.dialog.open(NotesdialogComponent, {
        data: id,
        height: 'auto',
        width: '400px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  } // public openUserDialog(id) {
  //   let dialogRef = this.dialog.open(NotesdialogComponent, {
  //       data: id,
  //       height: 'auto',
  //       width: '600px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  
    
  
    ngOnInit() {
    }
  
 
}