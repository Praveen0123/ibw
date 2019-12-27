
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { MatDialog, MatBottomSheet, MatTabChangeEvent } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material';
// import { ScheduleDialogComponent } from '././schedule-dialog/schedule-dialog.component';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Subject } from 'rxjs/Subject';
import { blockTransition } from '../../theme/utils/app-animation';
import { ScheduledialogueComponent } from './scheduledialogue/scheduledialogue.component';
import { EventsdialogueComponent } from './eventsdailogue/eventsdialogue.component';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { MapViewDailogComponent } from 'src/app/shared/map-view-dailog/map-view-dailog.component';
import { ViewMoreBottomSheetComponent } from './viewMoreBottomSheet/viewMoreBottomSheet.component';
import { AssetAssignDialogComponent } from '../asset-assign-dialog/asset-assign-dialog.component';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';
import { AddPhoneNotesComponent } from './add-phone-notes/add-phone-notes.component';


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
  selector: 'app-action-calendar',
  templateUrl: './action-calendar.component.html',
  styleUrls: ['./action-calendar.component.scss'],
  animations: [

  ]
})
export class ActionCalendarComponent implements OnInit {
  currentState = 'initial';
  filterState: any;
  isSelected: boolean = true;
  showDay : boolean = false;
  showWeek: boolean = true;
  Showfilter: boolean =false;
  staffUsers: any = []
  staffUsers2: any = []
  staffUsers3: any = []
  staffUsers4: any = []
  staffUsers5: any = []
  staffUsersDayView: any =[]
  staffUsersDayView2: any =[]
  staffUsersDayView3: any =[]
  staffUsersDayView4: any =[]
  staffUsersDayView5: any =[]


  staffViewUser: any = []
  staffViewUser2: any = []
  staffViewUser3: any = []
  staffViewUser4: any = []
  staffViewUser5: any = []
  htmlContent:any;

  activeButton: number = 2;
  connectedTo = [];
  StaffViewconnectedTo = [];
  public lat: number = 43.653963;
  public lng: number = -79.387207;
  public latnew: number = 44.0007518;
  public lngnew: number = -79.4372217;
  public latnew2: number = 45.2603984;
  public lngnew2: number = -75.8082383;
  public latnew3: number = 46.22545288;
  public lngnew3: number = -80.33203125;
  public latnew4: number = 42.52069953;
  public lngnew4: number = -81.87011719;
  public zoom: number = 7;
  public settings: Settings;

  @Input('markerClickable') clickable: boolean = false;
  @Input() openInfoWindow: boolean = true;

  /* public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT
  }; */

  
  openWindow(e) {
    window.open("/#/IBW/sales/projectdashboard", "_blank");
    // this._router.navigateByUrl("/IBW/sales/projects");
  }


  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  filterFunction() {
    this.filterToggle = !this.filterToggle
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }

