import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NewSowDailogComponent } from 'src/app/shared/new-sow-dailog/new-sow-dailog.component';
import { MatDialog } from '@angular/material';
import { TreeService } from '../../project-dashboard/sow/tree.service';
import { TreeNode } from 'primeng/api';
import { ManageSOWGridColDialogComponent } from '../../project-dashboard/sow/review-grid-col-dialog/manage-sow-grid-col-dialog.component';
import { NewSiteDailogComponent } from 'src/app/shared/new-site-dailog/new-site-dailog.component';

@Component({
  selector: 'app-sow',
  templateUrl: './sow.component.html',
  styleUrls: ['./sow.component.scss']
})
export class SowComponent implements OnInit {
  userType: string = "";
  files = [];
  taskId: any;
  budgetFeedata = [];
  filterToggle:boolean = false;
  budgetHoursdata = [];
  taskRowId: number = 9;
  quantiyValue = [];
  globalTaskId: number;
  selectedFile: any = [];
  OverallCost: number = 0;
  OverallActHours: number = 0;
  events: string[] = [];
  opened: boolean;

  constructor(public dialog: MatDialog, public treeService: TreeService) { }

  taskName: string;
  @ViewChild('addSowModal') addSowModal: ModalDirective;
  @ViewChild('addTasModal') addTasModal: ModalDirective;
  @ViewChild('addActionModal') addActionModal: ModalDirective;
  uploadedFiles: any[] = [];

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
}

openActionModal(){
  this.addActionModal.show();
  }


JobCodes=["LPC1","LPC2","LPC3","EPC1","EPC2","EPC3","CPC1","CPC2","CPC3","OLS","EA","PA"]
ActionTypes = ["Quotes","Research","Field","Calcs","Drafting","Quality Control","Management","Admin"]
Sites=["71 Mearns / 249","71 Mearns Ct 20","20 Mearns Ct","Site 4"]
SOWs =["Reference Plan","Topographic","SRPR"]
Tasks=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]

