import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';
import { MatDialog } from '@angular/material';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { AddProjectDialogComponent } from '../add-project-dialog/add-project-dialog.component'

@Component({
  selector: 'app-projects-layout',
  templateUrl: './projects-layout.component.html',
  styleUrls: ['./projects-layout.component.scss']
})
export class ProjectsLayoutComponent {
  hrefid: any;
  filterToggle: boolean = false;
    activeindex: any = null;
    treeview: any;
    isFilter: boolean;
    userType: string = "";
    constructor(private ref: ChangeDetectorRef, public dialog: MatDialog, public router: Router) {

    
      //this.onResize();
    }
    ngOnInit() {
        this.router.events
        .filter(event => (event instanceof NavigationEnd))
            .subscribe((routeData: any) => {
                if(this.router.url.includes("kanban-view"))
               {
                    this.isFilter = false;
                }
                else{
                    this.isFilter = true;
                }
            });
            
            if(this.router.url.includes("kanban-view"))
            {
                 this.isFilter = false;
             }
             else{
                 this.isFilter = true;
             }

             var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
             if(sessionDetails.userType == 'user'){
               this.userType = 'user';
             }
             if(sessionDetails.userType == 'admin'){
               this.userType = 'admin';
             }

     
    }
    survey = [
      {survey:"MISS201905123",manager:"Hilda Sweden",activities:'3/6',tasks:"3/8" ,startdate:"25-Apr-2019",duedate:"12-Jun-2019",completion:"76%",hours:"36/45",status:"Active"},
      {survey:"MISS202684235",manager:"Henry Wade",activities:'5/9',tasks:"5/7" ,startdate:"09-Apr-2019",duedate:"14-Aug-2019",completion:"93%",hours:"15/23",status:"Inactive"},
  ];
    activity = [
      {activity:"Preparation",surveycode:"MISS201905123",tasks:"3/5" ,startdate:"21-May-2019",duedate:"05/17/2019",completion:"67%",hours:"24/45",details:"View"},
      {activity:"Development",surveycode:"MISS202684235",tasks:"4/5" ,startdate:"11-Apr-2019",duedate:"05/20/2019",completion:"82%",hours:"10/23",details:"View"},
  ];
  timeline = [
      {activity:"Preparation",tasks:"6/10" ,startdate:"21-May-2019",duedate:"31-May-2019",completion:"76%",hours:"16/19",details:"View"},
      {activity:"Development",tasks:"7/8" ,startdate:"21-Jan-2019",duedate:"28-Apr-2019",completion:"69%",hours:"18/26",details:"View"},
  ];
  expenses = [
      {account:"Fuel Charges",claims:"340" ,paid:"300 ",pending:"40"},
      {account:"Vechile Maint",claims:"700" ,paid:"700",pending:"0"},
  ];
  assets = [
      {staff:"Scott",assetname :"Total Station" ,serial:"202035",issuedate:"12-May-2019",releasedate:"17-May-2019",assigned:"3",used:"2"},
      {staff:"Ryan",assetname :"Field Vechile" ,serial:"8535",issuedate:"27-Jun-2019",releasedate:"30-Jul-2019",assigned:"1",used:"1"},
  ];
  schedules = [
      {date :"25-May-2019" ,activities:"CAD Design",tasks:"2/10",hours:"5/15",status:"Active",completion:"20 %"},
      {date:"27-Jun-2019",activities :"Field survey" ,tasks:"4/12",hours:"10/20",status:"Active",completion:"35 %"},
  ];
  docs = [
      {doctitle:"Site Drawing",dateuploaded :"25-Mar-2019" ,taskreference:"Field Preparation",uploadedby:"Scott"},
      {doctitle:"Site Map",dateuploaded :"10-May-2019" ,taskreference:"Field Preparation",uploadedby:"Ryan"},
  ];
    istabs: boolean = true;
    tab1 : boolean = true;
    tab2 : boolean = false;
    modeOptions = ["Email","Call","Text Messages","Notes","Sequences","Linkedin"];
  modeOptionSelected: any;
  //startDate = new Date(1990, 0, 1);
  onModeOptionsSelected(event){
   console.log(event); //option value will be sent as event
  }
  communicationOptions = ["Incoming","Outgoing"];
  communicationOptionSelected: any;
  //startDate = new Date(1990, 0, 1);
  onCommunicationOptionsSelected(event){
   console.log(event); //option value will be sent as event
  }
  
  functiondd(event){
      console.log(event);
      console.log("OK")
      this.activeindex = event;
  }
  redrict(){
      window.open("/#/IBW/sales/projectdashboard", "_blank");
  }
  
