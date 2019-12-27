import { Component } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
//declare var google: any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html'
})
export class GoogleMapsComponent {
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
  projectName: string = '5-98091'
  //public MapTypeId: 'hybrid';
  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
  }
  /* public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT
  }; */
  onMouseOver(infoWindow) {
    infoWindow.open();
  }
  
  onMouseOut(infoWindow) {
    infoWindow.close();
  }

  mapData = [
    {lat:43.653908, long:-79.384293, projectName: '5-98091'},
    {lat:43.595310, long:-79.640579, projectName: '4-24642'},
    {lat:43.683334, long:-79.766670, projectName: '6-10235'},
    {lat:43.255203, long:-79.843826, projectName: '2-51152'},
    {lat:45.420315, long:-75.695419, projectName: '7-14164'}
  ]

  mapDataCount = [1,2,3,4,5]
}