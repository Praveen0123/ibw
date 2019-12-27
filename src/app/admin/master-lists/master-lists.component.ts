import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-lists',
  templateUrl: './master-lists.component.html',
  styleUrls: ['./master-lists.component.scss']
})
export class MasterListsComponent implements OnInit {

  constructor() { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  ngOnInit() {
  }

}
