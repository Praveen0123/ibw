import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variance',
  templateUrl: './variance.component.html',
  styleUrls: ['./variance.component.scss']
})
export class VarianceComponent implements OnInit {
selected = 4;
filterToggle:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