ActionsData=[
    {action:'Progress Report for Field Work',jobCode:'LPC 1',actionType:'Management',siteName:'71 Mearns / 249',sowName:'SRPR',task:'Quote',planHours:16,dueDate:'2019-07-20',actiondetails:"Provided Action Details",status:'Requested'},
    {action:'Ops Internal Task',jobCode:'CPC 2',actionType:'Admin',siteName:'71 Mearns Ct 20',sowName:'Topographic',task:'Research',planHours:12,dueDate:'2019-06-10',actiondetails:"Provided Action Details",status:'Completed'},
    {action:'Site measurements',jobCode:'OLS',actionType:'Field',siteName:'20 Mearns Ct',sowName:'Reference Plan',task:'Field',planHours:18,dueDate:'2019-07-15',actiondetails:"Provided Action Details",status:'Assigned'},
    {action:'Surveyor search',jobCode:'GT 2',actionType:'Field',siteName:'20 Mearns Ct',sowName:'Reference Plan',task:'Field',planHours:16,dueDate:'2019-07-02',actiondetails:"Provided Action Details",status:'Progression'},
  ]

  public openSowDailog(sowId) {
    let dialogRef = this.dialog.open(NewSowDailogComponent, {
      data: 'New SOW',
      height: 'auto',
      width: '500px',

    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
      if (oppurtunity) {
        // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
      }
    });
  }


  nodeSelect(event) {

  }



  htmlContent:any;
  public openSiteDailog(siteId) {
    let dialogRef = this.dialog.open(NewSiteDailogComponent, {
        data: 'New Site',
        height: 'auto',
        width: '600px',
  
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        if (oppurtunity) {
            // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
        }
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  saveTask() {
    this.globalTaskId = this.globalTaskId + 1;
    this.taskRowId = this.taskRowId+1;
    this.taskData.push({ id: this.globalTaskId, name: this.taskName, Data: [{ id: this.taskRowId, rate: 0, quantity: 0, totals: 0, actionName:'' }], budgetHours: 0, budgetFee: 0 , selected: false});
    this.addTasModal.hide();
  }

  openTaskModal() {
    this.addTasModal.show();
  }

  expandAll() {
    this.files.forEach(node => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.files.forEach(node => {
      this.expandRecursive(node, false);
    });
  }



  jobcode = [
    { jobcode: "LPC1", rate: 55, status: true },
    { jobcode: "LPC2 Keeper", rate: 75, status: true },
    { jobcode: "EPC1", rate: 82, status: true },
    { jobcode: "EPC2", rate: 65, status: true },
    { jobcode: "CPC1", rate: 70, status: true },
    { jobcode: "CPC2", rate: 90, status: false },
    { jobcode: "OLS", rate: 50, status: true }

  ];


  expenses =[
    {id:1, name:'Surveyor Search', rate:200, quantity:0, totals: 0}, 
    {id:2, name:'Mileage', rate:0.50, quantity:0, totals: 0}, 
    {id:3, name:'Bars/Spikes/Stakes', rate:25, quantity:0, totals: 0}, 
    {id:4, name:'Integration Fee', rate:500, quantity:0, totals: 0}, 
    {id:5, name:'RO Fee', rate:100, quantity:0, totals: 0}, 
    {id:6, name:'', rate:null, quantity:0, totals: 0}
]

totalBudget: number = 0;

addExpenseItem(){
  var expenseId = this.expenses.slice(-1);
  var tempID = expenseId[0]['id'];
   tempID = tempID + 1;
  this.expenses.push( {id:tempID, name:'', rate:null, quantity:0, totals: 0});
}

deleteExpenseItem(id){
  this.expenses = this.expenses.filter(x=> x.id != id);
  console.log(this.expenses);
}


  showChildModal(): void {
    // this.addSowModal.show();
    this.openSowDailog(null)
  }

  hideChildModal(): void {
    this.addSowModal.hide();
    this.addTasModal.hide();
    this.addActionModal.hide();
  }

  sites = ["71 Mearns / 249", "71 Mearns Ct 20", "20 Mearns Ct"]
  SowTypes = ["Legal", "Engineering", "Construction", "Internal"]



  ngOnInit() {
    var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
    console.log(sessionDetails.userType, 'fff');
    if (sessionDetails.userType == 'user') {
      this.userType = 'user';
    }
    if (sessionDetails.userType == 'admin') {
      this.userType = 'admin';
    }

    var data = this.treeService.getTreeJSON();
    this.files = data['data'];
    this.taskId = this.taskData.slice(-1);
    this.globalTaskId = this.taskId[0]['id'];
    this.selectedFile = this.files[0]['children'][0];
  }
  SOWData = [
    { sowType: "Engineering", sowName: 'Reference Plan', siteName: '71 Mearns / 249', tasks: "4", startdate: "2019-06-21", duedate: "2019-05-25", completion: "90%", completiondate: "-", status: true },
    { sowType: "Construction", sowName: 'Topographic', siteName: '71 Mearns Ct 20', tasks: "3", startdate: "2019-07-01", duedate: "2019-06-08", completion: "95%", completiondate: "-", status: false },
    { sowType: "Internal", sowName: 'SRPR', siteName: '20 Mearns Ct', tasks: "5", startdate: "2019-07-15", duedate: "2019-07-18", completion: "100%", completiondate: "2019-07-18", status: true },
  ]

  addRowTask1(tableId) {
    this.taskRowId = this.taskRowId + 1;
    this.taskData.forEach((x) => {
      if (x.id == tableId) {
        x.Data.push({ id: this.taskRowId, rate: 0, quantity: 0, totals: 0 ,actionName:''});
      }
    })
    console.log(this.taskData);
  }


  deleteRowTask(tableId, rowId){
    this.budgetFeedata = [];
    this.budgetHoursdata = [];
    this.taskData.forEach((x) => {
      if (x.id == tableId) {
      x.Data = x.Data.filter(element => element.id != rowId);
      x.Data.forEach(y => {
        this.budgetFeedata.push(y.totals);
        x.budgetFee = this.budgetFeedata.reduce((a, b) => a + b, 0);
        this.budgetHoursdata.push(y.quantity);
        x.budgetHours = this.budgetHoursdata.reduce((a, b) => a + b, 0);
      })
      }
   
    })
    this.getTotalBudgetnHours();
  }


  scrollActions(side) {
  this.taskData.forEach(element => {
    var ele = document.getElementById(element.id.toString());
    if(side == 'left')
    ele.scrollLeft += 190;
    else
    ele.scrollLeft -= 190;
  });
   
  }


  public opengridColDialog(lead) {
    let dialogRef = this.dialog.open(ManageSOWGridColDialogComponent, {
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


  getQuantityValue(quantity, tableId, tableRowId) {
    this.budgetFeedata = [];
    this.budgetHoursdata = [];
    this.taskData.forEach((x) => {
      if (x.id == tableId) {
        x.Data.forEach(y => {
          if (y.id == tableRowId) {
            y.totals = quantity * y.rate;
          }
          this.budgetFeedata.push(y.totals);
          x.budgetFee = this.budgetFeedata.reduce((a, b) => a + b, 0);
          this.budgetHoursdata.push(y.quantity);
          x.budgetHours = this.budgetHoursdata.reduce((a, b) => a + b, 0);
        })
      }
    }
    )
    this.getTotalBudgetnHours();
  }

  getTotalBudgetnHours(){
    var OverallCost = [];
    var OverallActualHours = [];
    this.taskData.forEach(x=>{
      OverallCost.push(x.budgetFee);
      this.OverallCost = OverallCost.reduce((a, b) => a + b, 0);
      OverallActualHours.push(x.budgetHours);
      this.OverallActHours = OverallActualHours.reduce((a, b) => a + b, 0);
    })
  }


  jobCodeChange(value, tableId, tableRowId) {
    this.budgetFeedata = [];
    this.budgetHoursdata = [];
    this.taskData.forEach((x) => {
      if (x.id == tableId) {
        x.Data.forEach(y => {
          if (y.id == tableRowId) {
            y.rate = value;
            y.totals = y.quantity * y.rate;
          }
          this.budgetFeedata.push(y.totals);
          x.budgetFee = this.budgetFeedata.reduce((a, b) => a + b, 0);
          this.budgetHoursdata.push(y.quantity);
          x.budgetHours = this.budgetHoursdata.reduce((a, b) => a + b, 0);
        })
      }
    }
    )
    this.getTotalBudgetnHours();
  }

  taskData = [{ id: 1, name: 'Quote', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0, selected: true },
  { id: 2, name: 'Research', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false},
  { id: 3, name: 'Field', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false},
  { id: 4, name: 'Drafting', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false},
  { id: 5, name: 'QC', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false},
  { id: 6, name: 'Management', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false},
  { id: 7, name: 'Admin', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false},
]

openAllAccordians(){
  this.taskData.forEach(x=>x.selected = true);
}
closeAllAccordians(){
  this.taskData.forEach(x=>x.selected = false);
}

  addSum(quantityArray) {
    var totalValue = null;
    quantityArray.forEach(element => {
      totalValue += element;
    });
    return totalValue
  }
  onTabClose(e) {
    console.log('closed')

}



}
