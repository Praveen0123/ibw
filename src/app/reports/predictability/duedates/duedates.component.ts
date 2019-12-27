import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duedates',
  templateUrl: './duedates.component.html',
  styleUrls: ['./duedates.component.scss']
})
export class DuedatesComponent implements OnInit {
  selected = 4;
  constructor() { }
  filterToggle:boolean=false;
  ngOnInit() {
  }

}
