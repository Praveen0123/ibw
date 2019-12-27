import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private _http: HttpClient) { }

  getScreenPermissions(roleId) {
    console.log(roleId)
    return this._http.get(environment.apiUrl + "api/get-all-screen-permissions/?roleId=" + roleId)
  }
  postScreenPermissions(values: Object) {
    return this._http.post(environment.apiUrl + "api/insert-permission-screens", values)
  }

}
