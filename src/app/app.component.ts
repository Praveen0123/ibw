import { Component, ViewChild, ChangeDetectorRef} from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
// import { setTheme } from 'ngx-bootstrap/utils/ngx-bootstrap-utils';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { setTheme } from 'ngx-bootstrap';
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings: Settings;
  loaderMessage$: Observable<any>;
  message$: Observable<any>;

  private toasterService: ToasterService;
  constructor(public appSettings:AppSettings, toasterService: ToasterService,private cdref: ChangeDetectorRef, public _loaderService : LoaderService){
    this.toasterService = toasterService;
    this.settings = this.appSettings.settings;
    setTheme('bs4');
  } 

  ngOnInit() {
    //Checking for the loader to display or not
    this.loaderMessage$ = this._loaderService.message$;
   }
  
  ngAfterContentChecked() {
    //Change Directory Reference
    this.cdref.detectChanges();
  }

  public config: ToasterConfig =
    new ToasterConfig({
      showCloseButton: false,
      limit: 1,
      tapToDismiss: true,
      timeout: 2000,
      positionClass: 'toast-top-right',
      animation: 'fade'
    });
}