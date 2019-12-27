import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { Settings } from '../../../app.settings.model';
import { AppSettings } from '../../../app.settings';
import { Router } from '@angular/router';
import { ManageService } from '../../manage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientsDialogComponent } from '../clients-dialog/clients-dialog.component';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
declare var google: any;

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers:[GoogleMapsComponent]
  })

  export class MapViewComponent implements OnInit {

    @ViewChild('AgmMap') agmMap: AgmMap;

    public pointers: any[] = [];
    public lat: number = 56.130367;
    public lng: number = -106.346771; 
    isGridView: any;
    filterToggle = false;
    clientTypes :any;
    muncipalities: any;
    public allClients=[];
    filterForm: FormGroup;
    public settings: Settings;

  ngOnInit(){
    this.getclients();
    this.getClientTypes();
    this.getMuncipalities();
   
  }

  public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT,
  };

  public getclients() {
    this.manageService.getAllClients().subscribe(
        data => {
           this.allClients = data['Data'];
           let postalCodes = [];
           for(var i=0; i<this.allClients.length; i++){
            postalCodes.push({"label":this.allClients[i]['clientName'], "postalCode": this.allClients[i]['clientZip']});
           }
            console.log("postalcodes:", postalCodes);
            this.getLatLang(postalCodes);
        }
    );
  }

  getLatLang(addressArray) {
    this.pointers = [];
    if(!addressArray.length)
      return;
    this.manageService.getLatLangPositions(addressArray).subscribe(responseList => {
      for(let i=0; i< responseList.length; i++) {
        if(responseList[i]['response']['status'] == 'OK') {
          let coords = responseList[i]['response']['results'][0]['geometry']['location'];
          coords['label'] = responseList[i]['label'];
          this.pointers.push(coords);
        }
      }
    });
  }

  onMouseOver(infoWindow, gm) {
    /* if (gm.lastOpen != null) {
        gm.lastOpen.close();
    } */
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }
  
  onMouseOut(infoWindow, gm) {
    if (gm.lastOpen != null) {
        gm.lastOpen.close();
    }
  }

  getMuncipalities(){
    this.manageService.GetMuncipalities().subscribe(
        data => {
            this.muncipalities = data['Data'];
        }
    );
}

getClientTypes(){
    this.manageService.GetClientTypes().subscribe(
      data => {
         // this.leads = leads.slice(0,8);
         this.clientTypes = data['Data'];
      }
  );
  }

  ResetClients(){
    this.pointers = [];
    this.getclients();
    this.filterForm.reset();
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
                    mainFilteredData = mainFilteredData.filter(x => new Date(x.createdDate) >= values['fromDate'] && new Date(x.createdDate) <= values['toDate']);
                    }
                }
                if(values['clientDateType'] == "2"){
                    if(values['fromDate'] != null && values['toDate'] != ""){
                    mainFilteredData = mainFilteredData.filter(x => new Date(x.activityDate) >= values['fromDate'] && new Date(x.activityDate) <= values['toDate']);
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
            let postalCodes = [];
            for(var i=0; i<this.allClients.length; i++){
             postalCodes.push({"label":this.allClients[i]['clientName'], "postalCode": this.allClients[i]['clientZip']});
            }
             this.getLatLang(postalCodes);
        },
        error => {
            console.log(error);
        })
}
    @Input('markerClickable') clickable: boolean = true;
    @Input() openInfoWindow: boolean = true;
  
    constructor(public appSettings: AppSettings,private _router:Router,public dialog: MatDialog, private manageService: ManageService,   private _fb: FormBuilder) {
      this.settings = this.appSettings.settings;
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
   
    }


    /* public zoomControlOptions: any = {
      style: google.maps.ControlPosition.small,
      position: google.maps.ControlPosition.TOP_LEFT
    }; */
  
    openWindow(e) {
      window.open("/#/IBW/manage/project-dashboard", "_blank");
      // this._router.navigateByUrl("/IBW/sales/projects");
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