import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { AdminService } from '../admin.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [AdminService]
})
export class SettingsComponent implements OnInit {

  checkId: number;
  newValue: any = [];
  settingsData: Object[];
  constructor(private _adminService: AdminService, private _snackBar: MatSnackBar) {
    this.GetSettings()
  }

  ngOnInit() {
  }
  onlyNumbers(event) {
    var k;
    k=event.charCode;
    return (k > 47 && k < 58);
  }

  GetSettings() {
    this._adminService.getSettings().subscribe(data => {
      this.settingsData = data['Data'];
    })
  }

  UpdateSettingValue(settingId, newValue, inputType) {
    this.checkId = 0;

    if (inputType == 'number' && parseInt(newValue) < 1) {

      this.checkId = settingId;

      this._snackBar.open('Please enter valid input', 'OK', {
        duration: 3000,
        panelClass: 'redSnackBar'
      });
    }
    else if (inputType == 'email' && (newValue == undefined || newValue == "")) {

      this.checkId = settingId;

      this._snackBar.open('Please enter valid input', 'OK', {
        duration: 3000,
        panelClass: 'redSnackBar'
      });
    }
    else {
      console.log(newValue, "new value")
      this._adminService.updateSettings(settingId, newValue).subscribe(
        data => { this.GetSettings() }
      )
    }

  }


}
