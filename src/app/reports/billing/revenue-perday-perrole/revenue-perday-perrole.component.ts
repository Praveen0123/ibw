import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { roleperday } from './role';

@Component({
  selector: 'app-revenue-perday-perrole',
  templateUrl: './revenue-perday-perrole.component.html',
  styleUrls: ['./revenue-perday-perrole.component.scss']
})
export class RevenuePerdayPerroleComponent implements OnInit {

  role = 1;
  month = 6;
  year = 4;
  public analytics: any[];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Per Day';
  public showYAxisLabel = true;
  public yAxisLabel = 'Revenue';
  public colorScheme = {
    domain: ['#283593', '#039BE5', '#FF5252']
  };
  public autoScale = true;
  public roundDomains = true;

  public dropDownValue = null
  @ViewChild('resizedDiv') resizedDiv: ElementRef;
  public previousWidthOfResizedDiv: number = 0;
  dropDown: any = [];
  constructor() { }

  ngOnInit() {

    this.dropDown = roleperday
    console.log(roleperday);
    if (this.dropDownValue == null) {
      this.analytics = roleperday;
    } else {
      this.analytics = roleperday.filter(x => x.name == this.dropDownValue);
    }
  }

  changeGraphValues() {
console.log(this.dropDownValue)
    if (this.dropDownValue == null) {
      this.analytics = roleperday;
    } else {
      this.analytics = roleperday.filter(x => x.name == this.dropDownValue);
    }
    if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
      if (this.dropDownValue == null) {
        this.analytics = [...roleperday];
      } else {
        this.analytics = [...roleperday.filter(x => x.name == this.dropDownValue)];
      }
      // this.analytics = [...roleperday.filter(x => x.name == this.dropDownValue)];
    }
    this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;

  }

  onSelect(event) {
    console.log(event);
  }

  ngAfterViewChecked() {
    if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
      if (this.dropDownValue == null) {
        this.analytics = [...roleperday];
      } else {
        this.analytics = [...roleperday.filter(x => x.name == this.dropDownValue)];
      }
      // this.analytics = [...roleperday.filter(x => x.name == this.dropDownValue)];
    }
    this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
  }

}