  OverviewTab : boolean = false;
  BillingTab : boolean = false;
  DocsTab : boolean = false;
  TasksTab : boolean = false;
  Time_LineTab : boolean = false;
  ExpensesTab : boolean = false;
  SurveyTab : boolean = true;
  AssetsTab : boolean = false;
  SchedueTab : boolean = false;
  
  ShowHideTab: string = "Hide";
  ActiveTab : string = "Active";
  
  gridview:boolean=true;
  mapview:boolean=false;
  kanbanview:boolean=false;
  // bandview:boolean=false;
  review:boolean=false;
  
    /* onResize() {
      console.log(window.innerWidth, window.innerHeight);
      this.showScrolls = window.innerWidth < 1024 ? true : (this.columns.length > 7 ? true : false);
    } */
  
    @ViewChild('myKanban1') myKanban: jqxKanbanComponent;
    //@HostListener('window:resize', ['$event'])
  
    theme: any;
  
    startDate: Date;
  
    public dateTime1: Date;
  
    color = [189, 215, 238, 0];
  
    clientOptions = ["City Homes", "Delpark Homes", "Hydro One", "Sandbank Homes","AECOM"];
      clientOptionSelected: any;
  
      onClientOptionsSelected(event) {
          console.log(event); //option value will be sent as event
      }
  
       projectOptions = ["Port Area Initiative","Basement Flooding","Dome Scanning","Culvert Topographic","Bridge Topographic","Town House Foundation"];
      // projectOptions = ["5-12564","4-24642 ","4-82324","6-10235","2-51152","7-14164"];
      projectOptionSelected: any;
      onProjectOptionsSelected(event) {
          console.log(event); //option value will be sent as event
      }
  
      monthOptions = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  monthOptionSelected: any;
  
  onMonthOptionsSelected(event){
   console.log(event); //option value will be sent as event
  }
  
  bdOptions = ["Rohin", "K.Sai", "Srinu", "P.Siva"];
      bdOptionSelected: any;
  
      onBdOptionsSelected(event) {
          console.log(event); //option value will be sent as event
      }
  
  
  
  
  yearOptions = [2015,2016,2017,2018];
  yearOptionSelected: any;
  
