import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  employeeForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm=new FormGroup({
      notes: new FormControl('Q-190001'),
      Quote: new FormControl('New Project'),
      Client: new FormControl('Toronto Towers'),
      Survey: new FormControl('Reference Plan'),
      Admin: new FormControl('James Smith'),
      Account: new FormControl('Rob'),
      Email: new FormControl('james2136@gmail.com'),
      Project: new FormControl('Dwayne'),
      Phone: new FormControl('(416) 920-5100'),
      Country: new FormControl('Canada'),
      Province: new FormControl('Ontario'),
      Municipality: new FormControl('Ottawa'),
      City: new FormControl('Ottawa'),
      Street: new FormControl('79GG+XC Gloucester')
    })
  }
  isedit:boolean=true;
  editfun(){
    this.isedit=false;
  }
  savedata(){
    console.log(this.employeeForm.value);
    
   this.isedit=true;

  }
  cancel(){
    
     this.isedit=true;

  }
  


  
}
