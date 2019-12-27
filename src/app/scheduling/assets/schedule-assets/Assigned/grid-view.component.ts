import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddAssetReturnDateDialogComponent } from './add-asset-return-date-dialog/add-asset-return-date-dialog.component';
import { CalendarEventAction, CalendarEvent } from 'angular-calendar';
import { addHours, startOfDay, endOfMonth, addDays, isSameMonth, isSameDay } from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { ScheduledialogueComponent } from '../../../action-calendar/scheduledialogue/scheduledialogue.component'
import { EventsdialogueComponent } from '../../../action-calendar/eventsdailogue/eventsdialogue.component'
import { Settings } from '../../../../app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { AssetsScheduleDialogComponent } from '../assets-schedule-dialog/assets-schedule-dialog.component';

const colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
    isGridView: boolean = true;
    view: string = 'month';
    viewDate: Date = new Date();
    activeDayIsOpen: boolean = true;
    actions: CalendarEventAction[] = [{
        label: '<i class="material-icons icon-sm white">edit</i>',
        onClick: ({event}: {event: CalendarEvent}): void => {
            this.openScheduleDialog(event);
        }
    }, {
        label: '<i class="material-icons icon-sm white">close</i>',
        onClick: ({event}: {event: CalendarEvent}): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            this.snackBar.open('Event deleted successfully!', null, {
                duration: 1500
            });
            
        }
    }];
    events: CalendarEvent[] = [{
      start: addHours(startOfDay(new Date()), 1),
      end: addHours(new Date(), 1),
      title: 'CAD Drafting is assigned to Jeremy Buchanan	from 2019-06-12 8:00 AM to 2019-06-12 11:00 AM',
    //   color: colors.red,
      actions: this.actions
    }, {
      start: startOfDay(new Date()),
      title: 'Operations Assistis is assigned to Arthur Cooper	from 2019-06-12 12:00 PM to 2019-06-12 03:00 PM',
    //   color: colors.yellow,
      actions: this.actions
    }, {
      start: addHours(endOfMonth(new Date()), 1 ),
      end: addDays(endOfMonth(new Date()), 1),
      title: 'Site Audit is assigned to Andy Jones	from 2019-06-29 02:00 PM to 2019-06-29 06:00 PM',
    //   color: colors.blue,
    }, { 
      start: addHours(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Field Management is assigned to Cally Johnston from 2019-06-12 04:00 PM to 2019-06-12 06:00 PM',
    //   color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      // draggable: true
    }];
    refresh: Subject<any> = new Subject();
    public settings: Settings;
    Actions = [
      {actiontitle:"CAD Drafting",task:"Calcs & CAD",sow:"SoW-1",site:"71 Mearns ",project:"5-12564",projectmanager:"Jeremy Buchanan",datecreated:"2019-05-15"},
      {actiontitle:"Operations Assist",task:"Administration",sow:"SoW-2",site:"20 Mearns Ct",project:"4-24642",projectmanager:"Arthur Cooper",datecreated:"2019-05-18"},
      {actiontitle:"Site Audit",task:"Fieldwork",sow:"SoW-3",site:"60 Mearns",project:"6-10235",projectmanager:"Andy Jones",datecreated:"2019-05-25"},
      {actiontitle:"Field Management",task:"Management",sow:"SoW-4",site:"71 Mearns 249",project:"2-51152",projectmanager:"Cally Johnston",datecreated:"2019-05-29"},
      {actiontitle:"Surveyor Search",task:"Disbursments",sow:"SoW-5",site:" 55 Mearns Ct",project:"7-14164",projectmanager:"Stephanle George",datecreated:"2019-06-01"},
      {actiontitle:"CAD Corrections",task:"Calcs & CAD",sow:"SoW-6",site:"85 Mearns Ct",project:"2-25986",projectmanager:"Andy Jones",datecreated:"2019-06-08"},
      {actiontitle:"Initial Survey",task:"Fieldwork",sow:"SoW-7",site:"71 Mearns Ct 20",project:"4-82324",projectmanager:"Arthur Cooper",datecreated:"2019-05-10"},
    
  ];
  mainArray: any = [];
  constructor(public appSettings:AppSettings, 
    public dialog: MatDialog, 
    public snackBar: MatSnackBar){
  this.settings = this.appSettings.settings; 
  }
  
    ngOnInit() {
      // var i = 0
      // for(i==0; i< 56; i++){
      //   if(i % 2  == 0){
      //     this.mainArray.push(true);
      //   }
      //   else{
      //     this.mainArray.push(false);
      //   }
      // }
    }
    scrollActions(side) {
      var ele = document.getElementById('actions');
      if(side == 'left')
      ele.scrollLeft += 190;
      else
      ele.scrollLeft -= 190;
  }
  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {    
   
    if(events.length > 0){
      this.openScheduleDialog(event)
    }
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }
  
  openScheduleDialog(event){
    let dialogRef = this.dialog.open(AddAssetReturnDateDialogComponent, {
      data: event,
      height: 'auto',
      width: '600px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(!result.isEdit){
          result.color = colors.blue;
          result.actions = this.actions;
          this.events.push(result);
          this.refresh.next();
        }else{
          //implement edit here
        }
      }
    });
  }
  
  
  openEventsDialog(event){
    let dialogRef = this.dialog.open(EventsdialogueComponent, {
      data: event,
      height: 'auto',
      width: '700',
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(!result.isEdit){
          result.color = colors.blue;
          result.actions = this.actions;
          this.events.push(result);
          this.refresh.next();
        }else{
          //implement edit here
        }
      }
    });
  }
  openScheduleDialogpopup(event){
    let dialogRef = this.dialog.open(AssetsScheduleDialogComponent, {
      data: event,
      height: 'auto',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(!result.isEdit){
         
        }else{
          //implement edit here
        }
      }
    });
  }

  assignedAsstes = [
    {assetName:"Cosmolabe", ref:"1589694", condition:"Excellent", monday:"Charles", tuesday:"Rick", wednesday:null, thursday:null, friday:"Richard +2", saturday:null, sunday:"Donald +1"},
    {assetName:"Dioptra", ref:"8569852", condition:"Excellent", monday:"Frank +1", tuesday:null, wednesday:null, thursday:"Walker +2", friday:"Rick", saturday:"Henry +2", sunday:"Charles +1"},
    {assetName:"Tachymeter", ref:"2368564", condition:"Excellent", monday:"Ken", tuesday:"Rick", wednesday:"Charles +2", thursday:null, friday:"Donald +3", saturday:null, sunday:null},
    {assetName:"Gramin", ref:"7584592", condition:"Excellent", monday:"Donald +2", tuesday:"Rick", wednesday:null, thursday:null, friday:null, saturday:"Martin +1", sunday:null},
    {assetName:"Digital Laser", ref:"9584268", condition:"Excellent", monday:"Charles", tuesday:"Rick", wednesday:"Fredrick +1", thursday:"Richard +1", friday:null, saturday:null, sunday:"Walker +1"},
    {assetName:"Tripod", ref:"6585972", condition:"Excellent", monday:null, tuesday:"Richard +3", wednesday:null, thursday:"Kenny", friday:"Walker", saturday:"Wilson +2", sunday:null},
    {assetName:"Rover Rod", ref:"7589524", condition:"Excellent", monday:null, tuesday:"Rick", wednesday:null, thursday:"Charles", friday:null, saturday:"Richard", sunday:null},
]
  
}
