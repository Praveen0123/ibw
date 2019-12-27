import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-kanban-layout',
  templateUrl: './kanban-layout.component.html',
  styleUrls: ['./kanban-layout.component.scss']
})
export class KanbanLayoutComponent implements OnInit {
  filterToggle:boolean = false;
  isProjectFilter: boolean;
  isSiteFilter: boolean;
  isSowFilter: boolean;
  isTaskFilter: boolean;
  constructor(public router : Router) { 
    console.log(this.router.url)
    this.router.events
    .filter(event => (event instanceof NavigationEnd))
        .subscribe((routeData: any) => {
            if(this.router.url == "/IBW/manage/projects/kanban-view/project")
           {
             this.isProjectFilter = true;
             this.isSiteFilter = false;
             this.isSowFilter = false;
             this.isTaskFilter = false;

            }
            else if(this.router.url == "/IBW/manage/projects/kanban-view/site"){
              this.isProjectFilter = false;
              this.isSiteFilter = true;
              this.isSowFilter = false;
              this.isTaskFilter = false;
            }
            else if(this.router.url == "/IBW/manage/projects/kanban-view/sow"){
              this.isProjectFilter = false;
              this.isSiteFilter = false;
              this.isSowFilter = true;
              this.isTaskFilter = false;
            }
            else{
              this.isProjectFilter = false;
              this.isSiteFilter = false;
              this.isSowFilter = false;
              this.isTaskFilter = true;
            }
        });
  }

  scrollActions(side) {
    var ele = document.getElementById('kanban');
    if(side == 'left')
    ele.scrollLeft += 190;
    else
    ele.scrollLeft -= 190;
  }  

  ngOnInit() {
  }

}
