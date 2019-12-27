import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  constructor(private _http : HttpClient) { }
  
  public upsertMunicipality(values){
    console.log(values);
    return this._http.post(environment.apiUrl+"api/upsert-municipalities/", values);
  }

  public deleteMunicipality(values){
    return this._http.post(environment.apiUrl+"api/delete-municipality/", values);
  }
  public getAllMunicipalities(){
    return this._http.get(environment.apiUrl+"api/get-all-municipalities/");
  }

  public upsertPotentialLevel(values){
    return this._http.post(environment.apiUrl+"api/upsert-potential-levels/", values);
  }

  public getAllPotentialLevels(){
    return this._http.get(environment.apiUrl+"api/get-all-potential-levels/");
  }
  public deletePotentialLevel(values){
    return this._http.post(environment.apiUrl+"api/delete-potential-level/", values);
  }

  public municipalityBulkUpload(values){
    return this._http.post(environment.apiUrl+"api/municipalities-bulk-upload", values)
  }

  
}
