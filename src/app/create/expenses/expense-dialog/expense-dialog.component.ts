import { Component, OnInit, Inject, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { AddExpenseRowComponent } from './add-expense-row/add-expense-row.component';
import { FormGroup, FormArray, FormBuilder, FormControl } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-expense-dialog',
  templateUrl: './expense-dialog.component.html',
  styleUrls: ['./expense-dialog.component.scss']
})
export class ExpenseDialogComponent implements OnInit {
  numberOfForms = [];

  constructor(public dialogref: MatDialogRef<ExpenseDialogComponent>,private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, private CFR: ComponentFactoryResolver) { }


  //Code for add delete html 
  @ViewChild('viewContainerRef', { read: ViewContainerRef }) VCR: ViewContainerRef;

  index: number = 0;

  componentsReferences = [];

   controls:any;



  createComponent() {

    let componentFactory = this.CFR.resolveComponentFactory(AddExpenseRowComponent);
    let componentRef: ComponentRef<AddExpenseRowComponent> = this.VCR.createComponent(componentFactory);
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
    let component: AddExpenseRowComponent = <AddExpenseRowComponent>componentRef.instance;

    let vcrIndex: number = this.VCR.indexOf(componentRef)

    // removing component from container
    this.VCR.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }



  ///////////////////////////



  projects = ["5-12564", "4-24642", "4-82324", "6-10235"]
  JobCodes = ["LPC1", "LPC2", "LPC3", "EPC1", "EPC2", "EPC3", "CPC1", "CPC2", "CPC3", "OLS", "EA", "PA"]
  ExpenseTypes = ["Reimbursable", "Non-reimbursable"]
  Sites = ["71 Mearns / 249", "71 Mearns Ct 20", "20 Mearns Ct", "Site 4"]
  SOWs = ["Reference Plan", "Topographic", "SRPR"]
  Tasks = ["Quote", "Research", "Field", "Calculations", "Drafting", "QC", "Management", "Admin"]
  Actions = ["Take Measurements", "CAD Drafting", "Initial Survey", "Site Audit", "Field Management"]
  ExpenseCodes = ["Mileage", "Breakfast", "Lunch", "Sundry Expenses"]

  ExpenseCode_nonMileage: string = "";
  ExpenseCode_Mileage: string = "hide";

isBlockView:boolean=false;
isLineView:boolean=true;

 isLinear = false;
  ExpenseFormGroup : FormGroup;
  form: FormArray;

  ngOnInit() {
    this.ExpenseFormGroup = this._formBuilder.group({
      form : this._formBuilder.array([])
    }) 
    this.addItem();
  }

  init(){
    return this._formBuilder.group({
      project :new FormControl(),
      site:new FormControl(),
      sow:new FormControl(),
      task:new FormControl(),
      action:new FormControl(),
      expSubject:new FormControl(),
      expCode:new FormControl(),
      expAmount:new FormControl(),
      kilometers:new FormControl(),
      expType:new FormControl(),
      expDate:new FormControl(),
    })
  }
  
  addItem(){
    // this.form = this.ExpenseFormGroup.get('form') as FormArray;
    // this.form.push(this.init());
    this.numberOfForms.push(1);
  }
  removeItem(){
    // this.form.removeAt(1);
    if(this.numberOfForms.length > 1){
      this.numberOfForms.pop();
    }
  }

  ExpenseCodeChange(code) {
    if (code == "Mileage") {
      this.ExpenseCode_nonMileage = "hide"
      this.ExpenseCode_Mileage = ""
    } else {
      this.ExpenseCode_nonMileage = ""
      this.ExpenseCode_Mileage = "hide"
    }
  }

  close() {
    this.dialogref.close();
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
