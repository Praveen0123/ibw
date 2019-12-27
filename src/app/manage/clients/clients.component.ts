import { Component, OnInit, ViewEncapsulation,  ViewChild} from '@angular/core';
import { ClientsDialogComponent } from './clients-dialog/clients-dialog.component';
import { AppSettings } from '../../app.settings';
import { MatDialog } from '@angular/material';
import { ManageService } from '../manage.service';
import { Settings } from '../../app.settings.model';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { Clients } from './clients.model';
import { ClientsGridColDialogComponent } from './clients-grid-col-dialog/clients-grid-col-dialog.component';
import {GridViewComponent} from './grid-view/grid-view.component'
import { HelpVideoDialogComponent } from '../../shared/help-video-dialog/help-video-dialog.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from './data.service';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers : [GridViewComponent]
})

export class ClientsComponent implements OnInit {

    @ViewChild(GridViewComponent) child:GridViewComponent;

    isGridView: boolean = true;
    filterForm: FormGroup;
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete lead.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change lead status.?';
    public cancelClicked: boolean = false;
    tableList: any;
    filterToggle: boolean = false;
    // constructor() { }

    // ngOnInit() {
    // }

    // tableList: Object[] = [
    //   { intCompanyId: 1, companyName: 'Asterix Healtcare Ltd', contactPerson: 'Henry Dan', contactNumber: '1-604-555-5555', timeline: '2/6', Location: 'Vancouver(CA)', Industry: 'Healthcare', prospects: '3' },
    //   { intCompanyId: 2, companyName: 'ACE Financial Ltd', contactPerson: 'Paul Ray', contactNumber: '1-284-295-5682', timeline: '4/6', Location: 'British Columbia(CA)', Industry: 'Finance', prospects: '4' },
    //   { intCompanyId: 3, companyName: 'DYN Infrastructures', contactPerson: 'Steven Kell', contactNumber: '1-334-206-5632', timeline: '3/6', Location: 'Ontario(CA)', Industry: 'Infrastructure', prospects: '5' }
    // ];
    // private data:any;
    public leads: Clients[];
    public searchText: string;
    public page: any;
    public settings: Settings;
    public selectedAll : any;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        private manageService: ManageService,  private _fb: FormBuilder, private dataservice:DataService) {
        this.settings = this.appSettings.settings;

        //Add User Form
        // this.filterForm = this._fb.group({
        //     'clientTypeID': [null],
        //     'clientMuncipalityID': [null],
        //     'clientbtStatus': [null],
        //     'clientDateType': [null],
        //     'fromDate': [null],
        //     'toDate':[null],
        //     'keyword':[null],
        //     'clientbtFlag':[null]
        // });
    }
    clientTypes :any;
    muncipalities: any;
    ngOnInit() {
        // this.getleads();
        this.getClientTypes();
        this.getMuncipalities();
    }

    getClientTypes(){
        this.manageService.GetClientTypes().subscribe(
          data => {
             // this.leads = leads.slice(0,8);
             this.clientTypes = data['Data'];
          }
      );
      }
    getMuncipalities(){
        this.manageService.GetMuncipalities().subscribe(
            data => {
                this.muncipalities = data['Data'];
            }
        );
    }

    //Filter client grid
    filterBy(values) {
        var mainFilteredData = [];
        this.manageService.getAllClients().subscribe(
            data => {
                mainFilteredData = data['Data'];
                if (values['clientTypeID'] != null || values['clientMuncipalityID'] != null || values['clientbtStatus'] != null || values['clientDateType'] != null || 
                    values['createdDate'] != null || values['activityDate'] != null || values['keyword'] != null || values['clientbtFlag'] != null) {
                    if (values['clientTypeID'] != null) {
                        mainFilteredData = mainFilteredData.filter(x =>
                            x.clientTypeID == values['clientTypeID']
                        );
                        console.log(mainFilteredData)
                    }
                    if (values['clientMuncipalityID'] != null) {
                        mainFilteredData = mainFilteredData.filter(x =>
                            x.clientMuncipalityID == values['clientMuncipalityID']
                        );
                        console.log(mainFilteredData)
                    }
                    if (values['clientbtStatus'] == true || values['clientbtStatus'] == false) {
                        mainFilteredData = mainFilteredData.filter(x => x.clientbtStatus == values['clientbtStatus']);
                        console.log(mainFilteredData);
                    }

                    if (values['clientDateType'] != null && values['clientDateType'] != "") {
                        if(values['clientDateType'] == "1"){
                        if(values['fromDate'] != null && values['toDate'] != ""){
                        mainFilteredData = mainFilteredData.filter(x => x.createdDate >= values['fromDate'] && x.createdDate <= values['toDate']);
                        }
                    }
                    if(values['clientDateType'] == "2"){
                        if(values['fromDate'] != null && values['toDate'] != ""){
                        mainFilteredData = mainFilteredData.filter(x => x.activityDate >= values['fromDate'] && x.activityDate <= values['toDate']);
                        }
                    }
                }
                if (values['clientbtFlag'] != null) {
                    mainFilteredData = mainFilteredData.filter(x =>
                        x.clientbtFlag == values['clientbtFlag']
                    );
                    console.log(mainFilteredData)
                }
                if (values['keyword'] != null) {
                    mainFilteredData = mainFilteredData.filter(function (item) {
                        return JSON.stringify(item).toLowerCase().includes(values['keyword']);
                    });
                }
                 this.dataservice.setData(JSON.stringify(mainFilteredData));
                // this.data = mainFilteredData;
                }
                // if(values['status'] == null && values['permissionLevel'] == null && values['args'] == null){
                // }
                else {
                    mainFilteredData = this.tableList;
                    console.log(this.tableList);
                }
                this.tableList = mainFilteredData;
                //this._downloadExcelService.exportAsExcelFile(mainFilteredData,'Download CSV')
            },
            error => {
                console.log(error);
            })
    }

    colorOptions = ["Green", "Blue", "Gray", "Red"];
    colorOptionSelected: any;

    onColorOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    
    prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
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
    onLocationOptionsSelected(event){
    console.log(event); //option value will be sent as event
    }

    public onPageChanged(event) {
        this.page = event;
        // this.getleads();
        if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
        }
        else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }

    public openleadDialog(lead) {
        let dialogRef = this.dialog.open(ClientsDialogComponent, {
            data: lead,
            height: 'auto',
            width: '850px',
        });

        dialogRef.afterClosed().subscribe(lead => {
            if (lead) {
                // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
            }
        });
       
    }


        public opengridColDialog(lead) {
            let dialogRef = this.dialog.open(ClientsGridColDialogComponent, {
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

    public openConfirmDialog(action,value,name) {
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data:{'action':action,'value':value,'name':name}
        });
    
        dialogRef.afterClosed().subscribe(account => {
            this.dialog.closeAll();
            return account;
        });
    }


    public openHelpVideo(id) {
        let dialogRef = this.dialog.open(HelpVideoDialogComponent, {
            data: id,
            height: 'auto',
            width: '850px'
        });

        dialogRef.afterClosed().subscribe(data => {
        });
    }

    selectAll() {
        for (var i = 0; i < this.leads.length; i++) {
            this.leads[i].selected = this.selectedAll;
        }
    }

    checkIfAllSelected() {
        this.selectedAll = this.leads.every(function(item:any) {
            return item.selected == true;
        })
    }

    
  }