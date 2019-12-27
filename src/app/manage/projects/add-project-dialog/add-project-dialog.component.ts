import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss'],
  providers: [AlertService]
})
export class AddProjectDialogComponent implements OnInit {
  public fieldArray: Array<any> = [];
  public newAttribute: any = {};
 
  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {}
  }
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  typeOptions=["Legal","Engineering","Construction"];
  siteFormGroup:any;
  sowFormGroup:any;
  isSiteAdding:any;addNewSite:any;
  provinceOptions=["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador",
  "Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan","Northwest Territories","Nunavut","Yukon"];
  munipalityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];

  clientsOptions = ["City Homes", "Delpark Homes", "Hydro One", "Sandbank Homes","Valleymede Homes","AECOM","City of Pickering","Stantec"];
  countries =["Canada","USA"]
  projecttypeOptions = ["Legal", "Engineering", "Construction", "Internal"];
  accountManager = ["Louis", "Peter", "Edward", "Alex"];
  
  timeOptions = ["GMT","IST","CST","MST","PST","EDT","MDT","PST","PDT"];
  
  contactOptions = ["Dwayne", "Dave", "Emily", "Joe","Stephanie", "Laurie","Other"];
  
  pmOptions = ["Dwayne","Dave"];

  termOptions = ["Term 1","Term 2","Term 3"];

  public selectedLinks: string = "gridview";
  gridview: boolean;
  newsite: boolean;
  sites=[
    {sitename:"71 Mearns / 249",city:"Toronto",state:"Ontario"},
    {sitename:"71 Mearns Ct",city:"Ottawa",state:"Ontario"},
    {sitename:"20 Mearns",city:"Mississauga",state:"Ontario"},
  ];
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
 
  constructor(public dialogRef: MatDialogRef<AddProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public oppurtunity: Oppurtunity, private alertService: AlertService) { }
    profileFormGroup: FormGroup;
    addressFormGroup: FormGroup;
  ngOnInit() {
   
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }
}


export class Oppurtunity {
  id: number;
  username: string;
  password: string;
  oppurtunityName:string;
  industry: string;
  Oppurtunity: number;
  profile: OppurtunityProfile;
  work: OppurtunityWork;
  contacts: OppurtunityContacts;
  social: OppurtunitySocial;
  settings: OppurtunitySettings;
}

export class OppurtunityProfile {
  name: string;
  surname: string;
  birthday: Object;
  gender: string;
  image: string;
}

export class OppurtunityWork {
  company: string;
  position: string;
  salary: number;
}

export class OppurtunityContacts {
  email: string;
  phone: string;
  address: string;
}

export class OppurtunitySocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class OppurtunitySettings {
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}