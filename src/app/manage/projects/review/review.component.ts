import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';
import { ReviewGridColDialogComponent } from './review-grid-col-dialog/review-grid-col-dialog.component';
import { TextEditorDialogComponent } from './text-editor-dialog/text-editor-dialog.component';
import { TimelineDialogComponent } from './timeline-dialog/timeline-dialog.component';

export interface ExpensesData {
id:number;
dateofExpense:string;
dateSubmitted:string;
  isSelected: boolean;
  columns: string;
  partyChief: string;
  fieldAssistant: string;
  validatedby: string;
  amount: number;
  isApproved: boolean;
  isDeclined: boolean;
  subject:string;
  role:string;
  Messages: string
  tillDateAmount:number;
  isPending:boolean
}
const Expenses: ExpensesData[]=[
  {dateofExpense:"2019-05-15", dateSubmitted:"2019-05-18",id:1,tillDateAmount:250, Messages: '3',subject:'Expense for journey',role:'Field Assistant',isSelected:false,columns:'City Homes / 4-24642 / 71 Mearns \  249 / Development / Prepare and maintain sketches',partyChief:'Jhon Cena',fieldAssistant:'Tim Root',validatedby:'Chris Morris',amount:50,isPending:true,isApproved:false,isDeclined:false},
  {dateofExpense:"2019-05-17", dateSubmitted:"2019-05-21",id:2,tillDateAmount:300, Messages: '3',subject:'Vehicle diesel',role:'Field Assistant',isSelected:false,columns:'Delpark / 4-82324 / 71 Mearns Ct 20 / Development / Verify the accuracy of survey data',partyChief:'Robert Smith',fieldAssistant:'David Smith',validatedby:'Maria Rodriguez',amount:34,isPending:true,isApproved:false,isDeclined:false},
  {dateofExpense:"2019-05-19", dateSubmitted:"2019-05-24",id:3,tillDateAmount:275, Messages: '3',subject:'Miscellaneous',role:'Quote Admin',isSelected:false,columns:'Hydro One / 6-10235 / 20 Mearns Ct / Development / To establish legal boundaries for properties',partyChief:'Maria Garcia',fieldAssistant:'Mary Smith',validatedby:'Maria Hernandez',amount:15,isPending:true,isApproved:false,isDeclined:false},
  {dateofExpense:"2019-05-29", dateSubmitted:"2019-06-01",id:4,tillDateAmount:200, Messages: '3',subject:'Tools purchased',role:'Party Chief',isSelected:false,columns:'City Pickering / 2-51152 / Site 4 / Development / Supervise preparation of all data, charts, plots, maps, records, and documents ',partyChief:'Maria Martinez',fieldAssistant:'James Johnson',isPending:true,validatedby:'Chris Morris',amount:55,isApproved:false,isDeclined:false},
] 

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  dataSource = Expenses;
  ngOnInit(): void {
    this.pending = true;

    this.reviewData = 
    [
   { id: 1 ,Action: 'Take Measurements', Project:'5-12345',jobCode:'LPC1', LoggedBy: 'Chris Doe', HoursLogged: '2', DateTime: '2019/06/17 2:00 PM',
    Site: '20 Baker Street', SOW:'SoW 1', Task: 'Field Work', PlanHours: '6', ActualTillDate: '8', Client: 'ABC Ltd', 
    ProjectManager:'Dave', Status: false, PercentComplete: ' 85%', Updates: '4', Expenses: 'CAD 75', 
    Instructions:'View', DueDate: '2019-06-20', Messages: '3', Approved: true, Returned: false, 
    site:'71 Mearns',sow:'Reference Plan',task:'Quote' },

    { id: 2, Action: 'CAD Drafting', Project:'4-24642',jobCode:'OLS', LoggedBy: 'Galdot', HoursLogged: '1', DateTime: '2019/05/15 12:00 PM',
    Site: '36 Williams Bay', SOW:'SoW 2', Task: 'Reference Plan', PlanHours: '3', ActualTillDate: '4', Client: 'City Homes', 
    ProjectManager:'David', Status: true, PercentComplete: '90%', Updates: '3', Expenses: 'CAD 65', 
    Instructions:'View', DueDate: '2019-06-24', Messages: '3', Approved: true, Returned: false,
    site:'71 Mearns',sow:'Topographic',task:'Research'},

    { id: 3, Action: 'Initial Survey', Project:'2-10042',jobCode:'LPC1', LoggedBy: 'Jaden Sammy', HoursLogged: '3', DateTime: '2019/05/1 04:15 PM',
    Site: '16 Hebella', SOW:'SoW 3', Task: 'SRPR', PlanHours: '7', ActualTillDate: '10', Client: 'AECOM', 
    ProjectManager:'Lee Tang', Status: false, PercentComplete: '65%', Updates: '2', Expenses: 'CAD 80', 
    Instructions:'View', DueDate: '2019-05-23', Messages: '5', Approved: false, Returned: true,
    site:'71 Mearns Ct 20',sow:'Reference Plan',task:'Quote'},

    {id:4,  Action: 'Field Management', Project:'9-16342',jobCode:'CPC2', LoggedBy: 'Jaden Smith', HoursLogged: '5', DateTime: '2019/06/11 09:00 PM',
    Site: '115 Bruce Wayen', SOW:'SoW 4', Task: 'Reference Plan', PlanHours: '7', ActualTillDate: '12', Client: 'Sandbank Homes', 
    ProjectManager:'John Wick', Status: false, PercentComplete: '95%', Updates: '12', Expenses: 'CAD 55', 
    Instructions:'View', DueDate: '2019-05-04', Messages: '11', Approved: true, Returned: false,
    site:'71 Mearns Ct 20',sow:'Reference Plan',task:'Quote'},

    { id:5, Action: 'Site Audit', Project:'7-23342',jobCode:'LPC2', LoggedBy: 'Robert Smith', HoursLogged: '5', DateTime: '2019/04/13 11:00 PM',
    Site: '006 Rob killy Bay', SOW:'SoW 5', Task: 'Topographic', PlanHours: '8', ActualTillDate: '13', Client: 'Hydro One', 
    ProjectManager:'Kenny', Status: true, PercentComplete: '95%', Updates: '3', Expenses: 'CAD 105', 
    Instructions:'View', DueDate: '2019-06-04', Messages: '1', Approved: true, Returned: false,
    site:'71 Mearns Ct 20',sow:'Reference Plan',task:'Research'},
  ];
  }

  isApproved: any = [];
  isReturned : any = [];

  hrefid: any;
  filterToggle: boolean = false;
  activeindex: any = null;
  isGridView :boolean =true;
  treeview: any;
  reviewData: any =[];
  constructor(private ref: ChangeDetectorRef, public dialog: MatDialog) {
    //this.onResize();
  }
  istabs: boolean = true;
  tab1: boolean = true;
  tab2: boolean = false;

  functiondd(event) {
    console.log(event);
    console.log("OK")
    this.activeindex = event;
  }
  redrict() {
    window.open("/#/IBW/sales/projectdashboard", "_blank");
  }

  isApprovedSelect(val,id) {
    console.log(val)
    if(val == true){
      this.isReturned[id]=false ;
    }
  }
  isReturnedSelect(val, id){
    if(val == true){
      this.isApproved[id]=false;
    }
  }

  public opengridColDialog(lead) {
    let dialogRef = this.dialog.open(ReviewGridColDialogComponent, {
        data: lead,
        height: 'auto',
        width: '400px',
    });

    dialogRef.afterClosed().subscribe(lead => {
        if (lead) {
            // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
        }
    });
}

