import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { FormControl } from '@angular/forms';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Clients } from '../../clients/clients.model';
import { ManageService } from '../../manage.service';
import { QuotesDialogComponent } from '../quotes-dialog/quotes-dialog.component';
import { ClientsDialogComponent } from '../../clients/clients-dialog/clients-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';

export interface clients {
    Existing_Project:string;
    SOW: number;
    sites: number;
    status: string;
    timeline: number;
    quoteNumber: string;
    date: string;
    quoteAdmin: string;
    projectmanager:string;
    project:string;
    stage: string;
    subject:string;
    duedate:string;
    value:number;
    docs:number;
    odds:number;
    clientName:string;
    region:string;
    city:string;
    postalcode:string;
    contactperson:string;
    phone:string;
    quotedamt:number;
    awardedamt:number;
    daysOld:number;
  }
  const clientsdata: clients[] = [
    { daysOld:20,Existing_Project:"NO",project:"-",SOW:4,sites:2,status: "Active",timeline:2,quoteNumber:"Q-190001",projectmanager:"Dwayne",date:"2019-05-25",quoteAdmin:"James Smith", stage: "Qualified", subject: "Construction", duedate: "25-May-2019", value: 1200, docs: 4, odds: 1, clientName: "Toronto Towers", region: "Isaac Walker", city: "Ontario", postalcode: "M1R 0E9.", contactperson: "Dwayne", phone: "(416) 920-5100", quotedamt: 5350, awardedamt: 4321 },
    { daysOld:59,Existing_Project:"YES",project:"5-12564",SOW:6,sites:3,status: "Active",timeline:4,quoteNumber:"Q-190002",projectmanager:"Dave",date:"2019-05-25",quoteAdmin:"Mary Garcia", stage: "Scope", subject: "Engineering", duedate: "25-May-2019", value: 1000, docs: 3, odds: 1, clientName: "Delpark Homes", region: "Henry Wade", city: "Ottawa", postalcode: "M1R 0E9.", contactperson: "Dave", phone: "(256) 920-2638", quotedamt: 8684, awardedamt: 7212 },
    { daysOld:14,Existing_Project:"NO",project:"-",SOW:4,sites:1,status: "Active",timeline:3,quoteNumber:"Q-190003",projectmanager:"Dwayne",date:"2019-05-25",quoteAdmin:"Maria Rodriguez", stage: "Proposal", subject: "Legal", duedate: "25-May-2019", value: 1500, docs: 2, odds: 1, clientName: "Hydro One", region: "Martin Zeller", city: "Mississauga", postalcode: "M1R 0E9.", contactperson: "Dwayne", phone: "(856) 659-1542", quotedamt: 5221, awardedamt: 3464 },
    { daysOld:39,Existing_Project:"NO",project:"-",SOW:3,sites:2,status: "Active",timeline:7,quoteNumber:"Q-190004",projectmanager:"Dave",date:"2019-05-25",quoteAdmin:"Mary Smith", stage: "Hold", subject: "Construction", duedate: "25-May-2019", value: 1350, docs: 5, odds: 1, clientName: "Sandbank Homes", region: "Jacob White", city: "Brampton", postalcode: "M1R 0E9.", contactperson: "Dave", phone: "(586) 365-4856", quotedamt: 3552, awardedamt: 2352 },
    { daysOld:37,Existing_Project:"NO",project:"-",SOW:5,sites:3,status: "Active",timeline:8,quoteNumber:"Q-190005",projectmanager:"Dave",date:"2019-05-25",quoteAdmin:"David  Rodriguez", stage: "Expired", subject: "Legal", duedate: "25-May-2019", value: 1100, docs: 6, odds: 1, clientName: "Valleymede Homes", region: "Mark Daves", city: "Hamilton", postalcode: "M1R 0E9.", contactperson: "Dave", phone: "(236) 949-3648", quotedamt: 5841, awardedamt: 2154 },
    { daysOld:53,Existing_Project:"YES",project:"4-82324",SOW:6,sites:2,status: "Active",timeline:4,quoteNumber:"Q-190006",projectmanager:"Dwayne",date:"2019-05-25",quoteAdmin:"Maria Hernandez", stage: "PO", subject: "Engineering", duedate: "25-May-2019", value: 1250, docs: 1, odds: 1, clientName: "AECOM", region: "John William", city: "Mississauga", postalcode: "M1R 0E9.", contactperson: "Dwayne", phone: "(326) 958-1234", quotedamt: 6215, awardedamt: 4313 },
];
@Component({
    selector: 'app-grid-view',
    templateUrl: './grid-view.component.html',
    styleUrls: ['./grid-view.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class GridViewComponent implements OnInit {
    istabs: boolean = true;
    tab1: boolean = true;
    tab2: boolean = false;
    lead: any;
    // isGrid: boolean = true;
    clients = clientsdata;
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete lead.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change lead status.?';
    public cancelClicked: boolean = false;

    gridview: boolean = true;
    mapview: boolean = false;
    kanbanview: boolean = false;
    filterToggle: boolean = false;
    paramId: number;

    public openClientModal(id) {
        let dialogRef = this.dialog.open(ClientsDialogComponent, {
            data: id,
            height: 'auto',
            width: '850px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }

    GridView() {
        this.gridview = true;
        this.mapview = false;
        this.kanbanview = false;

    }
    MapView() {
        this.gridview = false;
        this.mapview = true;
        this.kanbanview = false;
    }
    KanbanView() {
        this.gridview = false;
        this.mapview = false;
        this.kanbanview = true;
    }
    // constructor() { }

    // ngOnInit() {
    // }

    // tableList: Object[] = [
    //   { intCompanyId: 1, companyName: 'Asterix Healtcare Ltd', contactPerson: 'Henry Dan', contactNumber: '1-604-555-5555', timeline: '2/6', Location: 'Vancouver(CA)', Industry: 'Healthcare', prospects: '3' },
    //   { intCompanyId: 2, companyName: 'ACE Financial Ltd', contactPerson: 'Paul Ray', contactNumber: '1-284-295-5682', timeline: '4/6', Location: 'British Columbia(CA)', Industry: 'Finance', prospects: '4' },
    //   { intCompanyId: 3, companyName: 'DYN Infrastructures', contactPerson: 'Steven Kell', contactNumber: '1-334-206-5632', timeline: '3/6', Location: 'Ontario(CA)', Industry: 'Infrastructure', prospects: '5' }
    // ];

    public leads: Clients[];
    public searchText: string;
    public page: any;
    public settings: Settings;
    public selectedAll: any;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        private manageService: ManageService,
        public activeRoute : ActivatedRoute) {
        this.settings = this.appSettings.settings;
    }
    
    ngOnInit() {

        this.getleads();
    }
    @ViewChild('ReturnModal') ReturnModal: ModalDirective;

    openReturnModal(): void {
        this.ReturnModal.show();
    }

    hideReturnModal(): void {
        this.ReturnModal.hide();
    }

    projectManager=["Dave","Dwayne"];
    stageManager = ["Qualified","Scope","Proposal","Hold","Expired","PO"];
    colorOptions = ["Green", "Blue", "Gray", "Red"];
    colorOptionSelected: any;

    onColorOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }

    prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR", "SKY"];
    prospectOptionSelected: any;

    onProspectOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }

    managerOptions = ["Dwayne", "Dave"];
    managerOptionSelected: any;

    onManagerOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }

    locationOptions = ["Ontario", "Ottawa", "Vancouver", "New york", "Las Vegas", "Copenhagen", "Aarhus"];
    locationOptionSelected: any;
    onLocationOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }


    public getleads(): void {
        this.leads = null; //for show spinner each time
        this.manageService.getleads().subscribe(
            leads => {
                //this.leads = leads.slice(0,8);
            }
        );
    }

    public addlead(lead: Clients) {
        this.manageService.addlead(lead).subscribe(lead => this.getleads());
    }
    public updatelead(lead: Clients) {
        this.manageService.updatelead(lead).subscribe(lead => this.getleads());
    }
    public deletelead(lead: Clients) {
        this.manageService.deletelead(lead.id).subscribe(lead => this.getleads());
    }


    public onPageChanged(event) {
        this.page = event;
        this.getleads();
        if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
        }
        else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }

    public openleadDialog(lead) {
        let dialogRef = this.dialog.open(QuotesDialogComponent, {
            data: lead,
            height: 'auto',
            width: '1050px',
        });

        dialogRef.afterClosed().subscribe(lead => {
            if (lead) {
                // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
            }
        });
    }

    public openConfirmDialog(action, value, name) {
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: { 'action': action, 'value': value, 'name': name }
        });

        dialogRef.afterClosed().subscribe(account => {
            this.dialog.closeAll();
            return account;
        });
    }

    selectAll() {
        for (var i = 0; i < this.leads.length; i++) {
            this.leads[i].selected = this.selectedAll;
        }
    }

    checkIfAllSelected() {
        this.selectedAll = this.leads.every(function (item: any) {
            return item.selected == true;
        })
    }
}