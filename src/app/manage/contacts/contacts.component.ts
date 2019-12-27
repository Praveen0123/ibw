import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContactsDialogComponent } from './contacts-dialog/contacts-dialog.component';
import { MatDialog } from '@angular/material';
import { HelpVideoDialogComponent } from '../../shared/help-video-dialog/help-video-dialog.component';
import { ContactsGridColDialogComponent } from './contacts-grid-col-dialog/contacts-grid-col-dialog.component';
import { ClientsDialogComponent } from '../clients/clients-dialog/clients-dialog.component';
//import { AddOppurtunityDialogComponent } from 'src/app/crm/add-oppurtunity-dialog/add-oppurtunity-dialog.component';



@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    contacts = [
       {status:true,client:"City Homes",clientName:"Hydro One",quotes:2,projects:15,name:"Isaac Walker" ,designation:"Project Manager" ,phone:"(416) 920-5100" ,email:"isaac@gmail.com" ,region:"Ontario" ,city:"Toronto" ,postcode:"M1R 0E9.",primarycontact:"Yes" ,billingcontact:"Yes",createddate:"2019-04-25",lastActivityddate:'2019-04-30'},
       {status:false,client:"Delpark",clientName:"Valleymede Homes",quotes:5,projects:25,name:"Henry Wade" ,designation:"HR Manager" ,phone:"(516) 920-5100" ,email:"henry@gmail.com" ,region:"Ontario" ,city:"Windsor" ,postcode:"M3C 0C1",primarycontact:"Yes" ,billingcontact:"Yes",createddate:"2019-05-05",lastActivityddate:'2019-05-30'},
       {status:true,client:"Hydro One",clientName:"Sandbank Homes",quotes:4,projects:12,name:"Hilda Sweden" ,designation:"CAD Supervisor " ,phone:"(616) 412-1100" ,email:"hilda@gmail.com" ,region:"Ontario" ,city:"Hamilton" ,postcode:"M3C 0C2",primarycontact:"No" ,billingcontact:"Yes",createddate:"2019-04-20",lastActivityddate:'2019-04-30'},
       {status:false,client:"Sandbank Homes",clientName:"AECOM",quotes:3,projects:16,name:"Marco Wilson" ,designation:"Field Assistant" ,phone:"(856) 920-5100" ,email:"marco@gmail.com" ,region:"Ontario" ,city:"Cambridge" ,postcode:"M3C 0E4",primarycontact:"No" ,billingcontact:"Yes",createddate:"2019-05-10",lastActivityddate:'2019-05-20'},
       {status:true,client:"NM Homes",clientName:"Delpark Homes",quotes:7,projects:24,name:"Martin Zeller" ,designation:"Financial Manager" ,phone:"(426) 920-5100" ,email:"martin@gmail.com" ,region:"Ontario" ,city:"Kitchener" ,postcode:"M3C 0E1	",primarycontact:"Yes" ,billingcontact:"Yes",createddate:"2019-05-02",lastActivityddate:'2019-05-30'},
       {status:true,client:"City Pickering",clientName:"City Homes",quotes:8,projects:18,name:"Jacob White" ,designation:"H&S Manager" ,phone:"(544) 920-5100" ,email:"jacob@gmail.com" ,region:"Ontario" ,city:"Brampton" ,postcode:"M3C 0C3",primarycontact:"Yes" ,billingcontact:"Yes",createddate:"2019-05-12",lastActivityddate:'2019-05-22'}
    ];
    clientnameOptions=["City Homes", "Delpark Homes", "Hydro One", "Sandbank Homes","AECOM"];
    contactnameOptions=["Isaac Walker","Hilds Sweden","Henry Wade","Marco Wilson","Martin Zeller"];
   
    constructor(public dialog: MatDialog, private ref: ChangeDetectorRef,
    public helpdialogRef: MatDialog){

   }
    ngOnInit() {
        // this.getleads();
    }
 
    isGridView :boolean =true;

    municipalityOptions=["Toronto","Hamilton","Brampton","Windsor","Kitchener"]
    statusOptions=["Any","Active","Inactive"]
    
    public opengridColDialog(lead) {
        let dialogRef = this.dialog.open(ContactsGridColDialogComponent, {
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

    public openHelpVideo(id) {
        let dialogRef = this.helpdialogRef.open(HelpVideoDialogComponent, {
            data: id,
            height: 'auto',
            width: '850px'
        });
    
        dialogRef.afterClosed().subscribe(data => {
        });
    }
    filterToggle:boolean=false;
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
    public openoppurtunityDialog(oppurtunity) {
        let dialogRef = this.dialog.open(ContactsDialogComponent, {
            data: oppurtunity,
            height: 'auto',
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(oppurtunity => {
            if (oppurtunity) {
                // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
            }
        });
    }

    public openAddClientDialog(oppurtunity) {
        let dialogRef = this.dialog.open(ClientsDialogComponent, {
            data: oppurtunity,
            height: 'auto',
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(oppurtunity => {
            if (oppurtunity) {
                // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
            }
        });
    }

    public openConfirmDialog(action,value,name) {
        let dialogRef = this.dialog.open(ContactsDialogComponent, {
            data:{'action':action,'value':value,'name':name}
        });
  
        dialogRef.afterClosed().subscribe(account => {
            this.dialog.closeAll();
            return account;
        });
    }
    public opendocsupload(id) {
        console.log("jkhksbdjk");
        let dialogRef = this.dialog.open(ContactsDialogComponent, {
            data: id,
            height: 'auto',
            width: '600px'
            
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }
}
