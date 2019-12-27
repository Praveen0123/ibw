import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data:any;
  public setData(data: any){
    this._data = data;
}

public getData(): Observable<any> {
  console.log("data:"+this._data);
  if(this._data != null && this._data != undefined){
  return this._data.asObservable();}
  else
 return null;
  //return this._data;
}

  constructor() { }
}
