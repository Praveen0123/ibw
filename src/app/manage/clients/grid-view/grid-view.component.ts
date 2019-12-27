import { Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectorRef, Pipe, PipeTransform, Input } from '@angular/core';
import { Settings } from '../../../app.settings.model';
import { AppSettings } from '../../../app.settings';
import { MatDialog } from '@angular/material';
import { ManageService } from '../../manage.service';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component'
import { Clients } from '../clients.model';
import { ClientsDialogComponent } from '../clients-dialog/clients-dialog.component';
import { ClientsGridColDialogComponent } from '../clients-grid-col-dialog/clients-grid-col-dialog.component';
import { ModalDirective } from 'ngx-bootstrap';
import { DataService } from '../data.service';
import { filter } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { GlobalMethods, Permissions } from 'src/app/shared/GlobalMethods';

@Component({
    selector: 'app-grid-view',
    templateUrl: './grid-view.component.html',
    styleUrls: ['./grid-view.component.scss'],
    encapsulation: ViewEncapsulation.None
  })

//   @Pipe({
//     name: 'splitComma'
//   })
//   export class SplitCommaStringPipe implements PipeTransform {
//     transform(val:string):string {
//       return val.split(',')[0];
//     }
//   }


  export class GridViewComponent implements OnInit {
    tableHead = ["Client Code", "client Name", "Street Address", "City", "Muncipality", "Postal Code", "Phone", "Active (Inactive) Quotes", "Active (Inactive) Projects",
    "Contact(s)", "Email", "Date Created", "Activity", "Flag",  "Status"];
    session: any;
    isGridView: boolean = true;
    clientTypes :any;
    muncipalities: any;
    isGrid: boolean = true;
    isChecked :boolean = false;
    checked = false;
    labelPosition = 'after';
    gridColumns = [];
    permissions: Permissions;
    @ViewChild('deleteModal') public deleteModal: ModalDirective;
    deleteParam: string;
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete client.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change client status.?';
    public popoverFlagTitle: string = 'Confirm Flag Change';
    public popoverFlagMessage: string = 'Are you sure you want to change client flag.?';
    public cancelClicked: boolean = false;

    // @Input('data')
    // set data(data: any) {
    //     if(data!=null)
    //     //do whatever you want with your data here, this data will be passed from parent component
    //     this.allClients = data;
    // }
    filterToggle: boolean = false;
    // constructor() { }

    // ngOnInit() {
    // }

    // tableList: Object[] = [
    //   { intCompanyId: 1, companyName: 'Asterix Healtcare Ltd', contactPerson: 'Henry Dan', contactNumber: '1-604-555-5555', timeline: '2/6', Location: 'Vancouver(CA)', Industry: 'Healthcare', prospects: '3' },
    //   { intCompanyId: 2, companyName: 'ACE Financial Ltd', contactPerson: 'Paul Ray', contactNumber: '1-284-295-5682', timeline: '4/6', Location: 'British Columbia(CA)', Industry: 'Finance', prospects: '4' },
    //   { intCompanyId: 3, companyName: 'DYN Infrastructures', contactPerson: 'Steven Kell', contactNumber: '1-334-206-5632', timeline: '3/6', Location: 'Ontario(CA)', Industry: 'Infrastructure', prospects: '5' }
    // ];
    filterForm: FormGroup;
    public allClients=[];
    public searchText: string;
    public page: any;
    public settings: Settings;
    public selectedAll : any;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        private manageService: ManageService, private dataservice: DataService, 
         private _fb: FormBuilder,  public _downloadExcelService : DownloadExcelService, 
         private changeDetectorRefs: ChangeDetectorRef, private _globalMethods:GlobalMethods) {
            this.filterForm = this._fb.group({
                'clientTypeID': [null],
                'clientMuncipalityID': [null],
                'clientbtStatus': [null],
                'clientDateType': [null],
                'fromDate': [{value: null, disabled: true}],
                'toDate':[{value: null, disabled: true}],
                'keyword':[null],
                'clientbtFlag':[false]
            });
        this.settings = this.appSettings.settings;
        this.session = JSON.parse(localStorage.getItem("userloginsession"));

    //     if(this.dataservice.getData() !== null){
    //      this.dataservice.getData().subscribe(result=>{
    //         this.allClients = result;
    //     });
    // }
    }

    clients = [];
    ngOnInit() {
        this.getclients();
        this.getClientTypes();
        this.getMuncipalities();
        this.getGridColumns();
        this.permissions = this._globalMethods.checkPermissions('Manage clients','Manage');
        console.log("permissions:",this.permissions);
    }

    getMuncipalities(){
        this.manageService.GetMuncipalities().subscribe(
            data => {
                this.muncipalities = data['Data'];
            }
        );
    }


      
    getGridColumns(){
        this.manageService.GetGridColumns(this.session['UserDetails'].int_user_id, 'Manage_clients').subscribe(data => {
                this.gridColumns = data['Data'];
            }
        );

    }

    // InsertGridColumns(tableHead, userID, screenName){
    //     tableHead.push('Manager clients');
    //     tableHead.push(String(this.session['UserDetails'].int_user_id));
    //     this.manageService.InsertGridColumns(tableHead).subscribe(data => {
    //         this.getGridColumns();
    //     });
    // }

    ResetClients(){
        this.getclients();
        this.filterForm.reset();
    }

    excelData : any[]
    exportAsExcel(){
        console.log(this.allClients,'Whole Data');
        this.excelData = [];
        this.allClients.forEach(element => {
            this.excelData.push({
                'Client Code': element['clientCode'], 'Client Name' : element['clientName'], 'Client Type' : element['clientType'], 'Email': element['clientEmail'],
                 'Phone': element['clientPhone'], 'Country' : element['clientCountry'], 'State' : element['clientState'], 'City': element['clientCity'],
                 'Muncipality': element['clientMuncipality'], 'Postal Code': element['clientZip'], 'Street Address' : element['clientStreetAddress'],
                 'Date Created': element['createdDate'], 'Activity Date': element['activityDate'], 'Flag': element['clientbtFlag']? 'True':'False', 'Status': element['clientbtStatus']? 'Active':'Inactive'
            })
        });
        console.log(this.excelData)
        this._downloadExcelService.exportAsExcelFile(this.excelData,'Download CSV')
    }

    public opengridColDialog(lead) {
        let dialogRef = this.dialog.open(ClientsGridColDialogComponent, {
            data: lead,
            height: 'auto',
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(lead => {
            this.getGridColumns();
        });
    }

    getClientTypes(){
        this.manageService.GetClientTypes().subscribe(
          data => {
             // this.leads = leads.slice(0,8);
             this.clientTypes = data['Data'];
          }
      );
      }

      scrollTable(side)
      {
          var table = document.getElementById('divTable');
          if(side=='left'){
              table.scrollLeft += 550;
          }
          else{
            table.scrollLeft -= 550;
          }
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
                        console.log('datee:', mainFilteredData);
                        mainFilteredData = mainFilteredData.filter(x => new Date(x.createdDate) >= values['fromDate'] && new Date(x.createdDate) <= values['toDate']);
                        console.log("fromdate:",values['fromDate'],  "todate:", values['toDate']);
                        }
                    }
                    if(values['clientDateType'] == "2"){
                        if(values['fromDate'] != null && values['toDate'] != ""){
                        mainFilteredData = mainFilteredData.filter(x => new Date(x.activityDate) >= values['fromDate'] && new Date(x.activityDate) <= values['toDate']);
                        console.log("fromdate:",values['fromDate'],  "todate:", values['toDate']);
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
                        return JSON.stringify(item).toLowerCase().includes(values['keyword'].toLowerCase());
                    });
                }
                 this.allClients = mainFilteredData;
                // this.data = mainFilteredData;
                }
                // if(values['status'] == null && values['permissionLevel'] == null && values['args'] == null){
                // }
                else {
                    mainFilteredData = this.allClients;
                }
                this.allClients = mainFilteredData;
                //this._downloadExcelService.exportAsExcelFile(mainFilteredData,'Download CSV')
            },
            error => {
                console.log(error);
            })
    }

    colorOptions = ["Green", "Blue", "Gray", "Red"];
    colorOptionSelected: any;

    onColorOptionsSelected(event) {
    }
    
    prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
    prospectOptionSelected: any;

    onProspectOptionsSelected(event) {
    }

    managerOptions = ["Dwayne", "Dave"];
    managerOptionSelected: any;

    onManagerOptionsSelected(event) {
    }

    locationOptions = ["Ontario", "Ottawa", "Vancouver", "New york", "Las Vegas", "Copenhagen", "Aarhus"];
    locationOptionSelected: any;
    onLocationOptionsSelected(event){
    }
    
    
    public getclients() {
        this.manageService.getAllClients().subscribe(
            data => {
               this.allClients = data['Data'];
               console.log(this.allClients)
            }
        );
    }

    // public addlead(lead) {
    //     this.manageService.addlead(lead).subscribe(lead => this.getclients());
    // }
    // public updatelead(lead) {
    //     this.manageService.updatelead(lead).subscribe(lead => this.getclients());
    // }
    // public deletelead(lead) {
    //     this.manageService.deletelead(lead.id).subscribe(lead => this.getclients());
    // }


    public onPageChanged(event) {
        this.page = event;
        this.getclients();
        if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
        }
        else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }

    public openleadDialog(data) {
        let dialogRef = this.dialog.open(ClientsDialogComponent, {
            data: data,
            height: 'auto',
            width: '850px',
        });

        dialogRef.afterClosed().subscribe(data => {
            this.getclients();
        });
    }

    //For delete confirmation modal
    deleteModalToggle(value) {
        if (value == null) {
            this.deleteModal.hide();
        }
        else {
            this.deleteParam = "";
            this.deleteParam = value;
            this.deleteModal.show();
        }
    }

    deleteClient() {
        var values = [{ clientID: this.deleteParam }]
        this.manageService.deleteClient(values[0]).subscribe(
            data => {
                if (data['Status'] == true) {
                    this.deleteModal.hide();
                    this.getclients();
                }
                else {
                    this.deleteModal.hide();
                }
            },
            error => {
                console.log(error);
            }
        )
    }

    ChangeClientFlag(data) {
        data.clientbtFlag = !data.clientbtFlag;
        this.manageService.ChangeClientFlag(data).subscribe(
            data => {
                    this.getclients();
            },
            error => {
                console.log(error);
            }
        )
    }

    changeClientStatus(data){
        data.clientbtStatus = !data.clientbtStatus;
        this.manageService.ChangeClientStatus(data).subscribe(
            data => {
                    this.getclients();
            },
            error => {
                console.log(error);
            }
        )
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

    selectAll() {
        for (var i = 0; i < this.allClients.length; i++) {
            this.allClients[i].selected = this.selectedAll;
        }
    }

    checkIfAllSelected() {
        this.selectedAll = this.allClients.every(function(item:any) {
            return item.selected == true;
        })
    }


    public changedatetype(value){
        if(value) {
          this.filterForm.controls['fromDate'].enable();
          this.filterForm.controls['toDate'].enable();
        } else {
          this.filterForm.controls['fromDate'].disable();
          this.filterForm.controls['toDate'].disable();
        }
      }

      public openHelpVideo(url){
      
    }

  }