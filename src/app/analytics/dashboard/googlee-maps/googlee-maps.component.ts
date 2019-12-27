import { Component, Input, Directive } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Router } from '@angular/router';
//declare var google: any;
@Component({
  selector: 'app-googlee-maps',
  templateUrl: './googlee-maps.component.html'
})


export class GoogleeMapsComponent {
  public lat: number = 43.653908;
  public lng: number = -79.384293;
  public latnew: number = 43.595310;
  public lngnew: number = -79.640579;
  public latnew2: number = 43.683334;
  public lngnew2: number = -79.766670;
  public latnew3: number = 43.255203;
  public lngnew3: number = -79.843826;
  public latnew4: number = 45.420315;
  public lngnew4: number = -75.695419;
  public zoom: number = 7;
  public settings: Settings;

  @Input('markerClickable') clickable: boolean = true;
  @Input() openInfoWindow: boolean = true;

  constructor(public appSettings: AppSettings,private _router:Router) {
    this.settings = this.appSettings.settings;
  }
  /* public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT
  }; */

  openWindow(e) {
    window.open("/#/IBW/manage/project-dashboard", "_blank");
    // this._router.navigateByUrl("/IBW/sales/projects");
  }
}