import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { AddNoteDialogComponent } from '../../../shared/add-note-dialog/add-note-dialog.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ProjectGridColDialogComponent } from './review-grid-col-dialog/review-grid-col-dialog.component';


@Component({
  selector: 'app-projectgridview',
  templateUrl: './projectgridview.component.html',
  styleUrls: ['./projectgridview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectgridviewComponent implements OnInit {
  projects = [
      {billed:"25000",unBilled:"10000",isBilled: false, status1: true,clientName:"City Homes",clienttype:"CITYHM",accManager:"Michael",manager:"Dwayne",survey:"3/5",projectname:"5-12564" ,phone:"(416) 920-5100",acivities:"48/80",deliverables:"6/10",actions:"8/10",review:"6/10",schedule:"7",overview:"5",billing:"8",docs:"92",completion:"60%",status:"Active",datecreated:"2019-04-02",duedate:"2019-08-2019",statuss:"Fast",active:"Yes",projecttype:"Legal",startdate:"2019-04-26",completiondate:"2019-05-23"},
      {billed:"21000",unBilled:"13000",isBilled: false, status1: false,clientName:"Delpark Homes",clienttype:"DELHOME",accManager:"Williams", manager:"Dave",survey:"3/6",projectname:"4-24642" ,phone:"(616) 426-6523",acivities:"48/96",deliverables:"6/12",actions:"6/10",review:"7/10",schedule:"3",overview:"6",billing:"4",docs:"110",completion:"50%",status:"Active",datecreated:"2019-04-10",duedate:"2019-05-2019",statuss:"Moderate",active:"No",projecttype:"Engineering",startdate:"2019-04-20",completiondate:"2019-05-27"},
      {billed:"29200",unBilled:"11500",isBilled: true, status1: true, clientName:"Hydro One",clienttype:"HYDRO",accManager:"Michael",manager:"Dwayne",survey:"2/3",projectname:"4-82324" ,phone:"(325) 980-0051",acivities:"32/48",deliverables:"4/6",actions:"8/10",review:"1/10",schedule:"9",overview:"2",billing:"6",docs:"50",completion:"66%",status:"Active",datecreated:"2019-04-12",duedate:"2019-05-16",statuss:"Slow",active:"Yes",projecttype:"Construction",startdate:"2019-05-02",completiondate:"2019-05-25"},
      {billed:"30000",unBilled:"13500",isBilled: true, status1: true, clientName:"Sandbank Homes",clienttype:"SANDHOME",accManager: "John",manager:"Dave",survey:"2/2",projectname:"6-10235" ,phone:"(563) 856-3589",acivities:"32/32",deliverables:"4/4",actions:"3/10",review:"8/10",schedule:"2",overview:"3",billing:"8",docs:"42",completion:"100%",status:"Active",datecreated:"2019-04-08",duedate:"2019-05-20",statuss:"Stagnant",active:"Yes",projecttype:"Internal",startdate:"2019-05-11",completiondate:"2019-05-26"},
      {billed:"27000",unBilled:"17000",isBilled: false, status1: false, clientName:"Valleymede Homes",clienttype:"VALLEY ",accManager:"Williams",manager:"Dwayne",survey:"4/5",projectname:"2-51152" ,phone:"(456) 694-1254",acivities:"64/80",deliverables:"8/10",actions:"5/10",review:"2/10",schedule:"4",overview:"7",billing:"9",docs:"96",completion:"80%",status:"Active",datecreated:"2019-04-21",duedate:"2019-05-21",statuss:"Fast",active:"No",projecttype:"Legal",startdate:"2019-04-18",completiondate:"2019-05-24"},
      {billed:"23000",unBilled:"9000",isBilled: true, status1: true, clientName:"AECOM",clienttype:"AECOM",survey:"3/6",accManager:"John",manager:"Dave",projectname:"7-14164" ,phone:"(312) 785-5522",acivities:"48/96",deliverables:"6/12",actions:"2/10",review:"9/10",schedule:"1/10",overview:"5",billing:"1",docs:"110",completion:"50%",status:"Active",datecreated:"2019-04-29",duedate:"2019-05-25",statuss:"Slow",active:"Yes",projecttype:"Construction",startdate:"2019-05-01",completiondate:"2019-05-23"},
  ];
  
    paramId: any;
    userType: string = "";

    AccountManagers=["Michael","Williams","John"];

  constructor(private ref: ChangeDetectorRef, public dialog: MatDialog, public activeRoute: ActivatedRoute, public router: Router){

  }
  ngOnInit() {

    this.router.events
    .filter(event => (event instanceof NavigationEnd))
    .subscribe((routeData: any) => {
        console.log(event)
      if (this.router.url == '/IBW/manage/projects/grid-view/12') {
        this.activeRoute.params.subscribe(params => {
            this.paramId = params['id']
            console.log(this.paramId)
          });
          // if(this.paramId ==  12){
          //   this.openoppurtunityDialog(null);
          // }
      }
    console.log(this.router.url)
    });

      // this.getleads();
      var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
      console.log(sessionDetails.userType,'fff');
      if(sessionDetails.userType == 'user'){
        this.userType = 'user';
      }
      if(sessionDetails.userType == 'admin'){
        this.userType = 'admin';
      }

  }
  filterToggle:boolean=false;
  colorOptions = ["Green", "Blue", "Gray", "Red"];
  colorOptionSelected: any;

  onColorOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }


  public opengridColDialog(lead) {
    let dialogRef = this.dialog.open(ProjectGridColDialogComponent, {
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

scrollActions(side) {
  var ele = document.getElementById('projectgrid');
  if(side == 'left')
  ele.scrollLeft += 190;
  else
  ele.scrollLeft -= 190;
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
  public opendocsupload(id) {
    console.log("jkhksbdjk");
    let dialogRef = this.dialog.open(AddNoteDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
        
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}




  // public getleads(): void {
  //     this.leads = null; //for show spinner each time
  //     this.marketingService.getleads().subscribe(
  //         leads => {
  //             this.leads = leads.slice(0,8);
  //         }
  //     );
  // }

  // public addlead(lead: Leads) {
  //     this.marketingService.addlead(lead).subscribe(lead => this.getleads());
  // }
  // public updatelead(lead: Leads) {
  //     this.marketingService.updatelead(lead).subscribe(lead => this.getleads());
  // }
  // public deletelead(lead: Leads) {
  //     this.marketingService.deletelead(lead.id).subscribe(lead => this.getleads());
  // }
  // public onPageChanged(event) {
  //     this.page = event;
  //     this.getleads();
  //     if (this.settings.fixedHeader) {
  //         document.getElementById('main-content').scrollTop = 0;
  //     }
  //     else {
  //         document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
  //     }
  // }



  // public openConfirmDialog(action,value,name) {
  //     let dialogRef = this.dialog.open(AddOppurtunityDialogComponent, {
  //         data:{'action':action,'value':value,'name':name}
  //     });

  //     dialogRef.afterClosed().subscribe(account => {
  //         this.dialog.closeAll();
  //         return account;
  //     });
  // }

  // selectAll() {
  //     for (var i = 0; i < this.leads.length; i++) {
  //         this.leads[i].selected = this.selectedAll;
  //     }
  // }

  // checkIfAllSelected() {
  //     this.selectedAll = this.leads.every(function(item:any) {
  //         return item.selected == true;
  //     })
  // }

}
