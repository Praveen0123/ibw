import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { ScheduleDialogComponent } from 'src/app/create/schedule-dialog/schedule-dialog.component';
import { Settings } from '../../app.settings.model';
import { AppSettings } from '../../app.settings';
import { TimesheetDialogComponent } from './timesheet-dialog/timesheet-dialog.component';
import { TimesheetsStatusModalComponent } from './timesheets-status-modal/timesheets-status-modal.component';


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
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss']
})
export class TimesheetsComponent implements OnInit {
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
  events: CalendarEvent[] = [{
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'A 3 day event',
    color: colors.red,
    actions: this.actions
  }, {
    start: startOfDay(new Date()),
    title: 'An event with no end date',
    color: colors.yellow,
    actions: this.actions
  },{
    start: startOfDay(new Date()),
    title: 'An event with no end date',
    color: colors.yellow,
    actions: this.actions
  },{
    start: startOfDay(new Date()),
    title: 'An event with no end date',
    color: colors.yellow,
    actions: this.actions
  },{
    start: subDays(startOfDay(new Date()), 5),
    end: addDays(new Date(), 5),
    title: 'A 3 day event',
    color: colors.red,
    actions: this.actions
  },{
    start: subDays(startOfDay(new Date()), 5),
    end: addDays(new Date(), 5),
    title: 'A 3 day event',
    color: colors.red,
    actions: this.actions
  },{
    start: subDays(startOfDay(new Date()), 5),
    end: addDays(new Date(), 5),
    title: 'A 3 day event',
    color: colors.red,
    actions: this.actions
  },{
    start: subDays(startOfDay(new Date()), 5),
    end: addDays(new Date(), 5),
    title: 'A 3 day event',
    color: colors.red,
    actions: this.actions
  }];
  refresh: Subject<any> = new Subject();


  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
  }

  OpenTimesheetsStatusModal() {
    let dialogRef = this.dialog.open(TimesheetsStatusModalComponent, {})
  }


  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
        this.openScheduleDialog(null)
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
        this.openScheduleDialog(null)
      }
    }
  }

  openScheduleDialog(event) {
    let dialogRef = this.dialog.open(TimesheetDialogComponent, {
      data: event
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

}