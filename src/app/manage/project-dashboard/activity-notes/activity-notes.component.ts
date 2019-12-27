import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { NotesdialogComponent } from '../../quotes-dashboard/activity-notes/notesdialog/notesdialog.component';
import { MatDialog } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-activity-notes',
  templateUrl: './activity-notes.component.html',
  styleUrls: ['./activity-notes.component.scss']
})
export class ActivityNotesComponent implements OnInit {
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = false;
  public dateTime1: Date;
  public filterToggle : boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  locationOptions = ["Sites","Tasks","Actions","Assets","Expenses"];
locationOptionSelected: any;
startDate = new Date(1990, 0, 1);

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
}



onLocationOptionsSelected(event){
 console.log(event); //option value will be sent as event
}
  entries = [
    {
      class: 'mgl-timeline-entry-dot-linkedin',
      date:'Mon, 15 May 2019 08:54',
      element:'',
      headerClass: 'notesClass',
      header: 'Site',
      content: 'New site "MISS20191001" added by: "John"'
    },
    {
      class: 'mgl-timeline-entry-dot-email',
      date:'Tue, 10 May 2019 21:19',
      element:'',
      //dataelement:'fa fa-envelope-open-o',
      headerClass: 'notesClass',
      header: 'Task',
      content: 'New task "Field Preparation" has been added to site "MISS201910001" by "David"'
    },
    {
      class: 'mgl-timeline-entry-dot-calls',
      date:'Thu, 08 May 2019 19:14',
      element:'',
      dataelement:'',
      headerClass: 'notesClass',
      header: 'Action',
      content: 'New action "Field Drawing" has be added under site "MISS201910001'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 April 2019 14:10',
      element:'',
      dataelement:'',
      headerClass: 'notesClass',
      header: 'Site',
      content: 'New site "MISS20191001" added by: "Henry"'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 May 2019 19:14',
      element:'',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Task',
      content: 'New task "Field Preparation" has been added to site "MISS201910001" by "Walker"'
    },
    
  ]
  addEntry() {
    this.entries.push({
      header: 'header',
      date:'date',
      element:'element',
      headerClass: '',
      content: 'content',
      class: '',
    })
  }
  removeEntry() {
    this.entries.pop();
  }
  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }
  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }
  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }
  constructor(public dialog: MatDialog,private location:Location,public MglTimelineModule: MglTimelineModule) { }
  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
}