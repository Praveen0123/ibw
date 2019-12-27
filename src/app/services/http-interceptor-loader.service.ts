import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorLoaderService implements HttpInterceptor {
  loader: boolean;
  isLoaderActive: boolean;
  constructor(public _loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Initialising Loader when the http request generated
    this.addLoader();
    console.log(req);
    return next.handle(req).pipe(
      finalize(() => this.removeLoader())
    );
  }

  public removeLoader() {
    this._loaderService.hideLoader();
    this.loader = false;
    this.isLoaderActive = false;
  }

  public handleSuccess(res) {
    this.removeLoader();
  }

  public addLoader() {
    if (!this.loader) {
      if (this.isLoaderActive) {
        this._loaderService.showLoader();
        this.loader = true;
      }
    }
  }
}
