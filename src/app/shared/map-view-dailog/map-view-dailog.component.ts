import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'map-view-dailog',
  templateUrl: './map-view-dailog.component.html',
  styleUrls: ['./map-view-dailog.component.scss']
})
export class MapViewDailogComponent implements OnInit {

  sites = ["71 Mearns / 249", "71 Mearns Ct 20", "20 Mearns Ct"];
  SowTypes = ["Legal", "Engineering", "Construction", "Internal"];
  projects = ["5-12564", "4-24642", "4-82324", "6-10235"];


  constructor(public dialogRef: MatDialogRef<MapViewDailogComponent>, public router: Router) {
  }
  public lat: number = 43.653963;
  public lng: number = -79.387207;
  public latnew: number = 44.0007518;
  public lngnew: number = -79.4372217;
  public latnew2: number = 45.2603984;
  public lngnew2: number = -75.8082383;
  public latnew3: number = 46.22545288;
  public lngnew3: number = -80.33203125;
  public latnew4: number = 42.52069953;
  public lngnew4: number = -81.87011719;
  public zoom: number = 7;

  ngOnInit() {

  }
  @Input('markerClickable') clickable: boolean = true;
  @Input() openInfoWindow: boolean = true;


  /* public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT
  }; */

  openWindow(e) {
    window.open("/#/IBW/sales/projectdashboard", "_blank");
    // this._router.navigateByUrl("/IBW/sales/projects");
  }

  close(): void {
    this.dialogRef.close();
  }

  saveInfo() {
    this.dialogRef.close();
  }
}
