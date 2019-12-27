import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {
  filterToggle:boolean=false;
  allowAssign: boolean =true;
  InvoiceType : any = 'new';
  isNew: boolean = true;
  checked: boolean;

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('addSowModal') addSowModal: ModalDirective;
  @ViewChild('assignEstimateModal') assignEstimateModal: ModalDirective;

  
  showChildModal(): void {
    this.addSowModal.show();
  }
 
  hideChildModal(): void {
    this.addSowModal.hide();
  }

  funSelect(value){
    if(this.checked == true){
      console.log('gjgjg')
      this.allowAssign = false;
    }
    else{
      this.allowAssign = true;
    }
  }

  funSelectAll(e){
    if(e == true){
      this.checked = true;
      this.allowAssign = false;

    }
    else{
      this.checked = false;
      this.allowAssign = true;

    }
  }

  showEstimateModal(){
    this.assignEstimateModal.show();
  }

  hideEstimateModal(){
    this.assignEstimateModal.hide();
  }


  scrollActions(side) {
    var ele = document.getElementById('expenseTable');
    if(side == 'left')
    ele.scrollLeft += 190;
    else
    ele.scrollLeft -= 190;
  }

  fnInvoiceType(value){
    if(value == 'new'){
      this.isNew = true;      
    }
    else{
      this.isNew = false;
    }
  }



  ActionTypes = ["Quotes","Research","Field","Calcs","Drafting","Quality Control","Management","Admin"]
  Sites=["71 Mearns / 249","71 Mearns Ct 20","20 Mearns Ct","Site 4"]
  SOWs =["Reference Plan","Topographic","SRPR"]
  Tasks=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]
  Actions=["Take Measurements","CAD Drafting","Initial Survey","Site Audit","Field Management"]
  ExpenseCodes=["Fuel Charges","Breakfast","Lunch","Sundry Expenses"]

  HoursData=[
    {workedHours:4,claimedBy:'Arthur Cooper',jobTitle:'CAD Designer',expSub:'Miscellaneous',expCode:'Miscellaneous',expType:'Non-Reimbursable',expAmount:10,expDate:'2019-06-25',claimedDate:'2019-06-29',action:'CAD Drafting',task:'Drafting',sow:'Reference Plan',site:'71 Mearns / 249',status:'Pending',docs:"2"},
    {workedHours:8,claimedBy:'Dan Gildon',jobTitle:'Party Chief',expSub:'Registry office fee',expCode:'ROF',expType:'Reimbursable',expAmount:200,expDate:'2019-06-28',claimedDate:'2019-06-29',action:'Field Work',task:'Field',sow:'Topographic',site:'71 Mearns Ct 20',status:'Pending',docs:"3"},
    {workedHours:12,claimedBy:'Andy Jones',jobTitle:'Field Assistant',expSub:'Travel Mileage',expCode:'Fuel Charges',expType:'Reimbursable',expAmount:25,expDate:'2019-06-15',claimedDate:'2019-06-20',action:'To find legal boundaries',task:'Field',sow:'SRPR',site:'20 Mearns Ct',status:'Approved',docs:"1"},
  ]




}
