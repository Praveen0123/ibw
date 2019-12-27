import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-site-dailog',
  templateUrl: './new-site-dailog.component.html',
  styleUrls: ['./new-site-dailog.component.scss']
})
export class NewSiteDailogComponent implements OnInit {

  public dateTime1: Date;
  modeOptions = ["Task","Asset"];
  modeOptionSelected: any;
  isData: boolean = false;
  //startDate = new Date(1990, 0, 1);
  onModeOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }
  communicationOptions = ["Field","Office"];
  communicationOptionSelected: any;
  //startDate = new Date(1990, 0, 1);
  onCommunicationOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }

  constructor(public dialogRef: MatDialogRef<NewSiteDailogComponent>, public router : Router,
    ) { }
    


  projects = ["5-12564", "4-24642", "4-82324", "6-10235" ]
  countries = ["Canada", "USA"]
  provinceOptions = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
  "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"];
cityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];
munipalityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];

selectProject : string = '5-12564'
  
  ngOnInit() {
 
    if(this.router.url == '/IBW/manage/project-dashboard/sites' || 
    this.router.url ==  '/IBW/manage/quotes-dashboard/sites'){
      this.isData = true;
    }
    else{
      this.isData = false;
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  saveInfo() {
    this.dialogRef.close();
    this.router.navigate(['/IBW/manage/project-dashboard/sites'])
  }

}
