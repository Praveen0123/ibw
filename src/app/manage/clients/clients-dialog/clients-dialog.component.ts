import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { ManageService } from '../../manage.service';
import { Clients, ClientsSettings, ClientsSocial, ClientsContacts, ClientsWork, ClientsProfile } from '../clients.model';
import { emailValidator, internationalPhoneNumber } from 'src/app/theme/utils/app-validators';
// import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-clients-dialog',
  templateUrl: './clients-dialog.component.html',
  styleUrls: ['./clients-dialog.component.scss'],
  providers: [AlertService]
})
export class ClientsDialogComponent implements OnInit {
  public phoneNumberMask = ['+','1', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  options = new FormControl();
  checklistItems = [
      // {"criteria":'Has 10 Years of existence ?',"id":1},
      // {"criteria":'Presence in minimum 3 Locations ?',"id":2},
      // {"criteria":'Has more than 50 employess and not more than 500 ? ',"id":3},
      // {"criteria":'Do they have good website ? ',"id":4}
  ];
  // provinceOptions=["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador",
  // "Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan","Northwest Territories","Nunavut","Yukon"];
  industryOptions = ["Mining","Manufacturing"];
  industryOptionSelected: any;

  onIndustryOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  timeOptions = ["GMT","IST","CST","MST","PST","EDT","MDT","PST","PDT"];
  timeOptionSelected: any;

  onTimeOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }

  campaignOptions =["Dwayne","Dave","John"];
  bdmsOptions = ["Rohin Sama Reddy","Siva kodali","Srinu Lli","Siva Prakash"]

  prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
  prospectOptionSelected: any;

  onProspectOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  cityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];
  cityOptionSelected: any;

  onCityOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  // muncipalityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];
  // regionOptionSelected: any;

  onRegionOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  managerOptions = ["East Rail Maintenance", "Dome Scanning","Bridge Topographic","GTA Topographic"];
  managerOptionSelected: any;

clientTypes :any;
countries :any;
provinceOptions: any;
muncipalityOptions: any;

onManagerOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  locationOptions = ["Texas, Houston","Washington, Seattle","oronto, Canada","New York, USA"];
      locationOptionSelected: any;
      onLocationOptionsSelected(event){
      console.log(event); //option value will be sent as event
      }

  

  public form :FormGroup;
  public ClientForm :FormGroup;

  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<ClientsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder, private alertService: AlertService, private manageService: ManageService) {

    this.ClientForm = this.fb.group({
      'clientID': null,
      'clientName': [null, Validators.compose([Validators.required])],
      'clientTypeID': [null, Validators.compose([Validators.required])],
      'clientEmail': [null, Validators.compose([Validators.required, emailValidator])],
      'clientPhone': [null, Validators.compose([Validators.required, internationalPhoneNumber])],
      'clientCountryID': [null, Validators.compose([Validators.required])],
      'clientStateID': [null, Validators.compose([Validators.required])],
      'clientMuncipalityID': [null, Validators.compose([Validators.required])],
      'clientCity': [null, Validators.compose([Validators.required])],
      'clientZip': [null, Validators.compose([Validators.required])],
      'clientStreetAddress': [null, Validators.compose([Validators.required])],
      'clientCode': [null, Validators.compose([Validators.required])],
      'createdBy': [null],
      'modifiedBy': [null]
    })
  }
  getCountries(){
    this.manageService.GetCountries().subscribe(
      data => {
         // this.leads = leads.slice(0,8);
         this.countries = data['Data'];
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
  GetStates(value)
  {
    this.manageService.GetStates(value).subscribe(
      data => {
         this.provinceOptions = data['Data'];
      }
    );
  }

  onlyNumbers(event) {
    var k;
    k=event.charCode;
    return ((k > 47 && k < 58));
  }

  GetMuncipalities()
  {
    this.manageService.GetMuncipalities().subscribe(
      data => {
         this.muncipalityOptions = data['Data'];
      }
    );
  }
  onSubmitClientForm(formValues) {
    if(this.ClientForm.valid){
      this.manageService.upsertClient(formValues).subscribe(
        data => {
          if(data['Status'] == true){
            this.dialogRef.close();
          }
        }
      )
    }
    else{
      this.ClientForm.controls.clientName.markAsTouched();
      this.ClientForm.controls.clientTypeID.markAsTouched();
      this.ClientForm.controls.clientEmail.markAsTouched();
      this.ClientForm.controls.clientPhone.markAsTouched();
      this.ClientForm.controls.clientCountryID.markAsTouched();
      this.ClientForm.controls.clientStateID.markAsTouched();
      this.ClientForm.controls.clientMuncipalityID.markAsTouched();
      this.ClientForm.controls.clientCity.markAsTouched();
      this.ClientForm.controls.clientZip.markAsTouched();
      this.ClientForm.controls.clientStreetAddress.markAsTouched();
      this.ClientForm.controls.clientCode.markAsTouched();
    }
  }

  ngOnInit() {
    this.getCountries();
    this.editClient(this.data);
    this.getClientTypes();
    this.GetMuncipalities();
  }

  editClient(data)
  {
    this.ClientForm.reset();
    if(data!=null){
      console.log("data:"+data)
    this.ClientForm.controls['clientID'].setValue(data.clientID);
    this.ClientForm.controls['clientName'].setValue(data.clientName);
    this.ClientForm.controls['clientTypeID'].setValue(data.clientTypeID);
    this.ClientForm.controls['clientEmail'].setValue(data.clientEmail);
    this.ClientForm.controls['clientPhone'].setValue(data.clientPhone);
    this.ClientForm.controls['clientCountryID'].setValue(data.clientCountryID);
    this.GetStates(data.clientCountryID);
    this.ClientForm.controls['clientStateID'].setValue(data.clientStateID);
    this.ClientForm.controls['clientMuncipalityID'].setValue(data.clientMuncipalityID);
    this.ClientForm.controls['clientCity'].setValue(data.clientCity);
    this.ClientForm.controls['clientZip'].setValue(data.clientZip);
    this.ClientForm.controls['clientStreetAddress'].setValue(data.clientStreetAddress);
    this.ClientForm.controls['clientCode'].setValue(data.clientCode);
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  saveLead() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
