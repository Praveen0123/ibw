import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { jobCodeDataType } from './job-codes/job-codes.component';
import { expenseCodeDataType } from './expense-codes/expense-codes.component';
import { Holiday } from './availability/holidays/holidays.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }
    


  /* Job Codes */
  addJobCode(jobCode: jobCodeDataType) {
    return this._http.post(environment.apiUrl + "api/jobcode-upsert", jobCode);
  }

  getJobCodes() {
    return this._http.get(environment.apiUrl + "api/get-jobcode");
  }

  updateJobCodeStatus(jobCodeId, status) {
    return this._http.post(environment.apiUrl + "api/update-job-code-status", { JobCodeId: jobCodeId, IsActive: status });
  }

  deleteJobCode(jobCodeId) {
    return this._http.post(environment.apiUrl + "api/delete-job-code", { JobCodeId: jobCodeId })
  }
  /*End of Job Codes */

//Lookup Options
getLookupOptions(){
  return this._http.get(environment.apiUrl + "api/get-lookup-options")
}
public UpsertLookup(lookup) {
  console.log(lookup, 'service UpsertLookup')
  return this._http.post(environment.apiUrl + "api/update-lookup", lookup);
}
public deleteLookup(value:number) {
  console.log(value,'delete service');
  return this._http.get(environment.apiUrl + 'api/lookup-delete?lookupId='+value);
}
///////////////


/* Expense Codes */
addExpenseCode(expenseCode: expenseCodeDataType) {
  return this._http.post(environment.apiUrl + "api/expense-code-upsert", expenseCode);
}

getExpenseCodes() {
  return this._http.get(environment.apiUrl + "api/get-expense-codes");
}

updateExpenseCodeStatus(expenseCodeId, status) {
  return this._http.post(environment.apiUrl + "api/update-expense-code-status", { ExpenseCodeId: expenseCodeId, IsActive: status });
}

deleteExpenseCode(expenseCodeId) {
  return this._http.post(environment.apiUrl + "api/delete-expense-code", { ExpenseCodeId: expenseCodeId })
}
/*End of Expense Codes */






  public userUpsert(data) {
    return this._http.post(environment.apiUrl + 'api/upsert-ibw-user/', data);
  }
  public getAllUsers() {
    return this._http.get(environment.apiUrl + 'api/get-all-users/');
  }
  public getAllUserRoles() {
    return this._http.get(environment.apiUrl + 'api/get-all-user-roles/');
  }
  public getAllJobCodes() {
    return this._http.get(environment.apiUrl + 'api/get-all-job-codes/');
  }
  public getAllEmployeeTypes() {
    return this._http.get(environment.apiUrl + 'api/get-all-employee-types/');
  }

  public deleteUser(values) {
    return this._http.post(environment.apiUrl + 'api/delete-user', values);
  }
  public userStatus(values) {
    return this._http.post(environment.apiUrl + 'api/change-status', values);
  }
  public getAllProjectManagers() {
    return this._http.get(environment.apiUrl + 'api/get-all-project-managers');
  }

  public getAllUserRolesWithCount() {
    console.log('test')
    return this._http.get(environment.apiUrl + "api/get-all-user-roles-with-count");
  }
  public upsertPermissionRole(values) {
    return this._http.post(environment.apiUrl + "api/permission-role-upsert", values);
  }
  public deleteRole(userValues) {
    return this._http.post(environment.apiUrl + "api/delete-role", userValues);
  }

  public usersOfRoleUpsert(values) {
    return this._http.post(environment.apiUrl + "api/upsert-users-of-role/", values);
  }

  // Settings
  public getSettings() {
    return this._http.get(environment.apiUrl + "api/get-settings")
  }

  public updateSettings(settingId, newValue) {
    return this._http.post(environment.apiUrl + "api/update-setting-value", { SettingId: settingId, Value: newValue });
  }

  //End of Settings
  // Master data Assets
  public getAssets() {
    console.log('assets get service');
    return this._http.get(environment.apiUrl + "api/get-assets");
  }
  public getAssetCategorySerial(categoryName: string, categoryId: number) {
    console.log(categoryName, categoryId, 'service serial')
    return this._http.post(environment.apiUrl + "api/get-assets-category-serial", { 'categoryName': categoryName, 'categoryId': categoryId });
  }
  public UpsertAsset(asset) {
    console.log(asset, 'service UpsertAsset')
    if (asset.assetId == null)
      asset.assetId = 0;
    return this._http.post(environment.apiUrl + "api/update-asset", asset);
  }
  public assetStatusChange(values) {
    return this._http.post(environment.apiUrl + 'api/asset-status-change', values);
  }
  public deleteAsset(values:number) {
    console.log(values,'delete service');
    return this._http.get(environment.apiUrl + 'api/asset-delete?assetId='+values);
  }
  //End
  // Holidays
  public getHolidays() {
    console.log('getHolidays  service');
    return this._http.get(environment.apiUrl + "api/get-holidays");
  }
  public saveHolidays(holiday) {
    console.log(holiday, 'service SaveHolidays')
    return this._http.post(environment.apiUrl + "api/save-holidays", holiday);
  }
  public deleteHoliday(holidayId:number) {
    console.log(holidayId,'deleteHoliday service');
    return this._http.get(environment.apiUrl + 'api/holiday-delete?holidayId='+holidayId);
  }
  //End Holidays

}
