import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  private loaderState = new Subject<any>();
  message$: Observable<any> = this.loaderState.asObservable();

  showLoader() {
         this.loaderState.next(true);
         console.log('show')
  }
  
  hideLoader() {
      this.loaderState.next(false);
      console.log('hide')
  }
}