  onYearOptionsSelected(event){
   console.log(event); //option value will be sent as event
  }
  
  
    public openoppurtunityDialog(oppurtunity) {
      let dialogRef = this.dialog.open(AddProjectDialogComponent, {
          data: oppurtunity,
          height: 'auto',
          width: '1000px',
      });
      
  
      dialogRef.afterClosed().subscribe(oppurtunity => {
          if (oppurtunity) {
              // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
          }
      });
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
  
    source: any =
        {
            localData: [
                { id: '1161', state: 'opportunity', info: 'Updates:5', colorCode: 'Green', campaign: 'CTO Campaign', lead: 'Vancouver | Pranab', hex: '#FFFFFF', resourceId: 1 },
                { id: '1645', state: 'parallel_project', info: 'Updates:5', colorCode: 'Red', campaign: 'F2O Campaign', lead: 'Ontario | Rohin', hex: '#E0E0E0', resourceId: 2 },
                { id: '9213', state: 'proposal', info: 'Updates:5', colorCode: 'Grey', campaign: 'TDR Campaign', lead: 'Ottawa | Srinu', hex: '#E0E0E0', resourceId: 3 },
                { id: '6546', state: 'opportunity', info: 'Updates:5', colorCode: 'Blue', campaign: 'CV Campaign', lead: 'British Columbia | Siva', hex: '#FFFFFF', resourceId: 4 },
                { id: '9034', state: 'feedback', info: 'Updates:5', colorCode: 'Green', campaign: 'AA Campaign', lead: 'Calgary | Shiva', hex: '#E0E0E0', resourceId: 5 }
            ],
            dataType: 'array',
            dataFields: this.fields
        };
  
    dataAdapter: any = new jqx.dataAdapter(this.source);
  
  
    resourcesAdapterFunc = (): any => {
        let resourcesSource =
        {
            localData:
                [
                    { id: 0, name: 'No name', image: 'https://www.jqwidgets.com/angular/jqwidgets/styles/images/common.png', common: true },
                    { id: 1, name: 'Blue Stone', image: '../../../assets/img/app/stethoscope.png' },
                    { id: 2, name: 'Axess Corp', image: 'https://www.jqwidgets.com/angular/images/janet.png' },
                    { id: 3, name: 'BGR Pvt Ltd', image: '../../../assets/img/app/manufacturing.jpg' },
                    { id: 4, name: 'SIR', image: 'https://www.jqwidgets.com/angular/images/nancy.png' },
                    { id: 5, name: 'SKY', image: 'https://www.jqwidgets.com/angular/images/Michael.png' },
                    { id: 6, name: 'Margaret Buchanan', image: 'https://www.jqwidgets.com/angular/images/margaret.png' },
                    { id: 7, name: 'Robert Buchanan', image: 'https://www.jqwidgets.com/angular/images/robert.png' },
                    { id: 8, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Laura.png' },
                    { id: 9, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Anne.png' }
                ],
            dataType: 'array',
            dataFields:
                [
                    { name: 'id', type: 'number' },
                    { name: 'name', type: 'string' },
                    { name: 'image', type: 'string' },
                    { name: 'common', type: 'boolean' }
                ]
        };
        let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    }
  
    /* getIconClassName = (): string => {
          switch (this.theme) {
              case 'darkblue':
              case 'black':
              case 'shinyblack':
              case 'ui-le-frog':
              case 'metrodark':
              case 'orange':
              case 'darkblue':
              case 'highcontrast':
              case 'ui-sunny':
              case 'ui-darkness':
                  return 'jqx-icon-plus-alt-white ';
          }
          return 'jqx-icon-plus-alt';
      } */
  
    columns: any[] =
        [
            { text: 'Opportunities', dataField: 'opportunity', maxItems: 5, collapsible: false },
            { text: 'Parallel Project', dataField: 'parallel_project', maxItems: 5, collapsible: false },
            { text: 'Prototype', dataField: 'prototype', maxItems: 5, collapsible: false },
            { text: 'Proposal', dataField: 'proposal', maxItems: 5, collapsible: false },
            { text: 'Final Sequence', dataField: 'final_sequence', maxItems: 5, collapsible: false },
            { text: 'Feedback', dataField: 'feedback', maxItems: 5, collapsible: false },
            { text: 'Real Project', dataField: 'real_project', maxItems: 5, collapsible: false }
        ];
  
      showScrolls:boolean =  this.columns.length > 7 ? true : false;
  
    template: string =
        '<div class="jqx-kanban-item" id="">'
        + '<div class="jqx-kanban-item-color-status"></div>'
        + '</div>';
  
    columnRenderer = (element: any, collapsedElement: any, column: any): void => {
        if (element[0]) {
            if (this.columns.length > this.color[3]) {
                let ids = column.headerElement[0]['id'].split('-');
                document.getElementById(ids[0] + '-column-container-' + ids[3]).style.backgroundColor = 'rgb(' + this.color[0] + ',' + this.color[1] + ',' + this.color[2] + ')';
                this.color[0] += 5;
                this.color[1] += 5;
                this.color[2] += 5;
                this.color[3] += 1;
            }
            let elementHeaderStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
            let collapsedElementHeaderStatus = collapsedElement[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
  
            let columnItems = this.myKanban.getColumnItems(column.dataField).length;
  
            elementHeaderStatus.innerHTML = ' (' + columnItems + ')';
            collapsedElementHeaderStatus.innerHTML = ' (' + columnItems + ')';
        }
    };
  
  
  
    itemRenderer = (element: any, item: any, resource: any): void => {
        //let temp = this.source.localData;
        //for(var i=0; i< temp.length; i++) {
        //if(item['id'] == temp[i]['id']) {
        //console.log(item);
        /* let itemTemplate = '<span><a class="res-name"  id="resname">' + resource.name + '</a></span><br>'
              + '<span class="cap-name">' + item['text'] + '</span><br>'
              + '<span class="lead-name">' + item['tags'] + '</span><br><br>'
              + '<a class="action-class" onClick = "openOppModal(event);">' + item['content'] + '</a>';
              itemTemplate += '<br><br>';
              if(item['className'] == 'Sequence 5' )
              this.hrefid="/#/salesglobal/marketing/comments";
              if(item['className']  == 'Notes 5')
              this.hrefid="/#/salesglobal/marketing/commentsforsequence";
              itemTemplate += '<a class="info-card" href= ' + this.hrefid + ' > ' + item['className'] + '</a>';
              itemTemplate += '<span class="days-class"> 3 days ago </span>';
              itemTemplate += ' <a style="float:right" onClick = "openOppModal(event);" class="jqx-icon-plus-alt jqx-icon-plus-alt-arctic"></a>'; */
  
          let itemTemplate = '<span><a class="res-name"  id="resname" target="_blank" href="/#/salesglobal/marketing/prospects/dashboard">' + resource.name + '</a>&nbsp;&nbsp</span><span class="dot '+item.content+'"></span><br>'
              + '<span class="cap-name">' + item['text'] + '</span><br>'
              + '<span class="lead-name">' + item['tags'] + '</span><br><br>'
              + '<a class="action-class" target="_blank" href="/#/salesglobal/marketing/prospects/dashboard"> Edit </a>';
              itemTemplate += '<span class="days-class"> 3 days ago </span>';
              if(item['className'] == 'Updates:5' ){
                  this.hrefid="/#/salesglobal/marketing/comments";
                  itemTemplate +='<a style="float:right" onClick = "openOppModal(null)" class="jqx-icon-plus-alt jqx-icon-plus-alt-arctic"></a>'
              }
              // if(item['className']  == 'Notes:5')  {
              //     this.hrefid="/#/salesglobal/marketing/commentsforsequence";
              //     itemTemplate +='<a style="float:right" onClick = "openOppModal(null);" class="jqx-icon-plus-alt jqx-icon-plus-alt-arctic"></a>'
              // }
              itemTemplate += '<br><br>';
              //this.hrefid="/#/salesglobal/marketing/commentsforsequence";
              itemTemplate += '<a class="info-card"  > ' + item['className'] + '</a>';
              itemTemplate += '<a class="info-card-next"  >' + 'Leads:2' + '</a>';
              //itemTemplate += ' <a style="float:right" onClick = "openPropModal(event);" class="jqx-icon-plus-alt jqx-icon-plus-alt-arctic"></a>';
              //itemTemplate += '<a class="info-card" href= ' + this.hrefid + ' > ' + item['className'] +
              '  </a>';
  
          element[0].getElementsByClassName('jqx-kanban-item-color-status')[0].innerHTML = itemTemplate;
        //break;
        //}
        //}
    };
  
    myKanbanOnItemAttrMoved(event: any): void {
        var args = event.args;
        console.log(args);
        if (args.newColumn.dataField == 'parallel_project' || args.newColumn.dataField == 'proposal' || args.newColumn.dataField == 'feedback') {
            let temp = args.itemData;
            temp['color'] = "#E0E0E0";
            temp['className'] = "Updates:5";
            delete temp['id'];
            this.myKanban.updateItem(args.itemId, temp);
        } else {
            let temp = args.itemData;
            temp['color'] = "#FFFFFF";
            temp['className'] = "Updates:5";
            delete temp['id'];
            this.myKanban.updateItem(args.itemId, temp);
        }
    };
  
    itemIndex: number = 0;
    myKanbanonColumnAttrClicked(event: any): void {
        console.log("invoked");
        let args = event.args;
        if (args.attribute == 'button') {
            args.cancelToggle = true;
            if (!args.column.collapsed) {
                let colors = ['#f19b60', '#5dc3f0', '#6bbd49', '#dddddd'];
                this.myKanban.addItem({
                    status: args.column.dataField,
                    text: '<input placeholder="(No Title)" style="width: 96%; margin-top:2px; border-radius: 3px;' +
                        'border-color: #ddd; line-height:20px; height: 20px;" class="jqx-input" id="newItem' + this.itemIndex + '" value= "" />',
                    tags: 'new task',
                    color: colors[Math.floor(Math.random() * 4)],
                    resourceId: Math.floor(Math.random() * 4)
                });
  
                let id = `newItem${this.itemIndex}`;
                let myInput = document.getElementById(id);
  
                if (myInput !== null && myInput !== undefined) {
                    myInput.addEventListener('mousedown', (event: any): void => {
                        event.stopPropagation();
                    });
  
                    myInput.addEventListener('mouseup', (event: any): void => {
                        event.stopPropagation();
                    });
  
                    myInput.addEventListener('keydown', (event: any): void => {
                        if (event.keyCode == 13) {
                            let valueElement = `<span>${event.target.value}</span>`;
                            event.target.insertAdjacentHTML('beforebegin', valueElement);
                            event.target.remove();
                        }
                    });
  
                    myInput.focus();
                }
                this.itemIndex++;
            }
        }
    };
  
    itemstr: HTMLElement[] = [];
    str: HTMLElement = <HTMLElement>document.getElementById("new_text");
    copy() {
        this.itemstr.push(this.str)
    }
  
    remove(e) {
        document.getElementById("repeat-" + e).remove();
    }
  
    scrollKanban(side) {
      var eleClass = document.getElementsByClassName('jqx-kanban-column')[0];
      var id = eleClass.id.split('-')[0];
      var ele = document.getElementById(id);
      if(side == 'left')
          ele.scrollLeft += 190;
      else
      ele.scrollLeft -= 190;
  }
  
  }
  
