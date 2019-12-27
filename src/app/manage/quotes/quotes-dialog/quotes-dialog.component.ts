import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from '../../../shared/services/alert.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ClientsDialogComponent } from '../../clients/clients-dialog/clients-dialog.component';

@Component({
  selector: 'app-quotes-dialog',
  templateUrl: './quotes-dialog.component.html',
  styleUrls: ['./quotes-dialog.component.scss'],
  providers: [AlertService]
})

export class QuotesDialogComponent implements OnInit {
  public fieldArray: Array<any> = [];
  fileToUpload: File = null;
  selected=1;
  isHideQuestions:boolean=true;
  public newAttribute: any = {};
  myControl = new FormControl();
  options: string[] = ['Q-190001', 'Q-190002', 'Q-190003', 'Q-190004', 'Q-190005', 'Q-190006', 'Q-190007'];
  filteredOptions: Observable<string[]>;
  contactoptions: string[] = ['Isaac Walker','Henry Wade','Hilda Sweden','Marco Wilson','Martin Zeller'];
  filteredcontactOptions: Observable<string[]>;
  option: string[] = ['5-12564', '4-24642', '4-82324', '6-10235', '2-51152', '7-14164'];
  filteredprojectsOptions: Observable<string[]>;
  ReasonQuestions :string[];
  toolBar={
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough"],
      ["justifyLeft", "justifyRight", "justifyFull", "outdent"]
   ]
  }
  
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {}
  }
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
  reasonQuestions(){
    this.isHideQuestions=false;
    this.ReasonQuestions=[];
    this.ReasonQuestions=['Do you have an existing copy of a survey for the property ',
    'Are you applying for a severance or has it already been approved',
    'Do you have a sketch showing the proposed severanc',
    'Do you with a list of severance conditions from the municipality that you can provide']
  }

  ProjectTypes=['Legal','Engineering', 'Construction', 'Internal']
  isExistingContact: string = 'existing'
  existingContactName: string = 'Henry Wade'
  private selectedLink: string = "new";
  setradio(e: string): void {
    this.selectedLink = e;
  }
  isSelected(name: string): boolean {
    if (!this.selectedLink) {
      return false;
    }
    return (this.selectedLink === name);
  }




  isLinear = false;
  profileFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  reasonFormGroup: FormGroup;
  siteFormGroup: FormGroup;
  sowFormGroup: FormGroup;


  isSiteAdding: any = null;
  SiteDetails: any = [];
  siteForm: FormGroup;
  siteName: any;
  mainSitename: string;
  // radio: FormGroup;

  clientTypes = ["Engineer/Engineering Firm","Private land owner","Planner","Business","Architect/Architect firm",
  "Government","Home builder","Law firm","Realtor","Utility company","Surveyor/Survey firm","Developer"];
  surveyOptions = ["Severance", "Constructing a new building", "Building a fence", "Want to know where my boundaries are", 
  "Selling my house", "Minor variance", "Building permit application", "Need information for architect or engineering design",
"Need topographic information","Other"];
  hearOptions = ["Website", "Social Media (Facebook, Twitter etc)", "Referral (Friend, Family, Etc)", "Google", "Previously a Client", "Other"]
  stageOptions = ["Qualified", "Phone Call", "First Meeting", "Scope", "Proposal", "PO#", "Hold", "Declined", "Expired", "Archived"]
  bdmsOptions = ["Rohin Sama Reddy", "Siva kodali", "Srinu Lli", "Siva Prakash"]
  ClientOptions = ["City Homes", "Delpark Homes", "Hydro One", "Sandbank Homes", "Valleymede Homes"]
  projectManagerOptions = ["Dwayne", "Dave"]
  quoteAdminOptions = ["James Smith", "Maria Garcia", "Maria Rodriguez", "Maria Hernandez", "Mary Smith", "Robert Hernandez", "Michael Rodriguez"]
  prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR", "SKY"];
  sites=[
    {sitename:"71 Mearns / 249",city:"Toronto",state:"Ontario"},
    {sitename:"71 Mearns Ct",city:"Ottawa",state:"Ontario"},
    {sitename:"20 Mearns",city:"Mississauga",state:"Ontario"},
  ];

  cityOptionSelected: any;
  countries = ["Canada", "USA"]
  quoteTypes = ["New Project", "Existing Project"]
  slectedProvince: string = "British Columbia"
  provinceOptions = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
    "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"];
  cityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];
  munipalityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];
  contactOptions=["Isaac Walker","Henry Wade","Hilda Sweden","Marco Wilson","Martin Zeller"];
  typeOptions=["Legal","Engineering","Construction"];

  gridview: boolean = true;
  newsite: boolean = false;


  public selectedLinks: string = "gridview";

  settab(e: string): void {
    this.selectedLinks = e;

    if (this.selectedLinks == "gridview") {
      this.gridview = true;
      this.newsite = false;
    }
    else {
      this.gridview = false;
      this.newsite = true;
    }

  }
  isselected(name: string): boolean {
    console.log('ddd')
    if (!this.selectedLinks) {
      return false;
    }
    return (this.selectedLinks === name);
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



  public form: FormGroup;
  public passwordHide: boolean = true;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public addName: string, public dialogRef: MatDialogRef<QuotesDialogComponent>,
    public fb: FormBuilder, private alertService: AlertService) {
    // this.radio = fb.group({
    //   hideRequired: false,
    //   floatLabel: 'auto',
    // });
    this.siteForm = this.fb.group({
      siteName: null,
      Country: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      State: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      Municipality: null,
      City: null,
      ZIP: null,
      Address: null,
    })

    this.form = this.fb.group({
      id: null,
      username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      profile: this.fb.group({
        name: null,
        surname: null,
        birthday: null,
        gender: null,
        image: null
      }),
      work: this.fb.group({
        company: null,
        position: null,
        salary: null
      }),
      contacts: this.fb.group({
        email: null,
        phone: null,
        address: null
      }),
      social: this.fb.group({
        facebook: null,
        twitter: null,
        google: null
      }),
      settings: this.fb.group({
        isActive: null,
        isDeleted: null,
        registrationDate: null,
        joinedDate: null
      })
    });
  }

  ngOnInit() {
    this.profileFormGroup = this.fb.group({
      QuoteNumber: ['', Validators.required],
      Client: ['', Validators.required],
      SurveyType: ['', Validators.required],
      AccountManager: ['', Validators.required],
      QuoteType: ['', Validators.required],

    });
    this.addressFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
    this.siteFormGroup = this.fb.group({
      thirdCtrl: ['', Validators.required]
    });
    this.sowFormGroup = this.fb.group({
      fourthCtrl: ['', Validators.required]
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.filteredcontactOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.contacts_filter(value))
    );
    this.filteredprojectsOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._project(value))
    );


  }
  private _project(value: string): string[] {
    const projectfilterValue = value.toLowerCase();

    return this.option.filter(option => option.toLowerCase().includes(projectfilterValue));
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private contacts_filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.contactoptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  close(): void {
    this.dialogRef.close();
  }

  saveLead() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  addNewSite() {
    this.siteForm.reset();
    this.isSiteAdding = true;
  }
  Cancel() {
    this.siteForm.reset();
    this.isSiteAdding = false;
  }
  onSubmitSiteForm(form) {
    console.log(form);
    this.SiteDetails.push({
      'siteName': form.siteName, 'Country': form.Country, 'State': form.State,
      'Municipality': form.Municipality, 'City': form.City, 'ZIP': form.ZIP, 'Address': form.Address
    })
    console.log(this.SiteDetails);
    this.isSiteAdding = false;
    this.getSiteDetails(form);
  }

  getSiteDetails(item) {
    this.mainSitename = null;
    this.isSiteAdding = false;
    this.siteName = item.siteName;
    this.mainSitename = item.siteName;
    console.log(this.SiteDetails.length)
  }

}
