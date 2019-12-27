import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
isQuote:boolean=true;
isProject:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  fnQuote(){
    this.isQuote = true;
    this.isProject =false;
  }
  fnProject(){
    this.isQuote = false ;
    this.isProject = true;
  }
}
