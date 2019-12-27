import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-layout',
  templateUrl: './timeline-layout.component.html',
  styleUrls: ['./timeline-layout.component.scss']
})
export class TimelineLayoutComponent implements OnInit {
  filterToggle:boolean=false;
  constructor() { }
  projectOptions=["5-12564","4-24642","4-82324","6-10235","2-51152","7-14164"];
  sitesOptions = ["71 Mearns","20 Mearns Ct","11 Mearns","Mearns-249","Mearns Ct","06 Mearns",];
  ngOnInit() {
  }
  scrollActions(side) {
    var ele = document.getElementById('actions');
    if(side == 'left')
    ele.scrollLeft += 190;
    else
    ele.scrollLeft -= 190;
}
}
