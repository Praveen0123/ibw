import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private http: HttpClient) {

    this.treeData = {
      "data": [{
        "label": "71 Mearns",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": false,
        "expanded": true,
        "children": [{
          "label": "Reference Plan",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        }
        ]
      },
      {
        "label": "20 Mearns",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Topographic",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        },
        {
          "label": "SRPR",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        }
        ]
      },
      {
        "label": "60 Mearns",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Topographic",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        },
        {
          "label": "SRPR",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        }
        ]
      },
      {
        "label": "55 Mearns",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Topographic",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        },
        {
          "label": "SRPR",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        }
        ]
      },
      ]
    }
  }
  treeData: any;

  public getTreeJSON() {
    return this.treeData;
  }


}
