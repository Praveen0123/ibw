import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin   } from 'rxjs';
import { Quotes, Sales } from './quotes/quotes.model';
import { environment } from 'src/environments/environment';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})

export class ManageService {
  constructor(public http:Http,private _http:HttpClient) { }

//clients 
  public leadUrl = "api/Leads";
  
  getleads() {
      return this._http.get(this.leadUrl);
  }

  addlead(lead){	    
      return this._http.post(this.leadUrl, lead);
  }

  updatelead(lead){
      return this._http.put(this.leadUrl, lead);
  }

  deletelead(id: number) {
      return this._http.delete(this.leadUrl + "/" + id);
  } 

  /*Campaign*/
public campaignUrl = "api/Quotes";
  
getQuotes(): Observable<Quotes[]> {
    return this._http.get<Quotes[]>(this.campaignUrl);
}

addcampaign(campaign:Quotes){	    
    return this._http.post(this.campaignUrl, campaign);
}

updatecampaign(campaign:Quotes){
    return this._http.put(this.campaignUrl, campaign);
}

deletecampaign(id: number) {
    return this._http.delete(this.campaignUrl + "/" + id);
} 

//contact

public ContactsUrl = "api/Contacts";
  
getcontacts(): Observable<Sales[]> {
    console.log("called");
    return this._http.get<Sales[]>(this.ContactsUrl);
}

addcontact(contact:Sales){	    
    return this._http.post(this.ContactsUrl, contact);
}

updatecontact(contact:Sales){
    return this._http.put(this.ContactsUrl, contact);
}

deletecontact(id: number) {
    return this._http.delete(this.ContactsUrl + "/" + id);
} 

//client

public clientsUrl = "api/Clients";

public upsertClient(data)
{
    return this._http.post(environment.apiUrl+"api/upsert-ibw-clients-all", data)
}

public getAllClients(){
    return this._http.get(environment.apiUrl+"api/get-all-clients")
}

public deleteClient(value)
{
    return this._http.post(environment.apiUrl+"api/delete-client", value)
}

public ChangeClientFlag(data)
{
    return this._http.post(environment.apiUrl+"api/change-client-flag", data)
}

public ChangeClientStatus(data)
{
    return this._http.post(environment.apiUrl+"api/change-client-status", data)
}

public GetCountries()
{
    return this._http.get(environment.apiUrl+"api/get-countries")
}

public GetClientTypes()
{
    return this._http.get(environment.apiUrl+"api/get-client-types")
}

public GetStates(countryID)
{
    return this._http.get(environment.apiUrl+"api/get-states/?id="+countryID)
}

public GetMuncipalities()
{
    return this._http.get(environment.apiUrl+"api/get-muncipalities")
}

public getLatLangPositions(addressArray) {	
    let api_key = 'AIzaSyAgDUII_kvGfCJNmu4qhhzjl8YNzblV9Ng';
    let observableBatch = [];
    addressArray.forEach((key) => {
      if(key.postalCode) {
        observableBatch.push(this._http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+ key.postalCode+ "&sensor=false&key="+api_key+"").map(function(resp){
          let temp = {};
          temp['label'] = key.label;
          temp['response'] = resp;
          return temp;
        }));
      }
    });
    return forkJoin(observableBatch);
  }

public SaveGridColumns(gridArray){
    var data = {'gridColumnNames': gridArray}
    return this._http.post(environment.apiUrl+ "api/save-gridcolumns", data);
}

public GetGridColumns(userID, screenName)
{
    return this._http.get(environment.apiUrl+ "api/get-gridcolumns?id="+userID+"&screenName="+screenName);
}

public InsertGridColumns(gridArray){
    var data = {'gridColumnNames': gridArray}
    return this._http.post(environment.apiUrl+ "api/insert-gridcolumns", data);
}
public bulkInsertAssets(assetsData)
{
    return this._http.post(environment.apiUrl+ "api/bulk-insert-assets", assetsData);
}
}
