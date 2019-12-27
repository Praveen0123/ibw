import { Component, OnInit } from '@angular/core';
import { AssetsScheduleDialogComponent } from './assets-schedule-dialog/assets-schedule-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddAssetReturnDateDialogComponent } from './Assigned/add-asset-return-date-dialog/add-asset-return-date-dialog.component';
import { CalendarEventAction, CalendarEvent } from 'angular-calendar';
import { addHours, startOfDay, endOfMonth, addDays, isSameMonth, isSameDay } from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { EventsdialogueComponent } from '../../action-calendar/eventsdailogue/eventsdialogue.component';


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
  selector: 'app-schedule-assets',
  templateUrl: './schedule-assets.component.html',
  styleUrls: ['./schedule-assets.component.scss']
})
export class ScheduleAssetsComponent implements OnInit {

  title = 'Welcome word';
  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';

  filterToggle: boolean = false;
  isGridView: boolean = true;
  selected = 1;
  view: string = 'month';
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  actions: CalendarEventAction[] = [{
    label: '<i class="material-icons icon-sm white">edit</i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.openScheduleDialog(event);
    }
  }, {
    label: '<i class="material-icons icon-sm white">close</i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.snackBar.open('Event deleted successfully!', null, {
        duration: 1500
      });

    }
  }];
  tableList = [
    {assetname:"Cosmolabe",reference:"1589694",condition:"Excellent"},
    {assetname:"Dioptra",reference:"8569852",condition:"Excellent"},
    {assetname:"Tachymeter",reference:"2368564",condition:"Excellent"},
    {assetname:"Gramin",reference:"7584592",condition:"Excellent"},
    {assetname:"Digital Laser",reference:"9584268",condition:"Excellent"},
    {assetname:"Tripod",reference:"6585972",condition:"Excellent"},
    {assetname:"Rover Rod",reference:"7589524",condition:"Excellent"},

  ];

  date11: Date;
  message: string;
 
  onShown(): void {
    this.message = 'shown';
  }
  bsInlineValue = new Date();
 
  onHidden(): void {
    this.message = 'hidden';
  }
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
    start: addHours(endOfMonth(new Date()), 1),
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
    { actiontitle: "CAD Drafting", task: "Calcs & CAD", sow: "SoW-1", site: "71 Mearns ", project: "5-12564", projectmanager: "Jeremy Buchanan", datecreated: "2019-05-15" },
    { actiontitle: "Operations Assist", task: "Administration", sow: "SoW-2", site: "20 Mearns Ct", project: "4-24642", projectmanager: "Arthur Cooper", datecreated: "2019-05-18" },
    { actiontitle: "Site Audit", task: "Fieldwork", sow: "SoW-3", site: "60 Mearns", project: "6-10235", projectmanager: "Andy Jones", datecreated: "2019-05-25" },
    { actiontitle: "Field Management", task: "Management", sow: "SoW-4", site: "71 Mearns 249", project: "2-51152", projectmanager: "Cally Johnston", datecreated: "2019-05-29" },
    { actiontitle: "Surveyor Search", task: "Disbursments", sow: "SoW-5", site: " 55 Mearns Ct", project: "7-14164", projectmanager: "Stephanle George", datecreated: "2019-06-01" },
    { actiontitle: "CAD Corrections", task: "Calcs & CAD", sow: "SoW-6", site: "85 Mearns Ct", project: "2-25986", projectmanager: "Andy Jones", datecreated: "2019-06-08" },
    { actiontitle: "Initial Survey", task: "Fieldwork", sow: "SoW-7", site: "71 Mearns Ct 20", project: "4-82324", projectmanager: "Arthur Cooper", datecreated: "2019-05-10" },

  ];
  mainArray: any = [];
  // isUnAssigned:boolean=true;
  // isAssigned:boolean=false;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) {
    this.settings = this.appSettings.settings;
  }
  // openScheduleDialog(event){
  //   let dialogRef = this.dialog.open(AssetsScheduleDialogComponent, {
  //     data: event,
  //     height: 'auto',
  //     width: '600px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result){
  //       if(!result.isEdit){

  //       }else{
  //         //implement edit here
  //       }
  //     }
  //   });
  // }

  //   assigned(){
  // this.isUnAssigned=false;
  // this.isAssigned=true;
  //   }
  //   unAssigned(){
  //     this.isUnAssigned=true;
  //     this.isAssigned=false;
  //   }
  ngOnInit() {
  }
  scrollActions(side) {
    var ele = document.getElementById('actions');
    if (side == 'left')
      ele.scrollLeft += 190;
    else
      ele.scrollLeft -= 190;
  }
  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {

    if (events.length > 0) {
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

  openScheduleDialog(event) {
    let dialogRef = this.dialog.open(AddAssetReturnDateDialogComponent, {
      data: event,
      height: 'auto',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!result.isEdit) {
          result.color = colors.blue;
          result.actions = this.actions;
          this.events.push(result);
          this.refresh.next();
        } else {
          //implement edit here
        }
      }
    });
  }


  openEventsDialog(event) {
    let dialogRef = this.dialog.open(EventsdialogueComponent, {
      data: event,
      height: 'auto',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!result.isEdit) {
          result.color = colors.blue;
          result.actions = this.actions;
          this.events.push(result);
          this.refresh.next();
        } else {
          //implement edit here
        }
      }
    });
  }
  openScheduleDialogpopup(event) {
    let dialogRef = this.dialog.open(AssetsScheduleDialogComponent, {
      data: event,
      height: 'auto',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!result.isEdit) {

        } else {
          //implement edit here
        }
      }
    });
  }

  assignedAsstes = [
    {condition:"Excellent",assetName:"Cosmolabe", ref:"1589694",  monday:"Charles", tuesday:"Rick", wednesday:null, thursday:null, friday:"Richard", saturday:null, sunday:"Donald"},
    {condition:"Excellent",assetName:"Dioptra", ref:"8569852", monday:"Frank", tuesday:null, wednesday:null, thursday:"Walker", friday:"Rick", saturday:"Henry", sunday:"Charles"},
    {condition:"Excellent",assetName:"Tachymeter", ref:"2368564",  monday:"Ken", tuesday:"Rick", wednesday:"Charles", thursday:null, friday:"Donald", saturday:null, sunday:null},
    {condition:"Repair",assetName:"Gramin", ref:"7584592",  monday:null, tuesday:null, wednesday:null, thursday:null, friday:null, saturday:null, sunday:null},
    {condition:"Excellent",assetName:"Digital Laser	", ref:"9584268",  monday:null, tuesday:"Rick", wednesday:"Fredrick", thursday:"Richard", friday:null, saturday:null, sunday:"Walker"},
    {condition:"Excellent",assetName:"Tripod", ref:"6585972",  monday:null, tuesday:"Richard", wednesday:null, thursday:"Kenny", friday:"Walker", saturday:"Wilson", sunday:null},
    {condition:"Excellent",assetName:"Rover Rod", ref:"7589524",  monday:"Fred", tuesday:"Rick", wednesday:null, thursday:"Charles", friday:null, saturday:"Richard", sunday:null},
]

}
