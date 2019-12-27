import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaderResponse } from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToasterService } from 'angular2-toaster';
import { LoaderService } from './loader.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorJWTService implements HttpInterceptor {
  loader: boolean;
  isLoaderActive: boolean;
  constructor(private toastr : ToasterService, public _loaderService: LoaderService,private _snackBar: MatSnackBar) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // //Initialising Loader when the http request generated
    // this.addLoader();
    const user = JSON.parse(localStorage.getItem('userloginsession'));
    // console.log(request.url);
    var userToken = "";
    var userId = "";
    if(user != null && !(request.url.match(/maps.googleapis.com/g)))
    {
      userToken = user['UserDetails']['vc_auth_token']
      userId = user['UserDetails']['int_user_id']
      request = request.clone({
        setHeaders: {
          AuthorizedToken: userToken,
          User: userId
        }
    });
    }
   
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if(event.body.Status == true){
            if( event.body.Message != null && event.body.Message.trim() != ""){
              this._snackBar.open(event.body.Message,'OK',{
                duration:3000,
                panelClass:'greenSnackBar'
              });
            }
          }
          else if(event.body.Status == false){
            this._snackBar.open(event.body.Message,'OK',{
              duration:3000,
              panelClass:'redSnackBar'
            });
          }
          // this.removeLoader();
        }
      })
    );

    
  }

  // getResponse(response: HttpResponse<any>): Observable<HttpEvent<any>> {
  //   return ;
  // }

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