  isGridView: boolean = true;
  view: string = 'month';
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  date1: Date;
  filterToggle: boolean = false;
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
    start: addHours(startOfDay(new Date()), 1),
    end: addHours(new Date(), 1),
    title: 'CAD Drafting is assigned to Jeremy Buchanan	from 2019-06-12 8:00 AM to 2019-06-12 11:00 AM',
    color: colors.red,
    actions: this.actions
  }, {
    start: startOfDay(new Date()),
    title: 'Operations Assistis is assigned to Arthur Cooper	from 2019-06-12 12:00 PM to 2019-06-12 03:00 PM',
    color: colors.yellow,
    actions: this.actions
  }, {
    start: addHours(endOfMonth(new Date()), 1),
    end: addDays(endOfMonth(new Date()), 1),
    title: 'Site Audit is assigned to Andy Jones	from 2019-06-29 02:00 PM to 2019-06-29 06:00 PM',
    color: colors.blue,
  }, {
    start: addHours(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'Field Management is assigned to Cally Johnston from 2019-06-12 04:00 PM to 2019-06-12 06:00 PM',
    color: colors.yellow,
    actions: this.actions,
    resizable: {
      beforeStart: true,
      afterEnd: true
    },
    draggable: true
  }];
  refresh: Subject<any> = new Subject();
  //public settings: Settings;
  Actions = [
    { actiontitle: "CAD Drafting", task: "Calcs & CAD", sow: "SoW-1", site: "71 Mearns ", project: "5-12564", projectmanager: "Jeremy Buchanan", datecreated: "2019-05-15", actiontype: "Quotes", jobcodes: "LPC1,CPC1", duedate: "2019-07-01", plannedhours: "8" },
    { actiontitle: "Operations Assist", task: "Administration", sow: "SoW-2", site: "20 Mearns Ct", project: "4-24642", projectmanager: "Arthur Cooper", datecreated: "2019-05-18", actiontype: "Research", jobcodes: "CPC2,PA,EA", duedate: "2019-07-12", plannedhours: "10" },
    { actiontitle: "Site Audit", task: "Fieldwork", sow: "SoW-3", site: "60 Mearns", project: "6-10235", projectmanager: "Andy Jones", datecreated: "2019-05-25", actiontype: "Field", jobcodes: "OLS", duedate: "2019-07-15", plannedhours: "7" },
    { actiontitle: "Field Management", task: "Management", sow: "SoW-4", site: "71 Mearns 249", project: "2-51152", projectmanager: "Cally Johnston", datecreated: "2019-05-29", actiontype: "Calcs", jobcodes: "EPC2", duedate: "2019-07-19", plannedhours: "9" },
    { actiontitle: "Surveyor Search", task: "Disbursments", sow: "SoW-5", site: " 55 Mearns Ct", project: "7-14164", projectmanager: "Stephanle George", datecreated: "2019-06-01", actiontype: "Drafting", jobcodes: "LPC2,GT1", duedate: "2019-07-23", plannedhours: "11" },
    { actiontitle: "CAD Corrections", task: "Calcs & CAD", sow: "SoW-6", site: "85 Mearns Ct", project: "2-25986", projectmanager: "Andy Jones", datecreated: "2019-06-08", actiontype: "Quality Control", jobcodes: "CPC1", duedate: "2019-07-21", plannedhours: "8" },
    { actiontitle: "Initial Survey", task: "Fieldwork", sow: "SoW-7", site: "71 Mearns Ct 20", project: "4-82324", projectmanager: "Arthur Cooper", datecreated: "2019-05-10", actiontype: "Management", jobcodes: "EA", duedate: "2019-07-26", plannedhours: "10" },

  ];

  unassignedActions = [
    { isMon: 0, isTues: 1, isWed: 0, isThurs: 0, isFriday: 0, staffName: 'Dave', monday: '8H (2A)', tuesday: '4H (1A)', wednesday: '8H (3A)', thursday: '8H (3A)', friday: '9H (3A)' },
    { isMon: 1, isTues: 1, isWed: 0, isThurs: 2, isFriday: 0, staffName: 'Emily', monday: '3H (1A)', tuesday: '6H (2A)', wednesday: '9H (4A)', thursday: '7H (3A)', friday: '8H (3A)' },
    { isMon: 1, isTues: 1, isWed: 0, isThurs: 1, isFriday: 1, staffName: 'Joe', monday: '5H (2A)', tuesday: '7H (3A)', wednesday: '10H (3A)', thursday: '6H (2A)', friday: '7H (2A)' },
    { isMon: 1, isTues: 0, isWed: 0, isThurs: 1, isFriday: 0, staffName: 'Kate', monday: '6H (2A)', tuesday: '9H (3A)', wednesday: '10H (3A)', thursday: '7H (3A)', friday: '8H (2A)' },
    { isMon: 0, isTues: 1, isWed: 2, isThurs: 0, isFriday: 0, staffName: 'Scott', monday: '9H (3A)', tuesday: '4H (1A)', wednesday: '9H (3A)', thursday: '9H (3A)', friday: '9H (3A)' },
    { isMon: 1, isTues: 1, isWed: 0, isThurs: 0, isFriday: 0, staffName: 'Dan', monday: '5H (1A)', tuesday: '4H (1A)', wednesday: '8H (3A)', thursday: '8H (2A)', friday: '9H (3A)' },
    { isMon: 2, isTues: 1, isWed: 1, isThurs: 0, isFriday: 0, staffName: 'Stephanie', monday: '4H (1A)', tuesday: '6H (2A)', wednesday: '7H (3A)', thursday: '9H (2A)', friday: '10H (4A)' },
    { isMon: 1, isTues: 1, isWed: 2, isThurs: 1, isFriday: 0, staffName: 'Scott', monday: '5H (2A)', tuesday: '7H (3A)', wednesday: '8H (3A)', thursday: '6H (2A)', friday: '8H (2A)' },
    { isMon: 0, isTues: 0, isWed: 0, isThurs: 1, isFriday: 2, staffName: 'Kate', monday: '9H (3A)', tuesday: '8H (4A)', wednesday: '9H (2A)', thursday: '7H (3A)', friday: '7H (2A)' }
  ];


  unassignedActionNames = [
    { action: "Ops Internal Task", dueDate: "2019-07-11", task: "Quote", hours: "4hrs", id: 1, projectNumber: '5-12564', site: '71 Mearns', sow: 'SRPR', jobCode: 'LPC1', isActive: true, class: 'col-sm-11 margin-top-10 mat-raised-button btn light-blue' },
    { action: "Site measurements", dueDate: "2019-07-14", task: "Research", hours: "6hrs", id: 2, projectNumber: '5-12367', site: '20 Mearns', sow: 'Topo', jobCode: 'EPC2', isActive: false, class: 'col-sm-11 margin-top-10 mat-raised-button btn light-green' },
    { action: "Ops Internal Task", dueDate: "2019-07-07", task: "Field", hours: "8hrs", id: 3, projectNumber: '5-1234', site: '20 Mearns', sow: 'Topo', jobCode: 'EPC1', isActive: false, class: 'col-sm-11 margin-top-10 mat-raised-button btn light-blue' },
    { action: "Progress Report for Field Work", dueDate: "2019-07-08", task: "Quality Control", hours: "2hrs", id: 4, projectNumber: '5-12356', site: '29 Mearns', sow: 'RPlan', jobCode: 'LPC1', isActive: false, class: 'col-sm-11 margin-top-10 mat-raised-button btn light-red' },
    { action: "Surveyor search", dueDate: "2019-07-09", task: "Drafting", hours: "5hrs", id: 5, projectNumber: '5-12367', site: '27 Mearns', sow: 'Topo', jobCode: 'EPC2', isActive: false, class: 'col-sm-11 margin-top-10 mat-raised-button btn light-red' },
    { action: "Site measurements", dueDate: "2019-07-11", task: "Calcs", hours: "10hrs", id: 6, projectNumber: '5-12564', site: '54 Mearns', sow: 'SRPR', jobCode: 'LPC2', isActive: false, class: 'col-sm-11 margin-top-10 mat-raised-button btn light-purple' },
    { action: "Ops Internal Task", dueDate: "2019-07-14", task: "Checking", hours: "9hrs", id: 7, projectNumber: '5-12367', site: '45 Mearns', sow: 'RPlan', jobCode: 'LPC1', isActive: false, class: 'col-sm-11 margin-top-10 mat-raised-button btn light-orange' },
    { action: "Ops Internal Task", dueDate: "2019-07-14", task: "Field", hours: "5hrs", id: 8, projectNumber: '5-12356', site: '20 Mearns', sow: 'Topo', jobCode: 'EPC2', isActive: false, class: 'col-sm-11 margin-top-10 mat-raised-button btn light-green' },
    { action: "Site measurements", dueDate: "2019-07-05", task: "Calcs", hours: "7hrs", id: 9, projectNumber: '5-12367', site: '40 Mearns', sow: 'Pinning', jobCode: 'LPC1', isActive: false, class: 'col-sm-11 margin-top-10 mat-raised-button btn light-orange' },
    { action: "Surveyor search", dueDate: "2019-07-01", task: "Research", hours: "7hrs", id: 10, projectNumber: '5-12185', site: '10 Mearns', sow: 'Pinning', jobCode: 'LPC3', isActive: false, class: 'col-sm-11 margin-top-10 mat-raised-button btn light-orange' }

  ]


  makeActive(id) {
    this.unassignedActionNames.forEach((x) => {
      if (x.id == id) {
        x.isActive = true;
      }
      else {
        x.isActive = false;

      }
      this.isSelected = false;
      setTimeout(() => {
        this.isSelected = true;

      }, 200);
    }
    );
  }

  public openMapDailog(siteId) {
    let dialogRef = this.dialog.open(MapViewDailogComponent, {
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

  public openAssignDialog(siteId) {
    let dialogRef = this.dialog.open(AssetAssignDialogComponent, {
      data: 'Add Expense',
      height: 'auto',
      width: '500px',

    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
      if (oppurtunity) {
        // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
      }
    });
  }
  openNotificationModal(){
    this.addNotificationModal.show();
    }
    hideChildModal(): void {
      this.addNotificationModal.hide();
    }
  constructor(public appSettings: AppSettings,
    private _bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    public snackBar: MatSnackBar, private _router: Router) {
    this.settings = this.appSettings.settings;
  }
  @ViewChild('addNotificationModal') addNotificationModal: ModalDirective;
  ngOnInit() {
    this.staffUsers = [
      {
        id: 'Dave',
        projectNum: '5-12564',
        sow: 'SRPR',
        duration: '4hrs',
        actions: [
          { name: "Ops Internal Task", colour: "light-blue", projectmanagername:"DC",isnotificationsent:false ,lock:true },
          { name: 'Progress Report for...', colour: "light-green", projectmanagername:"WS",isnotificationsent:true,lock:true  },
          { name: 'Surveyor search', colour: "light-red", projectmanagername:"RG",isnotificationsent:false ,lock:true }

        ]
      }, {
        id: 'Emily',
        projectNum: '5-12367',
        sow: 'Topo',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-purple" , projectmanagername:"SW",isnotificationsent:false,lock:true },
          { name: 'Ops Internal Task', colour: "light-orange" , projectmanagername:"RN",isnotificationsent:false,lock:true }

        ]
      }, {
        id: 'Joe',
        projectNum: '5-12359',
        sow: 'RPlan',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-green",projectmanagername:"DC" ,isnotificationsent:false,lock:true },
          { name: 'Ops Internal Task', colour: "light-orange",projectmanagername:"RN",isnotificationsent:true,lock:true  },

        ]
      }, {
        id: 'Kate',
        projectNum: '5-85369',
        sow: 'Pinning',
        duration: '2hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-red", projectmanagername:"RG",isnotificationsent:true,lock:true },
          { name: 'Surveyor search', colour: "light-blue" , projectmanagername:"SW",isnotificationsent:true ,lock:true },

        ]
      },
      {
        id: 'Scott',
        projectNum: '6-89635',
        sow: 'Topo',
        duration: '4hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-orange", projectmanagername:"WS",isnotificationsent:true,lock:true  },
        ]
      },
      {
        id: 'Dan',
        projectNum: '5-36985',
        sow: 'Pinning',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-purple" ,lock:true },
        ]
      },
      {
        id: 'John',
        projectNum: '',
        action: '5-12356',
        sow: 'Pinning',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-red", projectmanagername:"RG" ,isnotificationsent:true,lock:true },
        ]
      },
      {
        id: 'Peter',
        projectNum: '5-12356',
        sow: 'SRPR',
        duration: '2hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-blue", projectmanagername:"SW" ,lock:true },
        ]
      }
    ];


    this.staffUsers2 = [

      {
        id: 'DaveTuesday',
        projectNum: '5-12564',
        sow: 'SRPR',
        duration: '4hrs',
        actions: [
          { name: 'Ops Internal Task', colour: "light-red", projectmanagername:"DC" ,lock:true },
          { name: 'Progress Report for...', colour: "light-purple", projectmanagername:"WS",lock:true  },
          { name: 'Surveyor search', colour: "light-green" , projectmanagername:"SW",lock:true },
        ]
      }, {
        id: 'EmilyTuesday',
        projectNum: '5-12367',
        sow: 'Topo',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-red", projectmanagername:"RG",lock:true  },
          { name: 'Ops Internal Task', colour: "light-blue" , projectmanagername:"DC",lock:true },
        ]
      }, {
        id: 'JoeTuesday',
        projectNum: '5-12359',
        sow: 'RPlan',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-orange", projectmanagername:"SW",lock:true  },
          { name: 'Ops Internal Task', colour: "light-red" , projectmanagername:"RN",lock:true },
        ]
      }, {
        id: 'KateTuesday',
        projectNum: '5-85369',
        sow: 'Pinning',
        duration: '2hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-blue", projectmanagername:"RG",lock:true  },
          { name: 'Progress Report for...', colour: "light-green", projectmanagername:"WS",lock:true  },
        ]
      },
      {
        id: 'ScottTuesday',
        projectNum: '6-89635',
        sow: 'Topo',
        duration: '4hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-red", projectmanagername:"RN",lock:true  },
        ]
      },
      {
        id: 'DanTuesday',
        projectNum: '5-36985',
        sow: 'Pinning',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-red", projectmanagername:"RG" ,lock:true },
        ]
      },
      {
        id: 'JohnTuesday',
        projectNum: '5-12356',
        sow: 'Pinning',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-red", projectmanagername:"SW" ,lock:true },
        ]
      },
      {
        id: 'PeterTuesday',
        projectNum: '5-12356',
        sow: 'SRPR',
        duration: '2hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-red", projectmanagername:"RG",lock:true  },
        ]
      }
    ];

    this.staffUsers3 = [

      {
        id: 'DaveWednesday',
        projectNum: '5-12564',
        sow: 'SRPR',
        duration: '4hrs',
        actions: [
          { name: 'Ops Internal Task', colour: "light-red", projectmanagername:"RG" ,lock:true },
          { name: 'Progress Report for...', colour: "light-purple", projectmanagername:"DC" ,lock:true },
          { name: 'Surveyor search', colour: "light-blue", projectmanagername:"WS",lock:true  },
        ]
      }, {
        id: 'EmilyWednesday',
        projectNum: '5-12367',
        sow: 'Topo',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-red", projectmanagername:"RN",lock:true  },
          { name: 'Ops Internal Task', colour: "light-green", projectmanagername:"SW" ,lock:true },
        ]
      }, {
        id: 'JoeWednesday',
        projectNum: '5-12359',
        sow: 'RPlan',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-blue", projectmanagername:"DC",lock:true  },
          { name: 'Ops Internal Task', colour: "light-orange", projectmanagername:"WS",lock:true  },
        ]
      }, {
        id: 'KateWednesday',
        projectNum: '5-85369',
        sow: 'Pinning',
        duration: '2hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-purple", projectmanagername:"RG",lock:true  },
          { name: 'Progress Report for...', colour: "light-green", projectmanagername:"SW",lock:true  },
        ]
      },
      {
        id: 'ScottWednesday',
        projectNum: '6-89635',
        sow: 'Topo',
        duration: '4hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-red", projectmanagername:"DC",lock:true  },
        ]
      },
      {
        id: 'DanWednesday',
        projectNum: '5-36985',
        sow: 'Pinning',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-green", projectmanagername:"RG",lock:true  },
        ]
      },
      {
        id: 'JohnWednesday',
        projectNum: '5-12356',
        sow: 'Pinning',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-red", projectmanagername:"RN",lock:true  },
        ]
      },
      {
        id: 'PeterWednesday',
        projectNum: '5-12356',
        sow: 'SRPR',
        duration: '3hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-purple" , projectmanagername:"WS",lock:true },
        ]
      }
    ];


    this.staffUsers4 = [

      {
        id: 'DaveThursday',
        projectNum: '5-12564',
        sow: 'SRPR',
        duration: '4hrs',
        actions: [
          { name: 'Ops Internal Task', colour: "light-red", projectmanagername:"RG" ,lock:true },
          { name: 'Progress Report for...', colour: "light-red", projectmanagername:"WS",lock:true  },
          { name: 'Surveyor search', colour: "light-red" , projectmanagername:"RN",lock:true },
        ]
      }, {
        id: 'EmilyThursday',
        projectNum: '5-12367',
        sow: 'Topo',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-red", projectmanagername:"RG",lock:true  },
          { name: 'Ops Internal Task', colour: "light-red", projectmanagername:"SW",lock:true  },
        ]
      }, {
        id: 'JoeThursday',
        projectNum: '5-12359',
        sow: 'RPlan',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-red", projectmanagername:"DC",lock:true  },
          { name: 'Ops Internal Task', colour: "light-red" , projectmanagername:"RN",lock:true },
        ]
      }, {
        id: 'KateThursday',
        projectNum: '5-85369',
        sow: 'Pinning',
        duration: '2hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-red" , projectmanagername:"RG",lock:true },
          { name: 'Progress Report for...', colour: "light-purple" , projectmanagername:"SW",lock:true },
        ]
      },
      {
        id: 'ScottThursday',
        projectNum: '6-89635',
        sow: 'Topo',
        duration: '4hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-red", projectmanagername:"WS" ,lock:true },
        ]
      },
      {
        id: 'DanThursday',
        projectNum: '5-36985',
        sow: 'Pinning',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-green", projectmanagername:"RG",lock:true  },
        ]
      },
      {
        id: 'JohnThursday',
        projectNum: '5-12356',
        sow: 'Pinning',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-red", projectmanagername:"RG" ,lock:true },
        ]
      },
      {
        id: 'PeterThursday',
        projectNum: '5-12356',
        sow: 'SRPR',
        duration: '2hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-purple" ,lock:true },
        ]
      }
    ];

    this.staffUsers5 = [
      {
        id: 'DaveFriday',
        projectNum: '5-12564',
        sow: 'SRPR',
        duration: '4hrs',
        actions: [
          { name: 'Ops Internal Task', colour: "light-red", projectmanagername:"RG",lock:true  },
          { name: 'Progress Report for...', colour: "light-green", projectmanagername:"WS",lock:true  },
          { name: 'Surveyor search', colour: "light-orange" , projectmanagername:"DC",lock:true },
        ]
      }, {
        id: 'EmilyFriday',
        projectNum: '5-12367',
        sow: 'Topo',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-purple", projectmanagername:"RN",lock:true  },
          { name: 'Ops Internal Task', colour: "light-red" , projectmanagername:"SW",lock:true },
        ]
      }, {
        id: 'JoeFriday',
        projectNum: '5-12359',
        sow: 'RPlan',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-orange", projectmanagername:"RG" ,lock:true },
          { name: 'Ops Internal Task', colour: "light-blue", projectmanagername:"RN" ,lock:true },
        ]
      }, {
        id: 'KateFriday',
        projectNum: '5-85369',
        sow: 'Pinning',
        duration: '2hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-green" , projectmanagername:"DC",lock:true },
          { name: 'Progress Report for...', colour: "light-orange", projectmanagername:"SW" ,lock:true },
        ]
      },
      {
        id: 'ScottFriday',
        projectNum: '6-89635',
        sow: 'Topo',
        duration: '4hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-blue", projectmanagername:"RG" ,lock:true },
        ]
      },
      {
        id: 'DanFriday',
        projectNum: '5-36985',
        sow: 'Pinning',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-purple" , projectmanagername:"RN",lock:true },
        ]
      },
      {
        id: 'JohnFriday',
        projectNum: '5-12356',
        sow: 'Pinning',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-green", projectmanagername:"SW",lock:true  },
        ]
      },
      {
        id: 'PeterFriday',
        projectNum: '5-12356',
        sow: 'SRPR',
        duration: '1hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-red" , projectmanagername:"DC",lock:true },
        ]
      }
    ];

    this.staffUsersDayView = [
     {
        id: 'Emily',
        projectNum: '5-12367',
        sow: 'Topo',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-purple" , projectmanagername:"SW",isnotificationsent:false,lock:true },
          { name: 'Ops Internal Task', colour: "light-orange" , projectmanagername:"RN",isnotificationsent:false,lock:true }
        ]
      }
    ];

    this.staffUsersDayView2 = [
      {
        id: 'JoeTuesday',
        projectNum: '5-12359',
        sow: 'RPlan',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-orange", projectmanagername:"SW",lock:true  },
          { name: 'Ops Internal Task', colour: "light-red" , projectmanagername:"RN",lock:true },
        ]
      }
    ];

    this.staffUsersDayView3 = [
{
        id: 'KateWednesday',
        projectNum: '5-85369',
        sow: 'Pinning',
        duration: '2hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-purple", projectmanagername:"RG",lock:true  },
          { name: 'Progress Report for...', colour: "light-green", projectmanagername:"SW",lock:true  },
        ]
      }
    ];

    this.staffUsersDayView4 = [
      {
        id: 'JohnThursday',
        projectNum: '5-12356',
        sow: 'Pinning',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-red", projectmanagername:"RG" ,lock:true },
        ]
      }
    ];

    this.staffUsersDayView5 = [
      {
        id: 'PeterFriday',
        projectNum: '5-12356',
        sow: 'SRPR',
        duration: '1hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-red" , projectmanagername:"DC",lock:true },
        ]
      }
    ];






    for (let user of this.staffUsersDayView) {
      this.connectedTo.push(user.id);
    };
    for (let user of this.staffUsersDayView2) {
      this.connectedTo.push(user.id);
    };
    for (let user of this.staffUsersDayView3) {
      this.connectedTo.push(user.id);
    };
    for (let user of this.staffUsersDayView4) {
      this.connectedTo.push(user.id);
    };
    for (let user of this.staffUsersDayView5) {
      this.connectedTo.push(user.id);
    };
    for (let user of this.staffUsers) {
      this.connectedTo.push(user.id);
    };
    for (let user of this.staffUsers2) {
      this.connectedTo.push(user.id);
    };
    for (let user of this.staffUsers3) {
      this.connectedTo.push(user.id);
    };
    for (let user of this.staffUsers4) {
      this.connectedTo.push(user.id);
    };
    for (let user of this.staffUsers5) {
      this.connectedTo.push(user.id);
    };
    this.fnStaffView();
  }
  fnStaffView() {
    this.staffViewUser = [
      {
        id: 'Dave1',
        projectNum: '5-12564',
        sow: 'SRPR',
        duration: '4hrs',
        actions: [
          { name: "Ops Internal Task", colour: "light-blue", projectmanagername:"RG"  },
          { name: 'Progress Report for...', colour: "light-green", projectmanagername:"WS"  },
          { name: 'Surveyor search', colour: "light-red", projectmanagername:"DC"  }

        ]
      }, {
        id: 'Emily1',
        projectNum: '5-12367',
        sow: 'Topo',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-purple", projectmanagername:"RG"  },
          { name: 'Ops Internal Task', colour: "light-red", projectmanagername:"WS"  },
          { name: 'Ops Internal Task', colour: "light-red" },
          { name: 'Progress Report for...', colour: "light-purple", projectmanagername:"DC"  },
          { name: 'Surveyor search', colour: "light-green", projectmanagername:"RN"  },
        ]
      }, {
        id: 'Joe1',
        projectNum: '5-12359',
        sow: 'RPlan',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-orange", projectmanagername:"RG"  },
          { name: 'Ops Internal Task', colour: "light-blue", projectmanagername:"SW"  },
        ]
      }, {
        id: 'Kate1',
        projectNum: '5-85369',
        sow: 'Pinning',
        duration: '2hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-green", projectmanagername:"WS"  },
          { name: 'Progress Report for...', colour: "light-orange", projectmanagername:"RG"  },
        ]
      },
      {
        id: 'Scott1',
        projectNum: '6-89635',
        sow: 'Topo',
        duration: '4hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-blue", projectmanagername:"RG"  },
          { name: 'Site measurements', colour: "light-red" , projectmanagername:"RN" },
          { name: 'Ops Internal Task', colour: "light-blue" , projectmanagername:"WS" },
        ]
      },
      {
        id: 'Dan1',
        projectNum: '5-36985',
        sow: 'Pinning',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-purple", projectmanagername:"SW"  },
        ]
      },
      {
        id: 'John1',
        projectNum: '5-12356',
        sow: 'Pinning',
        duration: '4hrs',
        actions: [
          { name: 'Surveyor search', colour: "light-green", projectmanagername:"RG"  },
          { name: 'Site measurements', colour: "light-red" , projectmanagername:"DC" },
          { name: 'Ops Internal Task', colour: "light-blue" , projectmanagername:"RN" },
        ]
      },
      {
        id: 'Peter1',
        projectNum: '5-12356',
        sow: 'SRPR',
        duration: '1hrs',
        actions: [
          { name: 'Progress Report for...', colour: "light-red", projectmanagername:"RG"  },
        ]
      }];
    this.staffViewUser2 = [ {
      id: 'Dave1Tuesday',
      projectNum: '5-12564',
      sow: 'SRPR',
      duration: '4hrs',
      actions: [
        { name: 'Ops Internal Task', colour: "light-red" },
        { name: 'Progress Report for...', colour: "light-purple" },
        { name: 'Surveyor search', colour: "light-green" },
      ]
    }, {
      id: 'AlexTuesday',
      projectNum: '5-12367',
      sow: 'Topo',
      duration: '6hrs',
      actions: [
        { name: 'Site measurements', colour: "light-red" },
        { name: 'Ops Internal Task', colour: "light-blue" },
      ]
    }]
    this.staffViewUser3 = [ {
      id: 'Dave1Wednesday',
      projectNum: '5-12564',
      sow: 'SRPR',
      duration: '4hrs',
      actions: [
        { name: 'Ops Internal Task', colour: "light-red" },
        { name: 'Progress Report for...', colour: "light-purple" },
        { name: 'Surveyor search', colour: "light-blue" },
      ]
    }, {
      id: 'AlexWednesday',
      projectNum: '5-12367',
      sow: 'Topo',
      duration: '6hrs',
      actions: [
        { name: 'Site measurements', colour: "light-red" },
        { name: 'Ops Internal Task', colour: "light-green" },
      ]
    }]
    this.staffViewUser4 = [
      {
        id: 'Dave1Thursday',
        projectNum: '5-12564',
        sow: 'SRPR',
        duration: '4hrs',
        actions: [
          { name: 'Ops Internal Task', colour: "light-red" },
          { name: 'Progress Report for...', colour: "light-red" },
          { name: 'Surveyor search', colour: "light-red" },
        ]
      }, {
        id: 'AlexThursday',
        projectNum: '5-12367',
        sow: 'Topo',
        duration: '6hrs',
        actions: [
          { name: 'Site measurements', colour: "light-red" },
          { name: 'Ops Internal Task', colour: "light-red" },
        ]
      }
    ]
    
    this.staffViewUser5 = [ {
      id: 'Dave1Friday',
      projectNum: '5-12564',
      sow: 'SRPR',
      duration: '4hrs',
      actions: [
        { name: 'Ops Internal Task', colour: "light-red" },
        { name: 'Progress Report for...', colour: "light-green" },
        { name: 'Surveyor search', colour: "light-orange" },
      ]
    }, {
      id: 'AlexFriday',
      projectNum: '5-12367',
      sow: 'Topo',
      duration: '6hrs',
      actions: [
        { name: 'Site measurements', colour: "light-purple" },
        { name: 'Ops Internal Task', colour: "light-red" },
      ]
    }]
    
    for (let user of this.staffViewUser) {
      this.StaffViewconnectedTo.push(user.id);
    };
    for (let user of this.staffViewUser2) {
      this.StaffViewconnectedTo.push(user.id);
    };
    for (let user of this.staffViewUser3) {
      this.StaffViewconnectedTo.push(user.id);
    };
    for (let user of this.staffViewUser4) {
      this.StaffViewconnectedTo.push(user.id);
    };
    for (let user of this.staffViewUser5) {
      this.StaffViewconnectedTo.push(user.id);
    };
  
  }
  
  public openAddPhoneNotesDialog(values) {
    let dialogRef = this.dialog.open(AddPhoneNotesComponent, {
      data: values,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
      if(data =='save') {
        values.lock = false;
      } else {
        values.lock = true;
      }
    });
  }

  getDetails(item) {
    this._bottomSheet.open(ViewMoreBottomSheetComponent, {
      data: item
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


  scrollActions(side) {
    var ele = document.getElementById('actioncalendar');
    if (side == 'left')
      ele.scrollLeft += 190;
    else
      ele.scrollLeft -= 190;
  }
  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {

    if (events.length > 0) {
      this.openEventsDialog(events)
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
    let dialogRef = this.dialog.open(ScheduledialogueComponent, {
      data: event,
      height: '550px',
      width: '800px',
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
      width: '700',
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