import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetMasterDataServiceService {

  private dataSource = new BehaviorSubject<any>([{name:'Mani',phone:'9999999999',mail:'mani@gmail.com'}]);
  currentData = this.dataSource.asObservable();
  constructor() { }

  changeData(data: any) {
    this.dataSource.next(data)
  }
}