public openTextEditorDialog(lead) {
  let dialogRef = this.dialog.open(TextEditorDialogComponent, {
      data: lead,
      height: 'auto',
      width: '650px',
  });

  dialogRef.afterClosed().subscribe(lead => {
      if (lead) {
          // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
      }
  });
}

scrollActions(side) {
  var ele = document.getElementById('reviews');
  if(side == 'left')
  ele.scrollLeft += 190;
  else
  ele.scrollLeft -= 190;
}

public openMessagesDiolog(lead) {
  let dialogRef = this.dialog.open(TimelineDialogComponent, {
      data: lead,
      height: 'auto',
      width: '750px',
  });

  dialogRef.afterClosed().subscribe(lead => {
      if (lead) {
          // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
      }
  });
}

  pending: boolean = true;
  archives: boolean = false;


  Pending() {
    this.pending = true;
    this.archives = false;
  }
  Archives() {
    this.pending = false;
    this.archives = true;
  }
  @ViewChild('myKanban1') myKanban: jqxKanbanComponent;
  //@HostListener('window:resize', ['$event'])

  theme: any;
  startDate: Date;
  public dateTime1: Date;
  color = [189, 215, 238, 0];

  public openoppurtunityDialog(oppurtunity) {
    // let dialogRef = this.dialog.open(AddOppurtunityDialogComponent, {
    //     data: oppurtunity,
    //     height: 'auto',
    //     width: '600px',
    // });


    // dialogRef.afterClosed().subscribe(oppurtunity => {
    //     if (oppurtunity) {
    //         // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
    //     }
    // });
  }
  fields: any[] =
    [
      { name: 'id', type: 'string' },
      { name: 'status', map: 'state', type: 'string' },
      { name: 'text', map: 'campaign', type: 'string' },
      { name: 'content', map: 'colorCode', type: 'string' },
      { name: 'tags', map: 'lead', type: 'string' },
      { name: 'className', map: 'info', type: 'string' },
      { name: 'color', map: 'hex', type: 'string' },
      { name: 'resourceId', type: 'number' }
    ];

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '100%';
    }

    return '100%';
  }
  reviewpending = [
    {
      clientcode: "CITYHM", clientname: "City Homes", pmfullname: "Hilda Sweden", projectmanager: "Hida", projectcode: "5-12564	", datetime: "25-Apr-2019", sites: "71 Mearns Ct", deliverables: "SRPR"
      , task: "Roof Dev", action: "Completed Field/CAD", planhrs: "2", actualhrs: "5", duedate: "23-May-2019", jobcode: "Admin Assistant (55)", fieldstaff: "Ken J."
    },
    {
      clientcode: "DELHOME", clientname: "Delpark Homes", pmfullname: "Henry Wade", projectmanager: "Henry", projectcode: "6-42568	", datetime: "28-Mar-2019", sites: "1496 Mearns Ct", deliverables: "Reference Plan"
      , task: "Preparation", action: "Progress report", planhrs: "5", actualhrs: "7", duedate: "24-May-2019", jobcode: "Book Keeper (75)", fieldstaff: "Chris. S"
    },
    {
      clientcode: "HYDRO", clientname: "Hydro One", pmfullname: "Martin Zeller", projectmanager: "Martin", projectcode: "5-25966	", datetime: "25-Feb-2019", sites: "Baseline Rd E", deliverables: "Topographic Survey"
      , task: "Development ", action: "Place in pending", planhrs: "4", actualhrs: "8", duedate: "29-May-2019", jobcode: "CAD Supervisor (110)", fieldstaff: "Josh L."
    },
    {
      clientcode: "SANDHOME", clientname: "Sandbank Homes", pmfullname: "Marco Wilson", projectmanager: "Marco", projectcode: "4-85624	", datetime: "23-April-2019", sites: "Mearns Ct", deliverables: "SRPR"
      , task: "Preparation", action: "File away", planhrs: "3", actualhrs: "4", duedate: "22-May-2019", jobcode: "Calcs & CAD (85)", fieldstaff: "Petter R. "
    },
    {
      clientcode: "VALLEY", clientname: "Valleymede Homes", pmfullname: "Jacob White", projectmanager: "Jacob", projectcode: "6-15846	", datetime: "29-Feb-2019", sites: "Mearns Ave S", deliverables: "Topographic Survey"
      , task: "Development", action: "Completed checking", planhrs: "4", actualhrs: "8", duedate: "25-May-2019", jobcode: "Field Assistant (60)", fieldstaff: "Andy J."
    }
  ];

  reviewarchives = [
    {
      clientcode: "HYDRO", clientname: "Hydro One", pmfullname: "Martin Zeller", projectmanager: "Martin", projectcode: "5-25966	", datetime: "25-Feb-2019", sites: "Baseline Rd", deliverables: "Topographic"
      , task: "Development", action: "Place in pending", planhrs: "26", actualhrs: "22", duedate: "29-May-2019", notes: "In Process", Alert: "Moderat", reviewedon: "20-May-2019", reviewedby: "Isaac", reviewfullname: "Isaac Walker", jobcode: "Field Supervisor (110)", fieldstaff: "Jeremy C."
    },
    {
      clientcode: "SANDHOME", clientname: "Sandbank Homes", pmfullname: "Marco Wilson", projectmanager: "Marco", projectcode: "4-85624	", datetime: "23-Mar-2019", sites: "Mearns Ct", deliverables: "SRPR"
      , task: "Roof Dev", action: "File away", planhrs: "18", actualhrs: "13", duedate: "22-May-2019", notes: "In Process", Alert: "Moderat", reviewedon: "22-April-2019", reviewedby: "Martin", reviewfullname: "Martin Zeller", jobcode: "Financial Manager (75)", fieldstaff: "Tony E."
    },
    {
      clientcode: "DELHOME", clientname: "Delpark Homes", pmfullname: "Henry Wade", projectmanager: "Henry", projectcode: "6-42568	", datetime: "28-Jan-2019", sites: "14 Mearns Ct", deliverables: "Reference Plan"
      , task: "Development", action: "Progress report", planhrs: "25", actualhrs: "27", duedate: "24-May-2019", notes: "In Process", Alert: "Moderat", reviewedon: "23-May-2019", reviewedby: "Jason", reviewfullname: "Jason Miller", jobcode: "GIS Manager (110)", fieldstaff: "Murray J."
    },
    {
      clientcode: "CITYHM", clientname: "City Homes", pmfullname: "Hilda Sweden", projectmanager: "Hida", projectcode: "5-12564	", datetime: "25-Mar-2019", sites: "71 Mearns Ct", deliverables: "SRPR"
      , task: "Roof Dev", action: "Field/CAD", planhrs: "24", actualhrs: "20", duedate: "23-May-2019", notes: "In Process", Alert: "Moderat", reviewedon: "20-May-2019", reviewedby: "Jacob", reviewfullname: "Jacob White", jobcode: "H&S Manager (120)", fieldstaff: "Peter R."
    },
    {
      clientcode: "SANDHOME", clientname: "Sandbank Homes", pmfullname: "Marco Wilson", projectmanager: "Marco", projectcode: "4-85624	", datetime: "23-Feb-2019", sites: "Mearns Ct", deliverables: "SRPR"
      , task: "Preparation", action: "File away", planhrs: "18", actualhrs: "13", duedate: "22-May-2019", notes: "In Process", Alert: "Moderat", reviewedon: "22-May-2019", reviewedby: "Martin", reviewfullname: "Martin Zeller", jobcode: "HR Administrator (75)", fieldstaff: "Murray J."
    },
    {
      clientcode: "VALLEY", clientname: "Valleymede Homes", pmfullname: "Jacob White", projectmanager: "Jacob", projectcode: "6-15846	", datetime: "29-Feb-2019", sites: "Mearns Ave", deliverables: "Topographic"
      , task: "Preparation", action: "Checking", planhrs: "15", actualhrs: "8", duedate: "25-May-2019", notes: "In Process", Alert: "Moderat", reviewedon: "21-May-2019", reviewedby: "Hilda", reviewfullname: "Hilda Sweden", jobcode: "HR Manager (55)", fieldstaff: "Ken J."
    }

  ];

  // resourcesAdapterFunc = (): any => {
  //     let resourcesSource =
  //     {
  //         localData:
  //             [
  //                 { id: 0, name: 'No name', image: 'https://www.jqwidgets.com/angular/jqwidgets/styles/images/common.png', common: true },
  //                 { id: 1, name: 'Blue Stone', image: '../../../assets/img/app/stethoscope.png' },
  //                 { id: 2, name: 'Axess Corp', image: 'https://www.jqwidgets.com/angular/images/janet.png' },
  //                 { id: 3, name: 'BGR Pvt Ltd', image: '../../../assets/img/app/manufacturing.jpg' },
  //                 { id: 4, name: 'SIR', image: 'https://www.jqwidgets.com/angular/images/nancy.png' },
  //                 { id: 5, name: 'SKY', image: 'https://www.jqwidgets.com/angular/images/Michael.png' },
  //                 { id: 6, name: 'Margaret Buchanan', image: 'https://www.jqwidgets.com/angular/images/margaret.png' },
  //                 { id: 7, name: 'Robert Buchanan', image: 'https://www.jqwidgets.com/angular/images/robert.png' },
  //                 { id: 8, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Laura.png' },
  //                 { id: 9, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Anne.png' }
  //             ],
  //         dataType: 'array',
  //         dataFields:
  //             [
  //                 { name: 'id', type: 'number' },
  //                 { name: 'name', type: 'string' },
  //                 { name: 'image', type: 'string' },
  //                 { name: 'common', type: 'boolean' }
  //             ]
  //     };
  //     let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
  //     return resourcesDataAdapter;
  // }
}
