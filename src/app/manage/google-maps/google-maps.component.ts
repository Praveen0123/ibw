import { Component,OnInit } from '@angular/core';
import { Settings } from '../../app.settings.model';
import { AppSettings } from '../../app.settings';
//declare var google: any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html'
})
export class GoogleMapsComponent implements OnInit{

  ngOnInit() {
    
  }
  public pointers= [{"id":1,"lat":32.7767,"lng":-96.7970},{"id":2,"lat":41.8781,"lng":-87.6298},{"id":3,"lat":32.7157,"lng":-117.1611},{"id":4,"lat":37.7749,"lng":-122.4194},{"id":5,"lat":49.2827,"lng":-123.1207}];
   public lat: number = 32.7767;
   public lng: number = -96.7970;
  // public latnew: number = 41.8781;
  // public lngnew: number = -87.6298;
  // public latnew2: number = 32.7157;
  // public lngnew2: number = -117.1611;
  // public latnew3: number = 37.7749;
  // public lngnew3: number = -122.4194;
  // public latnew4: number = 49.2827;
  // public lngnew4: number = -123.1207;
  public zoom: number = 4;
  public settings: Settings;
  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
  }
  /* public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT
  }; */

  // public popPoint() {
  //   this.pointers.splice(0,1);
  //   console.log(this.pointers);
  // }

}