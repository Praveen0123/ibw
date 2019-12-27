import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { MatDialog } from '@angular/material';
import { Settings } from '../../app.settings.model';
import { FormControl } from '@angular/forms';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router'
import { ManageService } from '../manage.service';
import { QuotesDialogComponent } from './quotes-dialog/quotes-dialog.component';
import { Clients } from '../clients/clients.model';
import { HelpVideoDialogComponent } from '../../shared/help-video-dialog/help-video-dialog.component';
import { QuotesGridColDialogComponent } from './quotes-grid-col-dialog/quotes-grid-col-dialog.component';
import { ClientsDialogComponent } from '../clients/clients-dialog/clients-dialog.component';

//import { GoogleMapsComponent } from 'src/app/analytics/dashboard/google-maps/google-maps.component'


@Component({
  selector: 'app-quotes',
  templateUrl: './Quotes.component.html',
  styleUrls: ['./Quotes.component.scss'],
  //providers:[GoogleMapsComponent]
})
export class QuotesComponent implements OnInit {

    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        private manageService: ManageService,
        public helpdialogRef: MatDialog) {
        this.settings = this.appSettings.settings;
    }


  istabs: boolean = true;
    tab1: boolean = true;
    tab2: boolean = false;
    lead: any;

    isGridView : boolean = true;
    // isGrid: boolean = true;

    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete lead.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change lead status.?';
    public cancelClicked: boolean = false;

    gridview: boolean = true;
    mapview: boolean = false;
    kanbanview: boolean = false;
    filterToggle: boolean = false;

    public openHelpVideo(id) {
        let dialogRef = this.helpdialogRef.open(HelpVideoDialogComponent, {
            data: id,
            height: 'auto',
            width: '850px'
        });
    
        dialogRef.afterClosed().subscribe(data => {
        });
    }

    public openClientModal(id) {
        let dialogRef = this.helpdialogRef.open(ClientsDialogComponent, {
            data: id,
            height: 'auto',
            width: '850px'
        });
    
        dialogRef.afterClosed().subscribe(data => {
        });
    }

    surveyOptions = ["Reference Plan","Topo","SRPR","Builders","Site Plan","Lot Line Staking","Advice/Consultation","Other"];
    hearOptions = ["Website","Social Media (Facebook, Twitter etc)","Referral (Friend, Family, Etc)","Google","Previously a Client","Other"]
    stageOptions = ["Qualified","Phone Call","First Meeting","Scope","Proposal","PO#","Hold","Declined","Expired","Archived"]
    bdmsOptions = ["Rohin Sama Reddy","Siva kodali","Srinu Lli","Siva Prakash"]
    ClientOptions = ["City Homes","Delpark Homes","Hydro One","Sandbank Homes","Valleymede Homes"]
    quoteAdminOptions =["James Smith","Maria Garcia","Maria Rodriguez","Maria Hernandez","Mary Smith","Robert Hernandez","Michael Rodriguez"]
    accountManagerOptions =["Dwayne","Dave"]
    municipalityOptions=["Toronto","Hamilton","Brampton","Windsor","Kitchener"]
    potentialOptions =["Fast","Moderate","Slow","Stagnant"]
    progressOptions =["Received","Qualified","Quoted","Decided"]
    statusOptions=["Any","Active","Inactive"]
    typeOfDates=["Received Date","Qualified Date","Quoted Date","Decision Date"]
    projectTypes=["Construction","Engineering","Legal"]

    value:number=0;
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
    
    public opengridColDialog(lead) {
        let dialogRef = this.dialog.open(QuotesGridColDialogComponent, {
            data: lead,
            height: 'auto',
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(lead => {
            if (lead) {
            }
        });
    }

    

    public leads: Clients[];
    public searchText: string;
    public page: any;
    public settings: Settings;
    public selectedAll: any;
   

    clients = [
        { status: "Active", stage: "Qualified", subject: "Reference Plan", duedate: "25-May-2019", value: "1200", docs: 4, odds: 1, clientName: "City Homes", region: "Isaac Walker", city: "Ontario", postcode: "M1R 0E9.", contactperson: "Dwayne", phone: "(416) 920-5100", quotedamt: "5350", awardedamt: "4321" },
        { status: "Active", stage: "Scope", subject: "Topo", duedate: "25-May-2019", value: "1000", docs: 4, odds: 1, clientName: "Delpark Homes", region: "Henry Wade", city: "Toranto", postcode: "M1R 0E9.", contactperson: "Dave", phone: "(256) 920-2638", quotedamt: "8684", awardedamt: "7212" },
        { status: "Active", stage: "Proposal", subject: "SRPR", duedate: "25-May-2019", value: "1500", docs: 4, odds: 1, clientName: "Hydro One", region: "Martin Zeller", city: "Lake Louise", postcode: "M1R 0E9.", contactperson: "Dwayne", phone: "(856) 659-1542", quotedamt: "5221", awardedamt: "3464" },
        { status: "Active", stage: "Hold", subject: "Builders", duedate: "25-May-2019", value: "1350", docs: 4, odds: 1, clientName: "Sandbank Homes", region: "Jacob White", city: "Edmonton", postcode: "M1R 0E9.", contactperson: "Dave", phone: "(586) 365-4856", quotedamt: "3552", awardedamt: "2352" },
        { status: "Active", stage: "Expired", subject: "Site Plan", duedate: "25-May-2019", value: "1100", docs: 4, odds: 1, clientName: "Valleymede Homes", region: "Mark Daves", city: "Brooks", postcode: "M1R 0E9.", contactperson: "Dave", phone: "(236) 949-3648", quotedamt: "5841", awardedamt: "2154" },
        { status: "Active", stage: "PO", subject: "Lot Line Staking", duedate: "25-May-2019", value: "1250", docs: 4, odds: 1, clientName: "AECOM", region: "John William", city: "Vancouver", postcode: "M1R 0E9.", contactperson: "Dwayne", phone: "(326) 958-1234", quotedamt: "6215", awardedamt: "4313" },
    ];
    ngOnInit() {
        this.getleads();
    }


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
            data: 'Add RFQ',
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
