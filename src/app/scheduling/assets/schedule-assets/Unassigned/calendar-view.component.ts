import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
//import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';
import { Subject } from 'rxjs/Subject';
import { blockTransition } from '../../../../theme/utils/app-animation';
import { Settings } from '../../../../app.settings.model';
import { AppSettings } from '../../../../app.settings';


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
  },
  green: {
    primary: '#1fe618',
    secondary: '##83e67f'
  }
};
@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  animations: [ blockTransition ],
  host: {
    '[@blockTransition]': ''
  }
})
export class CalendarViewComponent implements OnInit {

  filterToggle:boolean = false;
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
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'Cosmolabe is assigned to George Smith from 2019-06-10 to 2019-06-12',
    color: colors.blue,
    actions: this.actions
  },{
    start: subDays(startOfDay(new Date()), 2),
    end: addDays(new Date(), 1),
    title: 'Graphometer is assigned to Maxwell Martin from 2019-06-9 to 2019-06-12',
    color: colors.green,
    actions: this.actions
  },{
    start: subDays(startOfDay(new Date()), 2),
    end: addDays(new Date(), 2),
    title: 'Total station is assigned to Thomas Brown from 2019-06-9 to 2019-06-13',
    color: colors.red,
    actions: this.actions
  }, {
    start: startOfDay(new Date()),
    title: 'Tachymeter is assigned to William Tremblay from 2019-06-11',
    color: colors.yellow,
    actions: this.actions
  }, 
  // {
  //   start: subDays(endOfMonth(new Date()), 3),
  //   end: addDays(endOfMonth(new Date()), 3),
  //   title: 'A long event that spans 2 months',
  //   color: colors.blue
  // },
  






  //, 
  // {
  //   start: addHours(startOfDay(new Date()), 2),
  //   end: new Date(),
  //   title: 'A draggable and resizable event',
  //   color: colors.yellow,
  //   actions: this.actions,
  //   resizable: {
  //     beforeStart: true,
  //     afterEnd: true
  //   },
    //draggable: true
  //}
];
  refresh: Subject<any> = new Subject();


  public settings: Settings;
  constructor(public appSettings:AppSettings, 
              public dialog: MatDialog, 
              public snackBar: MatSnackBar){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    console.log(this.events,'calaendar events')
  }

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {    
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
    // let dialogRef = this.dialog.open(AssetsComponent, {
    //   data: event,
    //   height: 'auto',
    //   width: '600px',
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if(result){
    //     if(!result.isEdit){
    //       result.color = colors.blue;
    //       result.actions = this.actions;
    //       this.events.push(result);
    //       this.refresh.next();
    //     }else{
    //       //implement edit here
    //     }
    //   }
    // });
  }

}