import { Component, OnInit, Inject, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { AddHoursRowComponent } from './add-hours-row/add-hours-row.component';
import { FormGroup, FormArray, FormControl, FormBuilder } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-timesheet-dialog',
  templateUrl: './timesheet-dialog.component.html',
  styleUrls: ['./timesheet-dialog.component.scss']
})
export class TimesheetDialogComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<TimesheetDialogComponent>,private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,private CFR: ComponentFactoryResolver) { }

  
  //Code for add delete html 
    @ViewChild('viewContainerRef', { read: ViewContainerRef }) VCR: ViewContainerRef;

  index: number = 0;

  componentsReferences = [];


  createComponent() {

    let componentFactory = this.CFR.resolveComponentFactory(AddHoursRowComponent);
    let componentRef: ComponentRef<AddHoursRowComponent> = this.VCR.createComponent(componentFactory);
    let currentComponent = componentRef.instance;

    currentComponent.selfRef = currentComponent;
    currentComponent.index = ++this.index;

    // prividing parent Component reference to get access to parent class methods
    currentComponent.compInteraction = this;

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
  }

  remove(index: number) {

    if (this.VCR.length < 1)
      return;

    let componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];
    let component: AddHoursRowComponent = <AddHoursRowComponent>componentRef.instance;

    let vcrIndex: number = this.VCR.indexOf(componentRef)

    // removing component from container
    this.VCR.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }



///////////////////////////



  projects = ["5-12564", "4-24642", "4-82324", "6-10235" ]
  JobCodes=["LPC1","LPC2","LPC3","EPC1","EPC2","EPC3","CPC1","CPC2","CPC3","OLS","EA","PA"]
  ExpenseTypes = ["Reimbursable","Non-reimbursable"]
  Sites=["71 Mearns / 249","71 Mearns Ct 20","20 Mearns Ct","Site 4"]
  SOWs =["Reference Plan","Topographic","SRPR"]
  Tasks=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]
  Actions=["Take Measurements","CAD Drafting","Initial Survey","Site Audit","Field Management"]
  ExpenseCodes=["Fuel Charges","Breakfast","Lunch","Sundry Expenses"]

  TimeTypes=["Type 1", "Type 2"]
  
  close(){
    this.dialogref.close();
  }
  isLinear = false;
  formGroup : FormGroup;
  form: FormArray;
 
  isBlockView:boolean=false;
isLineView:boolean=true;


controls:any;

get formData (){ return this.form.get('Data'); }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      form : this._formBuilder.array([])
    }) 
    this.addItem();
  }

  init(){
    return this._formBuilder.group({
      cont :new FormControl(),
    })
  }
  
  addItem(){
    this.form = this.formGroup.get('form') as FormArray;
    this.form.push(this.init());
  }
  removeItem(){
    this.form.removeAt(1);
  }

  BlockView(){
    this.isBlockView=true;
    this.isLineView=false;
  }
  LineView(){
    this.isBlockView=false;
    this.isLineView=true;
  }



}